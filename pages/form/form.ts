export function initForm(){
    const div = document.createElement("div");
    div.innerHTML = `
    <header-el></header-el>
    <title-el type="form-title"></title-el>
    <large-el type="form-large"></large-el>
    <label-el type="email"></label-el>
    <label-el type="food"></label-el>
    <select-el></select-el>
    <button-el type="form-button"></button-el>
    <footer-el></footer-el>
    `

    return div;
}