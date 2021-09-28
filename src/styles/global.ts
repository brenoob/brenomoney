import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{  //variavel css 
    --background:#F0F2F5;
    --red:#e52e4b;
    --green:#33CC95;
    --blue:#5429cc;

    --blue-light:#6933ff;
    --text-title:#363f5f;
    --text-body:#969cb3;

    --shape:#ffffff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//font-size:16px; e a padrao que vem ideal para (desktop)
//entao 1rem = 16px
html{
    @media(max-width: 1080px){
        font-size: 93.75%; //16*0,9375= 15px 0,9375 e o mesmo que 15px so que em %
    }                       //usa-se % porque mesmo se o cliente estiver com configuração de aumentar ou diminuir a fonte no celular ou computador
                            //a % vai aumentar de acordo com a preferencia do usuario e sem a % ele vai fixar no valor que a gente passar  ex: sempre em 15px 
    @media(max-width: 720px){
        font-size: 87.5%; //16*0,875= 14px 87.5 e o mesmo que 14px so que em %
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;//fonts do browser ficam um pouco mais nitidas vamos dizer assim
}
body, input, textarea, button { //porque estes por padrao nao importam a font do corpo do html entao subscrevo todos eles
    font-family: 'Poppins', sans-serif;
    font-weight: 400;//porque o tamanho da font do html normal e 500 e da poppins e 400
}
h1, h2, h3, h4, h5, h6, strong { //tags de negrito
    font-weight: 600;//que e o tamanho de negrito que quero na font poppins pois foi feito assim o layout do site
}
button{
    cursor: pointer;
}
[disabled]{
    opacity:0.6;
    cursor:not-allowed;
}
`;
