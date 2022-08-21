// eventbubling and capturing

// let evet = document.getElementById('eclick')
// console.log(evet,typeof(evet))
// evet.addEventListener('click', function (e){
//     // alert(e.BUBBLING_PHASE);
//     // alert(e.CAPTURING_PHASE);
//     console.log(evet.tagName)
// })

let allele = document.querySelectorAll('div'); // u keep *



// console.log(allele);

//  foreach, in , of , for
for(let elem of allele){
//    elem.addEventListener('click', function(event){
//     event.stopPropagation()
//     alert(elem.tagName)  // bubbling event is default
//    })
//    elem.addEventListener('click', function(event){
//     event.stopPropagation()
//     alert(elem.tagName)  // eventcapuring pass a argumnt to listener function to active the event capture
//    },{ once:true})

    // console.log(elem.childNodes);
    // console.log(elem.children)
    // elem.setAttribute('class','sai');
    // elem.classList.add('sai')
    // console.log(elem.innerHTML)
}

// let arr  = [1,2,3];
 let arr  = [{value:1},{value:2},{value:3}];
 let table = document.createElement('table');
let tr = document.createElement('tr');

    document.body.append(table);
    table.append(tr);
  
for(let val of arr){
//     const p = document.createElement('p');
 let {value,} = val
//     p.innerText = value;
// document.body.append(p)
// p.classList.add('sai')
let td = document.createElement('td');
tr.append(td);
    td.innerText = value;
}
