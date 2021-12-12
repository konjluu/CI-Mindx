import {
    getAuth, 
    onAuthStateChanged,
    } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import Login from "./components/login.js";
import Main from "./components/main.js";
// document.getElementById("root").appendChild(registerComponet.render());

const auth=getAuth();
class App{
    screen;
    container;

    constructor(_container){
        this.container=_container;
        this.setupAuthenticationListener();
    }

    setupAuthenticationListener(){
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const mainScreen=new Main();
                this.setActiveScreen(mainScreen);
            }
            else{
                const loginScreen=new Login();
                this.setActiveScreen(loginScreen);
            }
        })
        // const isLogin =JSON.parse(localStorage.getItem("login"));
        // if(isLogin){
        //     const mainScreen=new Main();
        //     this.setActiveScreen(mainScreen);
        // }
        // else{
        //     const loginScreen= new Login();
        //     this.setActiveScreen(loginScreen);
        // }
    }

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
// const loginComponet= new Login();
// app.setActiveScreen(loginComponet);

export default app
