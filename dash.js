let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
const storedUser = JSON.parse(localStorage.getItem("user"));
text1.textContent = `Email: ${storedUser.email}`;
text2.textContent = `Name: ${storedUser.name}`;
text3.textContent = `password: ${storedUser.password}`;