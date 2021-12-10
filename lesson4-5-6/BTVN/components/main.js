import Login from "./login.js"
import app from "../index.js"
import ConvertionList from "./convertionsList.js"

export default class Main {
    $ConversationList;
    
    constructor(){
        this.$ConversationList=new ConvertionList();

       
        
    //     this.logOutEle=document.createElement("button");
    //     this.logOutEle.textContent="Log out";
    //     this.logOutEle.addEventListener("click",this.handleLogout);
    // }

    // handleLogout=()=>{
    //     const logIn= new Login();
    //     app.setActiveScreen(logIn);
    }

    render(container){
        // container.appendChild(this.logOutEle);

        const mainContainer= document.createElement("div");
        mainContainer.setAttribute("class",
        "flex w-screen h-screen mx-auto bg-gray-400 "
        )

        const content =document.createElement("div");
        content.setAttribute("class","w-full h-full px-24 bg-white")
        content.textContent="Content";

        this.$ConversationList.render(mainContainer);
        mainContainer.appendChild(content);

        container.appendChild(mainContainer);
    
    }
}