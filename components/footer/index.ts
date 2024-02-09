export function init() {
  class FooterEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var type = this.getAttribute("type");
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style!.textContent = `
      .root{
        background-color: #FFA0EA;
        height: 233px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto", sans-serif;
        font-size: 22px;
      }
          .thankyou-footer{
            margin-top: 300px;
            background-color: #FFA0EA;
            height: 233px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto", sans-serif;
            font-size: 22px;
          }
          `;

      shadow.appendChild(style!);

      var div = document.createElement("div");
      div.classList.add("root");
      div.textContent = "Footer";
      if(type == "footer-thankyou"){
        div.className = "thankyou-footer";
      }
      shadow.appendChild(div);
    }
  }
  if (!customElements.get("footer-el")) {
    customElements.define("footer-el", FooterEl);
  }
}

init();
