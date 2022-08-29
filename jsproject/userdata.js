let userdata = document.getElementById('userdata');




userdata.addEventListener('click', function dataclick(e){
    // e.stopPropagation();
    e.preventDefault();
    data();

})


    
async function data(){

 let getdata =  await fetch('https://jsonplaceholder.typicode.com/users');

if(!getdata.ok){
    throw new Error(`${fp.status}`);
}

let data = await getdata.json();
console.log(data)
// document.body.append(data)

for(let value of data){
    console.log(value)
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent= value.address.street;
}
   
 }


// data()
