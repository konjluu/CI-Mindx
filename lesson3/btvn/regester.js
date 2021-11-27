"use strict"

class Element {
  $element;
  constructor(_element, _type, _text, _classList) {
    this.$element = document.createElement(_element);
    this.$element.type = _type;
    this.$element.placeholder = _text;
    this.$element.className = _classList;
  }
  getValue = () => {
    return this.$element.value;
  }
  render() {
    return this.$element;
  }
}
class Register {
  $container;
  $fullName;
  $email;
  $password;
  $confirmPassword;
  $register;
  $tmp;
  classList = "w-3/5 center rouned border border-green-500 focus:border-red-500 p-7";
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("container", "mx-auto", "flex", "md:my-8", "space-y-6");

    this.$fullName = new Element("input", "text","Ten cua Ban:", this.classList);
    this.$email = new Element("input", "email", "abc@gmail.com",this.classList);
    this.$password = new Element("input", "password", "Nhap mat khau:", this.classList);
    this.$confirmPassword = new Element("input", "password", "Xac nhan mat khau", this.classList);

    this.$register = document.createElement("button");
    this.$register.className = "w-1/6 ring-indigo-100 border border-yellow-200 hover:bg-blue-200 center p-2 transition md:duration-300 ease-in-out";
    this.$register.textContent = "Dang Ki";

    this.$register.addEventListener("click",this.getData);
  }

  getData = () => {
    console.log("bam roi");
      if (this.$fullName.getValue() === "" || this.$email.getValue() === "" || this.$password.getValue() === "" || this.$confirmPassword.getValue() === "") {
        alert("phai dien du");
      }
      else if (this.$password.getValue() !== this.$confirmPassword.getValue()){
        alert("Khong khop");
      }
      else {
        alert("Dang ki khon thanh cong");
      }

  }


  render() {
    this.$container.appendChild(this.$fullName.render());
    this.$container.appendChild(this.$email.render());
    this.$container.appendChild(this.$password.render());
    this.$container.appendChild(this.$confirmPassword.render());
    this.$container.appendChild(this.$register);
    return (
      this.$container
    );
  }


}
const register = new Register();
document.getElementById("root").appendChild(register.render())