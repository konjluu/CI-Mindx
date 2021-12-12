export default class ConversationItem{
    conversaitonData;
    conversationItem;
    constructor(_conversationData){
        this.conversaitonData=_conversationData;
        this.conversationItem=document.createElement("div");
        this.conversationItem.setAttribute(
            "class",
            "bg-white py-2 px-4 rounded-full my-4 hover:bg-pink-400 cursor-pointer hover:text-white")
        // console.log(this.conversaitonData,"from conversationItem");
    }

    render(conversationsContent){
        const conversationName = document.createElement("h2");
        conversationName.textContent=this.conversaitonData.name;
        conversationName.setAttribute(
            "class",
            "font-bold"
        )


        this.conversationItem.appendChild(conversationName);

        conversationsContent.appendChild(this.conversationItem);
    }
}