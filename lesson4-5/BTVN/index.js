// import Register from  "./register.js";
import Login from "./login.js";
// import Main from "./main.js";

// const registerComponet = new Register();
// document.getElementById("root").appendChild(registerComponet.render());

class App{
    screen;
    container;

    constructor(_container){
        this.container=_container;
        // this.test();
    }

    // test(){
    //     const isLogin =JSON.parse(localStorage.getItem("login"));
    //     if(isLogin){
    //         const mainScreen=new Main();
    //         app.setActiveScreen(mainScreen);
    //     }else{
    //         const loginComponet= new Login();
    //         app.setActiveScreen(loginComponet);
    //     }
    // }

    setActiveScreen(component){
        if(this.screen!== undefined){
            this.container.innerHTML ="";
        }
        this.screen=component;
        this.screen.render(this.container);

    }
}

const appContainer= document.getElementById("root");

const app=new App(appContainer);
const loginComponet= new Login();
app.setActiveScreen(loginComponet);

export default app
