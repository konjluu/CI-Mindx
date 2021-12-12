import { getAuth } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { 
    getFirestore,
    collection   } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
const auth =getAuth();
const db= getFirestore();
const conversationRef =collection(db,"conversations");

export {auth,db,conversationRef}