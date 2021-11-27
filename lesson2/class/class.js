// const konj={
//     name: "Cong",
//     age:20,
//     getInfo: function(){
//         console.log(this.name,this.age);
//     },
//     log:function(val){
//         //
//     },
// };
// tom.getInfo();

class Animal{
    constructor(fullName, age){
        this._fullName=fullName;
        this._age=age;
    }
    logName(){
        console.log(this._fullName);
    }
    logAge(){
        console.log(this._age);
    }
}

class Bo extends Animal{
    constructor(fullName,age,color){
        super(fullName,age);
        this._color = color;
    }
    eating(){
        console.log("ngon!")
    }
}

const dog=new Animal("Micky",2);
const chicken= new Animal("KFC",30);
let myBo= new Bo ("Milk",5,"BlackWhite");
myBo.logAge();
myBo.logName();
myBo.eating();

// dog.logName();
// chicken.logName();