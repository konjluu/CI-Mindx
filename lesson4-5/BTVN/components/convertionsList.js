import { 
    query, 
    where, 
    //getDocs, -> cho query || onSnapshot -> danhf cho realtime .
    onSnapshot} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import {db,auth,conversationRef} from "../constants/constants.js";
import ConversationItem from "./conversationItem.js"
import CreateConversationModal from "./createConversationModal.js"



export default class ConvertionList{
    $newConversation;
    $modal;
    $conversationList;
    $conversationListContent;

    constructor(){

        this.$modal=new CreateConversationModal();

        this.$conversationList=document.createElement("div");
        this.$conversationList.setAttribute(
        "class",
        "w-1/4 h-full py-4 px-8 bg-blue-400 ")

        this.$conversationListContent=document.createElement("div");

        this.$newConversation=document.createElement("button");
        this.$newConversation.textContent= "New Conversation";
        this.$newConversation.setAttribute("class",
        "bg-white py-2 px-4 font-bold rounded-full")
        this.$newConversation.addEventListener("click",()=>{
            this.$modal.setActiveModal();
        })

        this.setupConversationListener();
        
    };

    async setupConversationListener(){
        this.$conversationListContent.innerHTML="";
        const q =query(
            conversationRef,
            where("users", "array-contains", auth.currentUser.email)
        );

        onSnapshot(q,(snapshot)=> {
            snapshot.docChanges().forEach((change) => {
                // console.log(doc.data());
                // console.log(change);
                if (change.type==="added"){
                    const conversationItem =new ConversationItem(change.doc.data());
                    conversationItem.render(this.$conversationListContent);
                }
            });
        })


        // const docs=await getDocs(q);
        // docs.forEach(doc => {
        //     const conversationData=doc.data();
        //     const conversationItem =new ConversationItem(conversationData);
        //     conversationItem.render(this.$conversationList);
        // });

        // getDocs(conversationRef).then((docs)=>{
        //     docs.forEach(doc => {
        //         // console.log(doc.data()); 
        //         const conversationData=doc.data();
        //         const conversationItem =new ConversationItem(conversationData);
        //         conversationItem.render(this.$conversationList);
        //     });
        // })

        // const mockData=[
        //     {
        //         creator : "123",
        //         name : "Cong",
        //         users :[123,"konj"]
        //     },
        //     {
        //         creator : "123",
        //         name : "Cong",
        //         users :[123,"konj"]
        //     },
        //     {
        //         creator : "123",
        //         name : "Cong",
        //         users :[123,"konj"]
        //     }
        // ];

        // mockData.forEach(conversationData =>{
        //     const conversationItem =new ConversationItem(conversationData);
            
        //     conversationItem.render(this.$conversationList);

        // })
    }
    
    render(mainContainer){
        this.$conversationList.appendChild(this.$newConversation);
        this.$conversationList.appendChild(this.$conversationListContent);
        this.$modal.render(this.$conversationList);

        mainContainer.appendChild(this.$conversationList);
    }
}
