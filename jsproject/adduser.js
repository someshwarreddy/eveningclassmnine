// let submit = document.querySelector('#productForm');

// submit.addEventListener('submit', (e)=>{

//     e.preventDefault();
//     alert('formdata')
//     postform();
//     // let response =   fetch('https://fakestoreapi.com/products',{
//     //         method:"POST",
//     //         body:JSON.stringify(
//     //             {
//     //                 title: 'test product',
//     //                 price: 13.5,
//     //                 description: 'lorem ipsum set',
//     //                 image: 'https://i.pravatar.cc',
//     //                 category: 'electronic'
//     //             }
//     //         )
//     //     })
//     //         .then(res=>res.json())
//     //         .then(json=>console.log(json))
// })

// async function postform() {
//     try {
//         let response =   fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body: new FormData(submit)
//         }) 

//         let result = await response.json();
//         alert(result.message)
//     } catch(error){
//         alert(error)
//     }
// }
let form = document.querySelector('form');

form.addEventListener('submit',  async function (e) {
    e.preventDefault();
    let formdata = new FormData(form); // object constuctor
    console.log(...formdata)
    console.log(formdata)

    try {
        let response = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: formdata
        })

        let result = await response.json();
        console.log(result)
    } catch (error) {
        alert(error)
    }
 

})

// id,title,price,description,category,image,rating