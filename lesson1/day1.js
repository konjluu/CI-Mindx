// const numbers = [1, 8, 3, 2, 5, 0, 10, 11, 20, 22];
// // let arr=[];
// // for(i=0;i<numbers.length;i++){
// //     if(numbers[i]%2==0){
// //         arr.push(numbers[i]);
// //     }
// // }
// // console.log(arr);

// //ARRAY METHOD :filter, indexOf, includes, find, concat, some, every

// //FILTER- co the them bot phan tu
// let res =numbers.filter(function(number){
//     // if(number%2==0){
//     //     return true
//     // }
//     // else{
//     //     return false
//     // }
//     return number%2==0;
// })
// console.log(res);

// let res1= numbers.filter((number) => number % 2 == 0)
// console.log(res1)

// function sum(a,b){
//     return a+b
// }
//  const sum1= (a,b) => a+b
//  console.log(sum1(3,4))

//  const arr1= [1,2,3,4,5,6,7,8,9,10]
//  const res2= arr1.filter((number) => number<5)
//  console.log(res2)

//  //MAP- tra du phan tu 
// const arr2=[1,2,3,5,6,7,8];
// const mapres = arr2.map((number) => number +5);
// console.log(mapres);

// const arr3=[1,true,"",{},[],"hihi"]
// const types= arr3.map((value) => typeof value)
// console.log(types)


// //indexOf- tim vi tri cua phan tu voi value "x" // lastIndexOf- tim vi tri cuoi cung 
// const arr4=[3,5,6,3,8,11]
// const resIndexOf= arr4.indexOf(3);
//     // if(resIndexOf !=-1){

//     // }
//     // else...
// console.log(resIndexOf);

// //includes- check dung sai
// let resIncludes= arr4.includes(5)
// console.log(resIncludes)

// //concat
// let arr5=[1,2,3]
// let arr6=[2,3,4,5,6,7,8,9,10]
// const resConcat= arr5.concat(arr6);
// console.log(resConcat);

// //some
// let someRes= arr6.some((number) => numbers%2==0);
// console.log(someRes);

// //every
// let everyRes= arr6.every((number) => number%2==0);
// console.log(everyRes);

// // "abc" -> output: "cba"
// let input="cba";
// let tmp= input.split(" ");
// console.log(tmp.reverse( ).join(","));


// // default param
// const summ = (x=0 , y=0) => x + y ;
// console.log(sum());

//Destructuring (arr,obj)
//ARR
let skillss = ["Js","C","Java","SQL"];
let [, , Java,...res] = skillss;
console.log(Java);
console.log(res);

//OBJECT

let person={
    id:1,
    lastName: "Cong",
    skilll: ["Js","C","Java","SQL"],
    girl:{
        name:"ABC",
        age:1 
    }
}
// let lastName=person.lastName;
// let skilll=person.skilll;
let {id:userId,
    lastName,
    skilll,
    girl:{name}
} = person;
// let{id,skilll,girl}=person;
// let {name:nameGirl}=girl;
// console.log("nameGirl",nameGirl);
console.log("lastName",lastName);
console.log("id",userId);
console.log("nameMygirl",name);

//Rest, Spread
const sum=(...param)=>{
    let total=0;
    param.forEach((item)=> (total+=item));
    console.log(total);
}
sum(1,2,4,6);

//Spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
// let arr2 = [4, 5, 6];
// console.log(...arr2,...arr2);
arr2.push(10);
console.log(arr1);
console.log(arr2);












