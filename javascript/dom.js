// dom stands for document object model  it is part of the window object

// document.doctype
// <!DOCTYPE html>
// document.DOCUMENT_NODE
// 9
// document.DOCUMENT_POSITION_CONTAINS
// 8
// document.location
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/javascript/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// document.addEventListener
// ƒ addEventListener() { [native code] }
// document.firstChild
// <!DOCTYPE html>
// document.ELEMENT_NODE
// 1
// document.childElementCount
// 1
// document.firstElementChild
// <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
// document.getElementsByClassName(.one)
// VM3777:1 Uncaught SyntaxError: Unexpected token '.'

// selection of elements

// let classname = document.getElementsByClassName('one');
// console.log(classname);
let ido = document.getElementById('somesh');
// console.log(ido);

let tag = document.getElementsByTagName('div');
console.log(tag)
// works with css selectors
let qu = document.querySelector('.one')
// console.log(qu)
// let qua = document.querySelectorAll('.one')
// console.log(qua)
// handling the events
ido.addEventListener('click', function(){
  ido.innerText='clicked';
//   qu.style.color= 'red'
})
const p = document.createElement('p');
console.log(p.nodeType === Node.ELEMENT_NODE)
p.innerText = 'skkljflskjas';
console.log(p.innerText)

document.body.append(p)
console.log(Node.ELEMENT_NODE)
// childnodes

// console.log(qu.childNodes);
// console.log(qu.children);
// console.log(qu.childElement);
// event propgation

// Event capturing and bubbling