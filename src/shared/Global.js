import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --white: hsl(0, 0%, 98%);
    --black: hsl(0, 0%, 8%);
    --backdrop: hsl(0, 0%, 8%, .6);
    --gray: hsl(0, 0%, 41%);
}


#root,
html,
body, 
.container-app {
    height: 100%;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Epilogue', sans-serif;
}




`;

export default GlobalStyles;
