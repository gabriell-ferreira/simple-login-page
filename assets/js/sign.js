let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector("#password");
let inputName = document.querySelector('#email')
let signBtn = document.querySelector('#sign-btn');

signBtn.addEventListener('click', e => {
  if(inputEmail.value === '' || inputPassword.value === '' || inputName.value === ''){
    e.preventDefault();
    alert('Fill in the fields')
  } else {
    sign();
  }
});

function sign() {
  alert('sign successful')
}