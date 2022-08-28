import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        a, a:hover{
            text-decoration: none;
        }
        audio, img, iframe, video{
            display: inline-block;
            height: auto;
            width: 100%;
        }
    }
`;

export { GlobalStyles };
