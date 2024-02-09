import { state } from "../../src/state";

export function init() {
  class TitleEl extends HTMLElement {
    greeting: string;
    constructor() {
      super();
      state.subscribe(()=> this.syncWithState());
      this.syncWithState();
    }

    syncWithState(){
      const lastState = state.getState();
      this.greeting = lastState.name;
      this.render();
    }
    render() {
      var type = this.getAttribute("type");
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style!.textContent = `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  
          .root{
              font-family: "Poppins", sans-serif;
              font-size: 52px;
              font-weight: bold;
              margin: 30px;
              width: 271px;
              display: flex;
          }

          @media (min-width: 600px){
            .root{
                width: 593px;
            }
        }
          `;

      shadow.appendChild(style!);
      var div = document.createElement("div");
      div.classList.add("root");
      if(type == "welcome-title"){
      div.textContent = "Te damos la bienvenida a esta página"}
      else if(type == "form-title"){
        div.innerHTML = `Hola ${this.greeting}`
      };
      shadow.appendChild(div);
    }
  }
  if (!customElements.get("title-el")) {
    customElements.define("title-el", TitleEl);
  }
}

init();
