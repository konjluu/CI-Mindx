import Login from "./login.js"
import app from "../index.js"
import ConvertionList from "./convertionsList.js"
import Title from "./title.js"
import Mess from "./mess.js";


export default class Main {
    $ConversationList;
    $title;
    $messList;
    constructor(){
        this.$ConversationList=new ConvertionList((conversation) => {
            this.setActiveConversation(conversation);
            });
        this.$title=new Title("No data",0);
        this.$messList=new Mess();
       
        
    //     this.logOutEle=document.createElement("button");
    //     this.logOutEle.textContent="Log out";
    //     this.logOutEle.addEventListener("click",this.handleLogout);
        }

    // handleLogout=()=>{
    //     const logIn= new Login();
    //     app.setActiveScreen(logIn);
    // }

    setActiveConversation = (conversation) => {
        this.$title.setActiveTitleConversation(conversation);
        console.log(
          "log conversation from setActiveConversation function",
          conversation
        );
      };

    

    render(container){
        // container.appendChild(this.logOutEle);

        const mainContainer= document.createElement("div");
        mainContainer.setAttribute("class",
        "flex w-screen h-screen mx-auto bg-gray-400 "
        )

        const content =document.createElement("div");
        content.setAttribute("class","w-full h-full px-24 bg-white")
        this.$title.render(content);

        this.$ConversationList.render(mainContainer);
        mainContainer.appendChild(content);



        container.appendChild(mainContainer);
    
    }
}