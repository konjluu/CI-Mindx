import InputGroup from "./inputComponet.js";
export default class CreateConversationModal{
    $modalContainer;
    $nameInput;
    $creatorInput;
    $userInput;
    $btnCreate;


    _visible=false;

    constructor() {
        this.$nameInput=new InputGroup(
            "text",
            "Conversation Name",
            "Enter your conversation Name")
        
        this.$creatorInput=new InputGroup(
            "text",
            "Creator",
            "Enter your Creator")

        this.$userInput=new InputGroup(
            "text",
            "Users",
            "Enter your Users")

        this.$btnCreate=document.createElement("button");
        this.$btnCreate.textContent="Create new conversation";
        this.$btnCreate.setAttribute("class",
        "bg-yellow-400 text-white py-2 px-4 rounded-full")

        this.$modalContainer=document.createElement("form");
        this.$modalContainer.setAttribute("class",
        "modal fixed hidden w-64 top-1/2 left-1/2 bg-red-400 p-4");
        this.$modalContainer.addEventListener("click",this.onSubmit);

        // this.$modalContainer.textContent="Modal";
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const newConversation={
            name: this.$nameInput.getInputValue(),
            creator: this.$creatorInput.getInputValue(),
            users:this.$userInput.getInputValue()
        }
        console.log("conversation",newConversation);
    }
    
    setActiveModal(){
        this._visible = !this._visible;
        if(this._visible){
            this.$modalContainer.classList.remove("hidden");
            this.$modalContainer.classList.add("block");
        }
        else{
            this.$modalContainer.classList.remove("block")
            this.$modalContainer.classList.add("hidden");
        }

    }

    render(conversationListContainer){
        this.$modalContainer.appendChild(this.$nameInput.render());
        this.$modalContainer.appendChild(this.$creatorInput.render());
        this.$modalContainer.appendChild(this.$userInput.render());
        this.$modalContainer.appendChild(this.$btnCreate);

        conversationListContainer.appendChild(this.$modalContainer);
    }   
}