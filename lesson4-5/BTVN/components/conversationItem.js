export default class ConversationItem{

    constructor(){

    }

    render(conversationsContainer){
        const conversationItem = document.createElement("h1");
        conversationItem.textContent="Conversation";

        conversationsContainer.appendChild(conversationItem);
    }
}