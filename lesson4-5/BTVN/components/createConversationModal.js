import { 
    addDoc,
    collection } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
    import {db,auth,conversationRef} from "../constants/constants.js";

import InputGroup from "./inputComponet.js";


export default class CreateConversationModal{
    $modalContainer;
    $nameInput;
    $targetUser;
    $btnCreate;
    
    _visible=false;

    constructor() {
        this.$nameInput=new InputGroup(
            "text",
            "Conversation Name",
            "Enter your conversation Name")

        this.$targetUser=new InputGroup(
            "text",
            "User",
            "Enter your User")

        this.$btnCreate=document.createElement("button");
        this.$btnCreate.textContent="Create new conversation";
        this.$btnCreate.setAttribute("class",
        "bg-yellow-400 text-white py-2 px-4 rounded-full")
        this.$btnCreate.addEventListener("click",this.onSubmit);


        this.$modalContainer=document.createElement("form");
        this.$modalContainer.setAttribute("class",
        "modal fixed hidden w-64 top-1/2 left-1/2 bg-red-400 p-4");

        // this.$modalContainer.textContent="Modal";
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const newConversation={
            name: this.$nameInput.getInputValue(),
            creator:auth.currentUser.uid,
            users:[
                auth.currentUser.email,
                this.$targetUser.getInputValue()]
        }
        addDoc(collection(db,"conversations"),newConversation)

        alert("Successfull");
        this.$modalContainer.classList.add("hidden");

        // console.log("conversation",newConversation);
    }
    
    setActiveModal(){
        this.$modalContainer.classList.toggle("hidden");
        // this._visible = !this._visible;
        // if(this._visible){
        //     this.$modalContainer.classList.remove("hidden");
        //     this.$modalContainer.classList.add("block");
        // }
        // else{
        //     this.$modalContainer.classList.remove("block")
        //     this.$modalContainer.classList.add("hidden");
        // }

    }

    render(conversationListContainer){
        this.$modalContainer.appendChild(this.$nameInput.render());
        this.$modalContainer.appendChild(this.$targetUser.render());
        this.$modalContainer.appendChild(this.$btnCreate);

        conversationListContainer.appendChild(this.$modalContainer);
    }   
}