// setTimeout(()=>{
//     console.log("Hoc CI")
//     setTimeout(()=>{
//         console.log("Danh rang");
//         setTimeout(()=>{
//             console.log("Di ngu");
//         },5000);
//     },1000);
// },3000);

// // ES6(Promise,    )
// let myPromise= new Promise(
//     function(resolve,reject){
// //         resolve(
// //             [
// //                 {
// //                     name:"Cong",
// //                     id:1,
// //                 },
// //                 {
// //                     name:"Konj",
// //                     id:2,
// //                 }
// //             ]
// //         )
//         reject(
//             {code:404,
//              print:"Erron"
//             })
//     })

// myPromise
//     .then(function(data){
//         console.log(data)
//     })

//     .catch(function(duLieu){
//         console.log(duLieu);
//         if(duLieu.code==404){
//             alert("Loi roi huhu")
//         }
//     })

//     .finally(function(){
//         console.log("Done");
//     });


// fetch API
// fetch ("https://60ae0d5e80a61f00173324bc.mockapi.io/products")
// .then((data1)=>data1.json())
// .then((data2)=>{
//     const transferData=data2.map((item=>{
//         item.color="#ffffff";
//         return item;
//     }))
//     console.log(transferData);
//     return transferData;
// })
// .then((newData)=>{
//     console.log(newData);
// })
// .catch((error)=>{
//     alert("error");
// })

function getData(url,callback){
    fetch(url)
    .then((data)=>data.json())
    .then((data1)=>{
        callback(data1);
    })
    .catch((error)=>{
        console.log("Not found!!!");
    })
}   

function renderUser(user){
    console.log("user",user);
    const {data} =user;
    console.log("data",data);
    let userStr= data.map((user)=>{
        return `<div class="user">
             <img src="${user.avatar}" alt="">
             <h2>${user.first_name} ${user.last_name }</h2>
             <p>${user.email}</p>
         </div>`
    }).join("");
    // data.forEach((user) => {
    //     userStr+=`<div class="user">
    //     <img src="${user.avatar}" alt="">
    //     <h2>${user.first_name} ${user.last_name }</h2>
    //     <p>${user.email}</p>
    // </div>`
    // });
    // console.log(userStr);
    document.getElementById("root").innerHTML=userStr;

}

// function renderProduct(products){
//     console.log("products",products);
// }
// getData("https://60ae0d5e80a61f00173324bc.mockapi.io/products",renderProduct);
getData("https://reqres.in/api/users?page=2",renderUser);


//async await - hamf return cho Promise
// async function getData(url,callback,handleError){
//     try{
//         const request= await fetch(url);
//         const response= (await request).json();
//         console.log(response);

//     }catch(error){
//         handleError(error);
//     }
// }
// getData("https://reqres.in/api/users?page=2",renderUser,(()=>{
//     ...
// }));


