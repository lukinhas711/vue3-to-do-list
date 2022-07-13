import { createApp } from "vue"; // * inportando o createApp de dentro do pacote Vue
import App from "./App.vue"; // * salvando o arquivo app.vue dentro da variavel Vue

createApp(App).mount("#app"); // * Usando o createApp para montar o componente no meu id app que esta dentro do index.html na pasta public
