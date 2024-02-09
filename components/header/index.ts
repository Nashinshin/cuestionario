export function init() {
  class HeaderEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style!.textContent = `

        .root{
            background-color: #FF8282;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto", sans-serif; 
            font-size: 22px;
        }

        @media(min-width: 600px){
            height: 80px;
        }
        `;

      shadow.appendChild(style!);

      var div = document.createElement("div");
      div.classList.add("root");
      div.textContent = "Header";
      shadow.appendChild(div);
    }
  }
  if (!customElements.get("header-el")) {
    customElements.define("header-el", HeaderEl);
  }
}

init();
