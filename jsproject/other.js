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
        let getdata = await fetch('https://fakestoreapi.com/productss');
        if (!getdata.ok) {
            throw new Error(`${getdata.status}`);
        }
        let data = await getdata.json();
        allusers(data);
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
    closealert(errspan,alertblock)
}

function closealert(errspan, alertblock) {
    errspan.addEventListener('click', ()=>{
        alertblock.style.opacity = "0";
        setTimeout(function(){ alertblock.style.display = "none"; }, 600);
    }) 
}

function allusers(data) {
// let img= document.querySelector('.image-block') ;
    data.forEach((element)=>{

        let caroparent = document.querySelector('.carousel-inner')
    //     img.src=element.image;
    //     // console.log(element.image)

    let carousalinneritem = document.createElement('div');
    caroparent.append(carousalinneritem);
    carousalinneritem.classList.add('carousel-item');
    element.id===1? carousalinneritem.classList.add('active') : '';
   
    let carousimage = document.createElement('img');
    carousalinneritem.append(carousimage);

    carousimage.classList.add('d-block');
    carousimage.classList.add('custom-item-width')
    carousimage.src = element.image;
     })
}


