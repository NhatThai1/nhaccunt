const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

showPasswordCheckbox.addEventListener("change", () => {
  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginMessage.textContent = "Giao diện chưa được kết nối với hệ thống xác thực.";
});
