let home = document.getElementById('userdata')

home.addEventListener('click',(e)=> {
    e.preventDefault();
    window.location.href = 'http://127.0.0.1:5500/jsproject/index.html'
})

window.onload = function () {
    userdetails()
}

async function userdetails() {
    try {
        let id = localStorage.getItem('id')
        url = 'https://fakestoreapi.com/products/'
        let userdetails = await fetch(url + id)
        if (!userdetails.ok) {
            throw new Error(`${userdetails.status}`);
        }
        let data = await userdetails.json();
        userbind(data);
    }
    catch(error) {
        let err = document.createElement('p');
        let container = document.querySelector('.container') // targetting from the css selector
        let alertblock = document.createElement('div');
        container.appendChild(alertblock);
        alertblock.classList.add('alert-block')
        alertblock.appendChild(err)
        err.textContent = " api failed" + error.message;
        err.classList.add('alert-meesage');
    }

}

function userbind(element) {

    let carddivpar = document.createElement('div');
    let container = document.querySelector('.container') // targetting from the css selector
    container.appendChild(carddivpar);
    carddivpar.classList.add('card'); // targeting to the html adding classname to particular element
    let cardChi = document.createElement('div')
        carddivpar.appendChild(cardChi);
        cardChi.classList.add('card-content');

        let imgediv = document.createElement('div')
        cardChi.appendChild(imgediv);
        imgediv.classList.add('responsivediv');

        let imge = document.createElement('img')
        imgediv.appendChild(imge);
        imge.src = element.image;
        imge.classList.add('responsiveimg');

        let condiv = document.createElement('div')
        cardChi.appendChild(condiv);

        let pid = document.createElement('p');
        condiv.appendChild(pid);
        pid.innerHTML = "Id :" + element.id;

        let p = document.createElement('p');
        condiv.appendChild(p);
        p.innerHTML = "Name :" + element.title;

        let adde = document.createElement('div')
        condiv.appendChild(adde);
        adde.innerHTML = "Price:" + element.price;

        let adddis = document.createElement('div')
        condiv.appendChild(adddis);
        adddis.innerHTML = "discription:" + element.description;

        let addcat = document.createElement('div')
        condiv.appendChild(addcat);
        addcat.innerHTML = "category:" + element.category;
        let addrating = document.createElement('div')
        condiv.appendChild(addrating);
        addrating.innerHTML = "rating:" + element.rating;


        let dbutton = document.createElement('button')
        condiv.appendChild(dbutton);
        dbutton.innerHTML = "delete";
        dbutton.setAttribute('class','deleteitem');
        let ebutton = document.createElement('button')
        condiv.appendChild(ebutton);
        ebutton.innerHTML = "edit";
        ebutton.setAttribute('class','deleteitem');
        deletei(dbutton,carddivpar)
        edititem(ebutton, element.id)
}

function  deletei (delitem,carddivpar){
delitem.addEventListener('click', async ()=>{
    
    try {
        let id = localStorage.getItem('id')
        url = 'https://fakestoreapi.com/products/'
        let deledetails = await fetch(url + id, {
            method:"Delete"
        })
        if (!deledetails.ok) {
            throw new Error(`${deledetails.status}`);
        }
        let deleteres = await deledetails.json();
        objectLenght = Object.keys(deleteres).length;
        console.log(deleteres ,objectLenght)
        if(objectLenght > 0) {
            carddivpar.remove();
            localStorage.clear();
        // localStorage.clear()}
        }
    }
    catch(error) {
        let err = document.createElement('p');
        let container = document.querySelector('.container') // targetting from the css selector
        let alertblock = document.createElement('div');
        container.appendChild(alertblock);
        alertblock.classList.add('alert-block')
        alertblock.appendChild(err)
        err.textContent = " api failed" + error.message;
        err.classList.add('alert-meesage');
    }
})}

function edititem(ebutton,id){
    ebutton.addEventListener('click', function(){
        let id = localStorage.getItem('id')
        window.location.href = 'http://127.0.0.1:5500/jsproject/adduser.html' // linking   to  selected productdetails page
    })
}