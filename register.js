const form = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");
const registerContainer = document.getElementById("register-container");
const loginContainer = document.getElementById("login-container");
console.log("slom");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser.email === email && storedUser.password === password) {
    alert("Oldin ro'yxatdan o'tgan");
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Parol bir xil emas !";
    return;
  }

  if (!email.includes("@")) {
    errorMessage.textContent = "Email noto'g'ri";
    return;
  }
  if (password.length < 6) {
    errorMessage.textContent =
      "Parol kamida 6 ta belgidan iborat bo'lishi kerak!";
    return;
  }

  const userData = {
    name: name,
    email: email,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  alert("Foydalanuvchi muffaqiyatli ro'yxatdan o'tdi");

  registerContainer.style.display = "none";
  loginContainer.classList.remove("hidden");

  form.reset();
  errorMessage.textContent = "";
});

// login

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("Avval ro'yxatdan o'ting");
  }
  if (
    loginEmail === storedUser.email &&
    loginPassword === storedUser.password
  ) {
    alert("Kirish muvaffaqiyatli");
    window.location.href = "./dashbord.html";
  } else {
    alert("Xatolik: Email yoki Parol noto'g'ri");
  }
});
