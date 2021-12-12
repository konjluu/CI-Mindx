export default class Title{
    $titleContainer;
    $conversationName;
    $members;

    _conversationName;
    _members;

    constructor(_conversationName,_members) {
        this.$conversationName=_conversationName;
        this.$members=_members;

        this.$conversationName=document.createElement("div");
        this.$titleContainer=document.createElement("h3");
        this.$members=document.createElement("h3");
    }

    setActiveTitleConversation=(conversation)=>{
        this.$conversationName.textContent=conversation.name;
        this.$members.textContent=conversation.users.length;
    }

    render(container){
        this.$conversationName.textContent=this._conversationName;
        this.$members.textContent=this._members;

        this.$titleContainer.setAttribute("class", "flex justify-between mt-8");
        this.$conversationName.setAttribute("class", "text-xl font-bold");
        this.$members.setAttribute("class", "text-xl font-bold");

        this.$titleContainer.appendChild(this.$conversationName);
        this.$titleContainer.appendChild(this.$members);

        container.appendChild(this.$titleContainer);

    }
}