import Main from "./main.js"
export default class ConversationItem{
    conversaitonData;
    conversationItem;
    _onChange;

    constructor(_conversationData, onChange){
        this._onChange = onChange;
        this.conversaitonData=_conversationData;

        this.conversationItem=document.createElement("div");
        this.conversationItem.setAttribute(
            "class",
            "bg-white py-2 px-4 rounded-full my-4 hover:bg-pink-400 cursor-pointer hover:text-white")
        this.conversationItem.addEventListener("click", () => {
            this._onChange(this.conversaitonData);
        });        
        
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