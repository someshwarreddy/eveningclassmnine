let userdata = document.getElementById('userdata');

userdata.addEventListener('click', function dataclick(e) {

    e.preventDefault();
    data();

})

async function data() {
    let getdata = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!getdata.ok) {
        throw new Error(`${fp.status}`);
    }
    let data = await getdata.json();

    let carddivpar = document.createElement('div');
    let container = document.querySelector('.container') // targetting from the css selector
    let keys = Object.keys(data[0]);
    let keyd = document.createElement('div');
    container.appendChild(keyd)
    keyd.innerHTML = keys;
    container.appendChild(carddivpar);
    carddivpar.classList.add('card'); // targeting to the html adding classname to particular element

    data.forEach((element) => {
        let cardChi = document.createElement('div')
        carddivpar.appendChild(cardChi);
        cardChi.classList.add('card-content');

        let pid = document.createElement('p');
        cardChi.appendChild(pid);
        pid.innerHTML = "Id :" + element.id;

        let p = document.createElement('p');
        cardChi.appendChild(p);
        p.innerHTML = "Name :" + element.name;

        let adde = document.createElement('div')
        cardChi.appendChild(adde);
        adde.innerHTML = "Address :";
        adde.classList.add('adress')
        // let addkeys = Object.keys(element.address)
        // adde.innerHTML =  + addkeys;
        // street,suite,city,zipcode,geo
        let addchis = document.createElement('p')
        adde.appendChild(addchis);
        addchis.innerHTML = "street:" + element.address.street + "<br>";
        let addchisu = document.createElement('p')
        adde.appendChild(addchisu);
        addchisu.innerHTML = "suite:" + element.address.suite;
       

    });


}


