

export function init() {
  class LabelEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const type = this.getAttribute("type");
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style!.textContent = `
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                width: 312px;
                margin: 0px auto;
            }

            .input-element{
              font-family: "Poppins", sans-serif;
              font-size: 18px;
              width: 312px;
              height: 45px;
              margin: 0px auto 30px auto;
              border-radius: 4px;
              display: flex;
            }

            @media (min-width: 600px){
                .root{
                    width: 353px;
                }
            `;

      shadow.appendChild(style!);

      var div = document.createElement("div");
      var input = document.createElement("input");
      div.classList.add("root");
      input.classList.add("root");
      input.type = "text";
      if (type == "name") {
        div.textContent = "Nombre";
        input.className = "input-element";
        input.placeholder = "Ingresa tu nombre";
      } else if (type == "email") {
        div.textContent = "Email";
        input.className = "input-element";
      } else if (type == "food") {
        div.textContent = "Comida favorita";
        input.className = "input-element";
      }
      shadow.appendChild(div);
      shadow.appendChild(input);
    }
  }
  if (!customElements.get("label-el")) {
    customElements.define("label-el", LabelEl);
  }
}

init();
