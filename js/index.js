import formularioContacto from "./DOM/formulario.js";
import menuhamburger from "./DOM/menu_hamburguer.js";
import scroll from "./DOM/scroll.js";
import scrollSpy from "./DOM/scroll_spia.js";
import videoInicio from "./DOM/video.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menuhamburger(".menu-btn",".menu",".menu a");
    videoInicio();
    formularioContacto(".contact-form",".contact-form-loader",".contact-form-response");
    scrollSpy();
    scroll(".header");
});