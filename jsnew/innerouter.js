// function outer(){
// inner()
// }
//  function inner() {
//     console.log('i am onner')   
// }
// outer()


const upadaten = id => (content)=> document.querySelector(`#${id}`).style.background = content;

const updatebackground = upadaten('hd');

window.addEventListener('click', updatebackground, 'red')