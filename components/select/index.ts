export function init() {
    class SelectEl extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        var shadow = this.attachShadow({ mode: "open" });
        var style = document.createElement("style");
        style!.textContent = `
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                width: 320px;
                margin: 0 auto;
            }

            .select-element{
              width: 320px;
              height: 55px;
              font-size: 18px;
              font-family: "Poppins", sans-serif;
              margin: 0 auto 50px auto;
              display: flex;
            }

            @media (min-width: 600px){
                .root{
                    width: 353px;
                }
            `;
  
        shadow.appendChild(style!);
  
        var div = document.createElement("div");
        div.classList.add("root");
        div.textContent = "Alguna de estas tres opciones";
        shadow.appendChild(div);
        var select = document.createElement("select");
        const opt1 = document.createElement("option");
        const opt2 = document.createElement("option");
        const opt3 = document.createElement("option");
        select.classList.add("root");

        select.className = "select-element";

        opt1.value = "1";
        opt1.text = "Rock";

        opt2.value = "2";
        opt2.text = "Paper";

        opt3.value = "3";
        opt3.text = "Scissors";

        select.add(opt1, null);
        select.add(opt2, null);
        select.add(opt3, null);

        shadow.appendChild(select);
      }
    }
    if (!customElements.get("select-el")) {
      customElements.define("select-el", SelectEl);
    }
  }
  
  init();