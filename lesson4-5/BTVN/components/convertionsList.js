import ConversationItem from "./conversationItem.js"
import CreateConversationModal from "./createConversationModal.js"
export default class ConvertionList{
    $conversationItemEle;
    $newConversation;
    $modal;

    constructor(){
        this.$conversationItemEle=new ConversationItem();

        this.$modal=new CreateConversationModal();

        this.$newConversation=document.createElement("button");
        this.$newConversation.textContent= "New Conversation";
        this.$newConversation.setAttribute("class",
        "bg-white py-2 px-4 font-bold rounded-full")
        this.$newConversation.addEventListener("click",()=>{
            this.$modal.setActiveModal();
        })
        
    }
    render(mainContainer){
        const conversationList= document.createElement("div");
        conversationList.setAttribute("class",
        "w-1/4 h-full py-4 px-8 bg-blue-400 ")
        

        conversationList.appendChild(this.$newConversation);

        this.$conversationItemEle.render(conversationList);

        this.$modal.render(conversationList);

        mainContainer.appendChild(conversationList);
    }
}
