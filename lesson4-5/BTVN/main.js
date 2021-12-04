export default class Main {
    constructor(){
        this.h1=document.createElement("h1");
        this.h1.textContent='HOME';
    }

    render(container){
        container.appendChild(this.h1);
    }
}