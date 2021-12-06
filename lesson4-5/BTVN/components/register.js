import {
    getAuth, 
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import InputGroup from "./inputComponet.js";
import Login from "./login.js";
import app from "../index.js";

const auth = getAuth();

class Register {
    $formEle;
    $displayNameEle;
    $emailEle;
    $passwordEle;
    $cfpasswordEle;
    $submitEle;
    $gotoLogin;

    constructor(){
        this.$formEle= document.createElement("form");
        this.$formEle.setAttribute("class", "w-1/3 bg-blue-400 py-12 px-4 mx-auto mt-24 rounded-xl")

        this.$displayNameEle=new InputGroup(
            "text",
            "Full Name",
            "Enter your full name"
        );

        this.$emailEle=new InputGroup(
            "email",
            "Email",
            "Enter your email"
        );

        this.$passwordEle=new InputGroup(
            "password",
            "Pass Word",
            "Enter your pass word"
        );

        this.$cfpasswordEle=new InputGroup(
            "password",
            "Confirm pass word",
            "Confirm your pass word"
        );
        this.$submitEle= document.createElement("button");
        this.$submitEle.type="submit";
        this.$submitEle.textContent= "Submit";
        this.$submitEle.setAttribute("class","bg-white py-2 px-4 rounded-md front-bold")
        this.$submitEle.addEventListener("click",this.eventSubmit);

        this.$gotoLogin=document.createElement("button");
        this.$gotoLogin.textContent="Go to Login";
        this.$gotoLogin.setAttribute("class","text-white font-bold mt-2")
        this.$gotoLogin.addEventListener("click",this.gotoLogin)
        
    }

    gotoLogin=(()=>{
        const activeLogin= new Login();
        app.setActiveScreen(activeLogin);

    })

    eventSubmit=(event) => {
        event.preventDefault();
        let validated= this.validation();
        if(validated!=null){
            createUserWithEmailAndPassword(auth,validated.email,validated.password)
            .then(user=>{
                console.log(user.user);

                updateProfile(auth.currentUser,{
                    displayName:validated.displayNameEle
                }).then((userUpdate)=>{
                    console.log("userUpdate",userUpdate);
                })
                sendEmailVerification(auth.currentUser)

            }) .catch(error=>{
                alert(error.message);
            })
        }

    }

    validation(){
        const displayNameEle = this.$displayNameEle.getInputValue();
        const email = this.$emailEle.getInputValue();
        const password = this.$passwordEle.getInputValue();
        const cfpassword = this.$cfpasswordEle.getInputValue();

        let flag=true;

        if(displayNameEle.trim().length===""){
            this.$displayNameEle.setError("Phai nhap full name");
            flag=false;
        }
        else{
            this.$displayNameEle.setError("");
        }

        if(email.trim().length===""){
            this.$emailEle.setError("Email can not empty");
            flag=false;
        }
        else{
            this.$emailEle.setError("");
        }

        if(password.trim().length===""){
            this.$passwordEle.setError("Password can not empty");
            flag=false;
        }
        else{
            this.$passwordEle.setError("");
        }

        if(cfpassword.trim().length===""){
            this.$cfpasswordEle.setError("Confirm pass word can not empty");
            flag=false;
        }
        else{
            this.$cfpasswordEle.setError("");
        }

        if(password!=cfpassword){
            this.$cfpasswordEle.setError("Pass word does not match :((")
        }
        else{
            this.$cfpasswordEle.setError("");
        }

        if(flag===true){
            return{
                displayNameEle:displayNameEle,
                email:email,
                password:password,
                cfpassword:cfpassword
            }
        }
        return null;
    }



    render(container){
        this.$formEle.appendChild(this.$displayNameEle.render());
        this.$formEle.appendChild(this.$emailEle.render());
        this.$formEle.appendChild(this.$passwordEle.render());
        this.$formEle.appendChild(this.$cfpasswordEle.render());

        const $buttonForm=document.createElement("div");
        $buttonForm.classList.add("flex","justify-between")
        $buttonForm.appendChild(this.$submitEle)
        $buttonForm.appendChild(this.$gotoLogin)

        this.$formEle.appendChild($buttonForm);

        container.appendChild(this.$formEle);
    }
}

export default Register;