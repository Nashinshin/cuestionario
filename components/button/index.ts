export function init() {
    class ButtonEl extends HTMLElement {
      constructor() {
        super();
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
                font-size: 18px;
                background-color: #9CBBE9;
                width: 320px;
                height: 55px;
                border-radius: 4px;
                margin: 10px auto 80px auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @media (min-width: 600px){
                .root{
                    width: 353px;
                }
            `;
  
        shadow.appendChild(style!);
        
        var inputButton = document.createElement("button");
        inputButton.classList.add("root");
        if(type == "welcome-button"){
          inputButton.textContent= "Comenzar";
        }
        else if(type == "form-button"){
          inputButton.textContent = "Enviar";
        }
        shadow.appendChild(inputButton);
        
      }
    }
    if (!customElements.get("button-el")) {
      customElements.define("button-el", ButtonEl);
    }
  }
  
  init();