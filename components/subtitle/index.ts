export function init() {
    class SubTitleEl extends HTMLElement {
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
                font-size: 38px;
                font-weight: bold;
                width: 315px;
                margin: 0 auto;
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
        
        if(type == "subtitulo-1"){
            div.textContent = "Subtítulo";
        }
        else if(type == "subtitulo-2"){
            div.textContent = "Subtítulo 2"
        }

        shadow.appendChild(div);
      }
    }
    if (!customElements.get("subtitle-el")) {
      customElements.define("subtitle-el", SubTitleEl);
    }
    
  }
  
  init();