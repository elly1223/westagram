const thisIsButton = document.getElementsByClassName('login_btn')[0];

thisIsButton.addEventListener('click', function() {
  const loginId = document.getElementById('username').value;
  const loginPassword = document.getElementById('password').value;

  loginId !== null && loginPassword !== null ? alert("로그인 성공") : alert("로그인 실패");
  
});

//  loginId != null && loginPassword != null ? alert("로그인 성공") : alert("로그인 실패");
