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
//         throw new Error(`HTTP error: ${Response.status}`) // throws error if api fails
//     }

//     return Response.json()
// }) .then((data) => {
//         let p = document.createElement('p');
//         p.textContent = data[0].body;
//          document.body.append(p)
//      })
//      .catch((err)=>console.log(err))

Promise.all([fetchedpromise,fetchedpromisetwo])
.then((response)=> {
    console.log(response) 
})

// Promise.any()

// aync await 


