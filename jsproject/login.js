let send = document.getElementById('send');
function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
 function validatepassword(password){
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
