import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');
    
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
        background-color: #f0f1f6;
    }

    p{
        opacity: 0.6;
        line-height: 1.5em;
    }

    img{
        max-width: 100%;
    }
`

