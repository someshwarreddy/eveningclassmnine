// async javascript 
console.log('start');
let lis = document.getElementById('async');
const log = document.querySelector('.event-log');
lis.addEventListener('click', function(){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => console.log(json))
    log.textContent = '';

    const xhr = new XMLHttpRequest();
  
    xhr.addEventListener('loadend', () => {
      log.textContent = `${log.textContent}Finished with status: ${xhr.response}`;
    });
  
    xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
})
// eventlisternrs, http, callbacks 
console.log('end');

let a = (a)=> {
    console.log(a);
    return a +1;
}

let b = (b)=> {
   return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));
    
}


function c (){
   let r = a(1);
//   r =  b(r);
//   return r;
}

let v = c();
console.log(v)


function cbone () {
    
   console.log('sddd')
  
}

function cbtwo(callbacktwo){
    callbacktwo()
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));
}

function cbthree() {
    console.log('cb three')
}

function callfuc () {
    // cbone(cbtwo(cbthree)); // this is creates callback hell
}

callfuc()







document.querySelector('#reload').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});

let promisefetchdata = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(promisefetchdata);

// promise states pending fulfilled reject

// let pdata = promisefetchdata.then((Response) => {
//     let d = Response.json(); // it forms callback hell
//     console.log(d);
//     d.then((data => {
//         console.log(data)
//     }))
// });

// promisefetchdata.then((Response => Response.json()
//     .then((data) => console.log(data))
// ))

//  check with status  if true or false 

// promisefetchdata.then((Response => {
//     // check response is ok or not  if flase write condition

//     // !Response.ok ? :Response.json();
//     if(!Response.ok) {
//         throw new Error(`HTTP error: ${response.Error}`) // throws error if api fails
//     } else {
//        return  Response.json();
//     }
// }
// ) )
// .then((data)=> console.log(data))
// .catch((error)=>console.log(error)) // u can api fail error in catch block
let f2 = fetch('https://jsonplaceholder.typicode.com/posts/11o');
// Promise.all takes array fetch apis if one of them failed returns fail status 
// Promise.any takes array fetch apis if one of them succedded returns that api 
Promise.all([promisefetchdata,f2])
.then((Response)=> console.log(Response))
.catch((error)=>console.log(error))
