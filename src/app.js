import "regenerator-runtime";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./script/component/components.js";
import main from "./script/view/main.js";
import onScrollPage from "./script/view/func-scroll.js";

document.querySelector(".navbar-toggler").classList.add("d-none");
document.addEventListener("DOMContentLoaded", main);

window.addEventListener("scroll", onScrollPage);
window.addEventListener("scroll", main);
