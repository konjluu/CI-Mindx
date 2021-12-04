import {
    getAuth, 
    signInWithEmailAndPassword ,
} from  "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import InputGroup from "./inputComponet.js";
import Register from "./register.js"
import app from "./index.js";
import Main from "./main.js";

const auth =getAuth();

class Login{
    $formEle;
    $emailEle;
    $passwordEle;
    $submitEle;
    $gotoRegister;

    constructor(){
        this.$formEle=document.createElement("form");
        this.$formEle.setAttribute("class", "w-1/3 bg-blue-400 py-12 px-4 mx-auto mt-24 rounded-xl")
        
        this.$emailEle=new InputGroup(
            "email",
            "Email",
            "abc@gmail.com",
        )
        this.$passwordEle=new InputGroup(
            "password",
            "Pass word",
            "Enter your pass word",
        )

        this.$submitEle=document.createElement("button");
        this.$submitEle.type="submit";
        this.$submitEle.textContent="Submit";
        this.$submitEle.setAttribute("class","bg-white py-2 px-4 rounded-md front-bold");
        this.$submitEle.addEventListener("click",this.handleSubmit);
        
        this.$gotoRegister=document.createElement("p");
        this.$gotoRegister.textContent='Go to Register';
        this.$gotoRegister.setAttribute("class","text-white font-bold mt-2");
        this.$gotoRegister.addEventListener("click",this.gotoRegister);
    }

    gotoRegister=(()=>{
        const activeRegister=new Register();
        app.setActiveScreen(activeRegister);
    })

    handleSubmit=((e)=>{
        e.preventDefault();
        
        const email = this.$emailEle.getInputValue();
        const password = this.$passwordEle.getInputValue();

        signInWithEmailAndPassword(auth, email, password)
        .then(user=>{
            localStorage.setItem("login",true);
            const mainScreen = new Main();
            app.setActiveScreen(mainScreen);
        }).catch(error=>{
            alert(error.message);
        })
    })

    render(container){
        this.$formEle.appendChild(this.$emailEle.render());
        this.$formEle.appendChild(this.$passwordEle.render());

        const $buttonForm=document.createElement("div");
        $buttonForm.classList.add("flex","justify-between")
        $buttonForm.appendChild(this.$submitEle)
        $buttonForm.appendChild(this.$gotoRegister)

        this.$formEle.appendChild($buttonForm);

        return container.appendChild(this.$formEle);
    }
}

export default Login;