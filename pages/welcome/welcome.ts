export function initWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-el></header-el>
  <title-el type="welcome-title"></title-el>
  <large-el type="welcome-large"></large-el>
  <form-el class="welcome-form"></form-el>
  <footer-el></footer-el>
  `;
  const welcomeForm = div.querySelector(".welcome-form");
  const formEl = welcomeForm?.shadowRoot?.querySelector("form");
  formEl?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    params.goTo("../form");
  });
  return div;
}
