const thisIsButton = document.getElementsByClassName('login_btn')[0];

thisIsButton.addEventListener('click', function() {
  const loginId = document.getElementById('username').value;
  const loginPassword = document.getElementById('password').value;

  loginId !== null && loginPassword !== null ? alert("로그인 성공") : alert("로그인 실패");

}

const button = document.getElementsByClassName('login_btn')[0];
const input = document.getElementsByClassName('input')[0];
const id = document.getElementById('username')[0];
const pw = document.getElementById("password")[0];

function changeColor() {
    if(id.value && pw.value) {
        button.removeAttribute('disabled');
        button.style.backgroundColor = '#0095F6';
    }
}

input.addEventListener('keyup', changeColor);

//  loginId != null && loginPassword != null ? alert("로그인 성공") : alert("로그인 실패");
