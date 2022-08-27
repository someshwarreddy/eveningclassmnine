// const { reject } = require("async");

let fetchedpromise = fetch('https://jsonplaceholder.typicode.com/posts/1');
let fetchedpromisetwo = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(fetchedpromise)
// fetchedpromise.then((Response) => {
//     let res = Response.json();
//     console.log(res);
//     res.then((data) => console.log(data));
// })

//  promise chaining
// fetchedpromise.then((Response) => Response.json()) // response is pure promise type 
// .then((data) => {
//     let p = document.createElement('p');
//     p.textContent = data[0].body;
//     document.body.append(p)
// })

// fetchedpromise.then((Response) => {
//     if(!Response.ok) {
//      reject (   throw new Error(`HTTP error: ${Response.status}`) )// throws error if api fails
//     }

//     return Response.json()
// }) .then((data) => {
//         let p = document.createElement('p');
//         p.textContent = data[0].body;
//          document.body.append(p)
//      })
//      .catch((err)=>console.log(err))

function sync(){
    for(let data of fetchedpromise){
        console.log(data);
    }
}

Promise.all([fetchedpromise,fetchedpromisetwo])
.then((response)=> {
    for (let data of response){
    console.log(data.json())} 
})

// Promise.any()

// aync await 

// let pr = new Promise((resolve, reject)=> {
   
//     if(true){
//         resolve(fetch('https://jsonplaceholder.typicode.com/posts/1'))

//     }

//     reject('i am failed to fetch api ')
//     // resolve(' iam success full');
//     // resolve(' iam success full two');
//     // resolve(' iam success full three');
//     // // reject('i am fialed block')
// })

// pr.then((messeage)=> console.log(messeage))
// .catch((err)=>console.log(err))
// .finally(()=>console.log('finshed',))

// async await u write the code as synchronous way

async function getdata() {
    let fdata =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // console.log(fdata);
}

getdata()

async function fetchapi() {
    try{
        let fp =  await fetch('https://jsonplaceholder.typicode.com/posts/1') ;
        console.log(fp)
        if(!fp.ok){
        throw new Error(`${fp.status}`);}

         let pr = await fp.json();
         console.log(pr)
    }
    catch(error){
        console.log(error)
    }
  }
  fetchapi()