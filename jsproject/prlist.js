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
        allusers(data);
    }
    catch (error) {
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

function allusers(data) {
    let carddivpar = document.createElement('div');

    let container = document.querySelector('.container') // targetting from the css selector

    let keys = Object.keys(data[0]);

    // let keyd = document.createElement('div');

    // container.appendChild(keyd)
    // keyd.innerHTML = keys;
    container.appendChild(carddivpar);
    carddivpar.classList.add('card'); // targeting to the html adding classname to particular element
    data.forEach((element) => {
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
        selectitem(cardChi, element.id) // selecting item onclick
    });
}

function selectitem(selecteditem, id) {
    selecteditem.addEventListener('click', function () {
        localStorage.setItem("id", id); //webstorage
        window.location.href = 'http://127.0.0.1:5500/jsproject/ud.html' // linking   to  selected productdetails page
        debugger
    })
}
