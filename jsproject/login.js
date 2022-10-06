let send = document.getElementById('send');
function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validate() {
    let result = $("#result");
    let email = $("#email").val();
    result.text("");
    if(validateEmail(email)) {
      result.text(email + " is valid");
      result.css("color", "blue");
    } else {
      result.text(email + " is not valid");
      result.css("color", "red");
    }
    return false;
  }
send.addEventListener('click', validate )