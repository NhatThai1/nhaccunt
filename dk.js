const registerForm = document.getElementById("registerForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPasswordCheckbox = document.getElementById("showPassword");
const registerMessage = document.getElementById("registerMessage");

function validatePasswordMatch() {
  if (confirmPasswordInput.value && confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Mật khẩu xác nhận không khớp.");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
}

passwordInput.addEventListener("input", validatePasswordMatch);
confirmPasswordInput.addEventListener("input", validatePasswordMatch);

showPasswordCheckbox.addEventListener("change", () => {
  const inputType = showPasswordCheckbox.checked ? "text" : "password";
  passwordInput.type = inputType;
  confirmPasswordInput.type = inputType;
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerMessage.textContent = "Giao diện chưa được kết nối với hệ thống tạo tài khoản.";
});
