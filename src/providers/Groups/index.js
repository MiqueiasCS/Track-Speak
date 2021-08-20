import { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { AuthTokenContext } from "../Auth";
import { toast } from "react-toastify";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const [page, setPage] = useState(1);
  const { authN } = useContext(AuthTokenContext);

  const createGroup = (group) => {
    const newGroup = { ...group };

    api
      .post("/groups/", newGroup, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMyGroups([...myGroups, res.data]);
        setAllGroups([...allGroups, res.data]);
      })
      .catch(() => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const subscribeGroup = (group) => {
    api
      .post(`/groups/${group.id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMyGroups([...myGroups, group]);

        const updateAllGroups = allGroups.map((groups) => {
          if (groups.id === group.id) {
            groups.users_on_group = [...groups.users_on_group, res.data.user];
          }
          return groups;
        });
        setAllGroups(updateAllGroups);
      })
      .catch(() => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const updateGroup = (group, groupModify) => {
    const updatedAllGroups = allGroups.map((item) => {
      if (item.id === group.id) {
        item = { ...item, ...groupModify };
      }
      return item;
    });

    const updatedGroup = myGroups.map((item) => {
      if (item.id === group.id) {
        item = { ...item, ...groupModify };
      }
      return item;
    });

    api
      .patch(`/groups/${group.id}/`, groupModify, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMyGroups(updatedGroup);
        setAllGroups(updatedAllGroups);
      })
      .catch(() => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    if (authN) {
      setToken(JSON.parse(localStorage.getItem("token")));
      if (!!token) {
        api
          .get("/groups/subscriptions/", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setMyGroups(res.data))
          .catch(() => {
            toast.error("Something went wrong!!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
    }
  }, [authN, token]);

  useEffect(() => {
    api
      .get("/groups/", { params: { category: "Track-Speak", page: page } })
      .then((res) => {
        setAllGroups([...allGroups, ...res.data.results]);
        if (!!res.data.next) {
          setPage(page + 1);
        }
      })

      .catch(() => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [page]);

  return (
    <GroupsContext.Provider
      value={{
        myGroups,
        setMyGroups,
        createGroup,
        subscribeGroup,
        allGroups,
        updateGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
