export default class ConversationItem{
    conversaitonData;
    constructor(_conversationData){
        this.conversaitonData=_conversationData;
        console.log(this.conversaitonData,"from conversationItem");
    }

    render(conversationsList){
        const conversationItem = document.createElement("h1");
        conversationItem.textContent="Conversation";

        conversationsList.appendChild(conversationItem);
    }
}