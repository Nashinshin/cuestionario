import { state } from "../../src/state";

class WelcomeFormEl extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <form>
            <label for="name">
              <custom-text class="name-text">Nombre</custom-text>
            </label>
            <input class="input" id="name" type="text" placeholder="Ingresá tu nombre" name="text" required>
            <button class="submit-button"><custom-text variant="large">Comenzar</custom-text></button>
          </form>
        `;
        const formEl = this.shadow.querySelector("form");

		formEl?.addEventListener('submit', (e: Event) => {
			e.preventDefault();
			const form = e.target as HTMLFormElement;
			const inputTextValue = form.text.value;
			state.setState({
				...state.getState(),
				name: inputTextValue,
			});
		});
    var style = document.createElement("style");
    style!.textContent = `
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
            }`;

    this.shadow.appendChild(style!);
  }
}
customElements.define("form-el", WelcomeFormEl);
