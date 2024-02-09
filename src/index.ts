import {initRouter} from "./router";
import { init as initHeader } from "../components/header";
import { init as initFooter } from "../components/footer";
import { init as initTitle} from "../components/title";
import {init as initLarge} from "../components/large";
import {init as initLabel} from "../components/label";
import {init as initButton} from "../components/button";
import {init as initSelect} from "../components/select";
import "../components/form-welcome/";

(function(){
    const root = document.querySelector(".root");
    initRouter(root!);
})();

(function () {
  initHeader();
  initFooter();
  initTitle();
  initLarge();
  initLabel();
  initButton();
  initSelect();
})();
