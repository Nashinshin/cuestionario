const e=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");t.innerHTML=`
  <header-el></header-el>
  <title-el type="welcome-title"></title-el>
  <large-el type="welcome-large"></large-el>
  <form-el class="welcome-form"></form-el>
  <footer-el></footer-el>
  `;let o=t.querySelector(".welcome-form"),n=o?.shadowRoot?.querySelector("form");return n?.addEventListener("submit",t=>{t.preventDefault(),e.goTo("../form")}),t}},{path:/\/form/,component:function(){let e=document.createElement("div");return e.innerHTML=`
    <header-el></header-el>
    <title-el type="form-title"></title-el>
    <large-el type="form-large"></large-el>
    <label-el type="email"></label-el>
    <label-el type="food"></label-el>
    <select-el></select-el>
    <button-el type="form-button"></button-el>
    <footer-el></footer-el>
    `,e}}];function t(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=`

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
        `,e.appendChild(t);var o=document.createElement("div");o.classList.add("root"),o.textContent="Header",e.appendChild(o)}}customElements.get("header-el")||customElements.define("header-el",e)}function o(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.getAttribute("type"),t=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
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
          `,t.appendChild(o);var n=document.createElement("div");n.classList.add("root"),n.textContent="Footer","footer-thankyou"==e&&(n.className="thankyou-footer"),t.appendChild(n)}}customElements.get("footer-el")||customElements.define("footer-el",e)}t(),o();const n={data:{list:[]},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t();console.log("cambie de estado",e)},subscribe(e){this.listeners.push(e)},addItems(e){let t=this.getState();t.list.push(e),this.setState(t)}};function s(){class e extends HTMLElement{constructor(){super(),n.subscribe(()=>this.syncWithState()),this.syncWithState()}syncWithState(){let e=n.getState();this.greeting=e.name,this.render()}render(){var e=this.getAttribute("type"),t=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
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
          `,t.appendChild(o);var n=document.createElement("div");n.classList.add("root"),"welcome-title"==e?n.textContent="Te damos la bienvenida a esta página":"form-title"==e&&(n.innerHTML=`Hola ${this.greeting}`),t.appendChild(n)}}customElements.get("title-el")||customElements.define("title-el",e)}function a(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("type");var t=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 22px;
                font-weight: medium;
                margin: 40px auto;
                width: 315px;
            }

            @media (min-width: 600px){
              .root{
                width: 505px;
              }
          }
            `,t.appendChild(o);var n=document.createElement("div");n.classList.add("root"),"welcome-large"==e?n.textContent="Para continuar ingresá tu nombre":"form-large"==e&&(n.textContent="Necesitamos algunos datos más"),t.appendChild(n)}}customElements.get("large-el")||customElements.define("large-el",e)}function i(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("type");var t=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
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
            `,t.appendChild(o);var n=document.createElement("div"),s=document.createElement("input");n.classList.add("root"),s.classList.add("root"),s.type="text","name"==e?(n.textContent="Nombre",s.className="input-element",s.placeholder="Ingresa tu nombre"):"email"==e?(n.textContent="Email",s.className="input-element"):"food"==e&&(n.textContent="Comida favorita",s.className="input-element"),t.appendChild(n),t.appendChild(s)}}customElements.get("label-el")||customElements.define("label-el",e)}function l(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.getAttribute("type"),t=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
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
            `,t.appendChild(o);var n=document.createElement("button");n.classList.add("root"),"welcome-button"==e?n.textContent="Comenzar":"form-button"==e&&(n.textContent="Enviar"),t.appendChild(n)}}customElements.get("button-el")||customElements.define("button-el",e)}function r(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=`
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
            `,e.appendChild(t);var o=document.createElement("div");o.classList.add("root"),o.textContent="Alguna de estas tres opciones",e.appendChild(o);var n=document.createElement("select");let s=document.createElement("option"),a=document.createElement("option"),i=document.createElement("option");n.classList.add("root"),n.className="select-element",s.value="1",s.text="Rock",a.value="2",a.text="Paper",i.value="3",i.text="Scissors",n.add(s,null),n.add(a,null),n.add(i,null),e.appendChild(n)}}customElements.get("select-el")||customElements.define("select-el",e)}s(),a(),i(),l(),r();class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
        <form>
            <label for="name">
              <custom-text class="name-text">Nombre</custom-text>
            </label>
            <input class="input" id="name" type="text" placeholder="Ingres\xe1 tu nombre" name="text" required>
            <button class="submit-button"><custom-text variant="large">Comenzar</custom-text></button>
          </form>
        `;let e=this.shadow.querySelector("form");e?.addEventListener("submit",e=>{e.preventDefault();let t=e.target.text.value;n.setState({...n.getState(),name:t})});var t=document.createElement("style");t.textContent=`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .name-text{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                width: 320px;
                margin: 0px auto;
                display: flex;
            }

            .input{
              font-family: "Poppins", sans-serif;
              font-size: 18px;
              width: 312px;
              height: 45px;
              margin: 0px auto 30px auto;
              border-radius: 4px;
              display: flex;
            }

            .submit-button{
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
            }`,this.shadow.appendChild(t)}}customElements.define("form-el",d),function(t){function o(e){history.pushState({},"",e),n(e)}function n(n){for(let s of(console.log("el handle route recibió una nueva ruta",n),e)){let e=s.component({goTo:o});s.path.test(n)&&(t.firstChild&&t.firstChild.remove(),t.appendChild(e))}}n(location.pathname)}(document.querySelector(".root")),t(),o(),s(),a(),i(),l(),r();
//# sourceMappingURL=index.ad6f0bcc.js.map
