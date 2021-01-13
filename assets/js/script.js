let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector("#pass");
let loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', login);

function login(){
  if(inputEmail.value === '' || inputPassword.value === ''){
    alert('Fill in the fields.')
  } else {
    alert('Login successful ')
  }
}