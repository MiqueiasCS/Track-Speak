import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --red: #D73333;
    --white: #ECF4FE;
    --green: #3C910B;
    --black: #000412
    --blue: #0177B7;
}

*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body{
    background-color: var(--white);
    font-family: roboto, 'sans-serif';
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

`;
