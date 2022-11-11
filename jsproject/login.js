
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const form = document.querySelector('#productForm');
// let show = document.getElementById('show');

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email is not valid.')

  } else if (!isEmailValid(email)) {
    showError(emailEl, 'email mustnot empty')
  } else {
    showSuccess(emailEl)
    valid = true;
  }
  return valid;
}

const checkPassword = () => {

  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, 'password cannot empty')
  } else if (!isPasswordvalid(password)) {
    showError(passwordEl, ' passwaord must conatain special uppercase')
  } else {
    showSuccess(passwordEl)
    valid = true;
  }

  return valid;
};

let isEmailValid = function validateEmail(email) {
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(email);
}

let isPasswordvalid = function validatepassword(password) {
  let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
  return regex.test(password);
}
const isRequired = value => value === '' ? false : true;

let showError = (input, message) => {
  // get the form-field element
  const formField = input
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');
  const formFieldd = input.parentElement;
  // show the error message
  const error = formFieldd.querySelector('small');
  error.textContent = message;
}

let showSuccess = (input) => {
  // get the form-field element
  const formField = input
  const formFieldd = input.parentElement;
  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');


  // hide the error message
  const error = formFieldd.querySelector('small');
  error.textContent = '';
}
form.addEventListener('submit', function validate(e) {
  e.preventDefault();
  // validate forms
  alert(';jj')
  let isEmailValid = checkEmail()
  let isPasswordValid = checkPassword()


  let isFormValid = isEmailValid && isPasswordValid


  // submit to the server if the form is valid
  if (isFormValid) {

  }

})



const debounce = (fn, delay = 500) => {
  let timeoutId;
  console.log(fn)
  return (...args) => {
    console.log(args)
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {

    case 'email':
      checkEmail();
      break;
    case 'password':
      checkPassword();
      break;

  }
}));
