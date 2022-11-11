// let userdata = document.getElementById('userdata');

// userdata.addEventListener('click', function dataclick(e) {
//     e.preventDefault();
//     data();
// })
window.onload = function () {
    data();
}

async function data() {
    try {
        let getdata = await fetch('https://fakestoreapi.com/products');
        if (!getdata.ok) {
            throw new Error(`${getdata.status}`);
        }
        let data = await getdata.json();
        allproducts(data);
        productslider(data)
        searchproducts(data)
    }
    catch (error) {
        errorhandler(error);
    }
}

function errorhandler(error) {
    let err = document.createElement('p');
    let errspan = document.createElement('span');
    let container = document.querySelector('.container') // targetting from the css selector

    let alertblock = document.createElement('div');
    container.appendChild(alertblock);
    alertblock.classList.add('alert-block')
    alertblock.appendChild(err)

    err.textContent = " api failed" + error.message;
    // err.classList.add('alert-meesage');

    alertblock.appendChild(errspan)
    errspan.innerHTML = '&times;'
    errspan.classList.add('closebtn');
    closealert(errspan, alertblock)
}

function closealert(errspan, alertblock) {
    errspan.addEventListener('click', () => {
        alertblock.style.opacity = "0";
        setTimeout(function () { alertblock.style.display = "none"; }, 600);
    })
}

function allproducts(data) {
    let card = document.querySelector('.card')

    card.innerHTML = '';

    data.forEach((product) => {
        // deconstucted
        const { title, image, id, price } = product;

        const cardcontent = document.createElement('div')
        cardcontent.classList.add('card-content')
// inner html it takes as string 
        cardcontent.innerHTML = `<div class="responsivediv"> 
            <img src="${image}" class="responsiveimg"alt="${title}"></div>
            <div >
          <p>id:${id}</p>
          <span>name:${title}</span>
            </div>
            <div >
          <p>price:  ${price}</p3>
         
        </div>
        `
        card.appendChild(cardcontent)
    })



}

function productslider(data) {
    // let img= document.querySelector('.image-block') ;
    data.forEach((element) => {

        let caroparent = document.querySelector('.carousel-inner')
        //     img.src=element.image;
        //     // console.log(element.image)

        let carousalinneritem = document.createElement('div');
        caroparent.append(carousalinneritem);
        carousalinneritem.classList.add('carousel-item');
        element.id === 1 ? carousalinneritem.classList.add('active') : '';

        let carousimage = document.createElement('img');
        carousalinneritem.append(carousimage);

        carousimage.classList.add('d-block');
        carousimage.classList.add('custom-item-width')
        carousimage.src = element.image;
    })





}
function searchproducts(data) {
    let button = document.querySelector('#searchbutton')
    button.addEventListener("click", () => {
        let serachterm = document.getElementById('searchterm').value;
        // data.forEach((element) => {
        //     if (element.id === +serachterm) {
        //         let arrayel = [];
        //         arrayel.push(element);
        //         allproducts(arrayel)
        //     }
        //     else {
        //         // alert('error')
        //     }
        // })

        let fiterarray = data.filter((element)=>element.title.toLowerCase().includes(serachterm.toLowerCase())|| element.id === +serachterm);
        console.log(fiterarray)
        allproducts(fiterarray)
    })


}

// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'let send = document.getElementById('send');
let ckeckemail = function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
 let ckeckpassword=function validatepassword(password){
  let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
  return regex.test(password);
 }
  send.addEventListener('click',  function validate(e) {
    e.preventDefault();
 
    // let result = document.querySelector('#result')
    let email = document.getElementById('email').value; // hkjk@gmail.com
    let emaill = document.getElementById('email');
    let show = document.getElementById('show');
     let password = document.getElementById('password').value
    let passwordd = document.getElementById('password');
    let showpassword = document.getElementById('showpassword');
  
    // result.textContent = '';
    if(validateEmail(email)) {
      show.textContent=  email + " is valid";
      emaill.style.border = '2px solid green';
    } else {
      show.textContent=  email + " is not valid";
      emaill.style.border = '2px solid red';
    
    }
    if(validatepassword(password)) {
      showpassword.textContent=  password + " is valid password";
      passwordd.style.border = '2px solid green'
    } else {
      showpassword.textContent =  password + " is not valid password";
      passwordd.style.border = '2px solid red';
    
    }
    return false;
  })
