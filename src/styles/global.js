import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

:root{
    --red: #D73333;
    --white: #ECF4FE;
    --green: #3C910B;
    --black: #000412
}
`;
