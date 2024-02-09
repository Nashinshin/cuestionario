import { initWelcome } from "../pages/welcome/welcome";
import { initForm } from "../pages/form/form";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/form/,
    component: initForm,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("el handle route recibió una nueva ruta", route);
    for (const r of routes) {
      const el = r.component({ goTo: goTo });
      if (r.path.test(route)) {
        if (container!.firstChild) {
          container!.firstChild.remove();
        }
        container!.appendChild(el);
      }
    }
  }
  handleRoute(location.pathname);
}
