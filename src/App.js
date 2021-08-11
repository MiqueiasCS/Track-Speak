import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Header from "./components/header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
