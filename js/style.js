"use strict";
// Khai dữ liệu
const submitEmail = document.querySelector(".click-email");
const infoperson = document.querySelector(".info-person");
const submit = document.querySelector(".submit");
const closeView = document.querySelector(".close-view");
const valueChange = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
// Kiem tra Email
const emailCheck = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Nut submit

submit.addEventListener("click", function () {
  const valueEmail = document.getElementById("email").value;
  if (emailCheck(valueEmail)) {
    infoperson.style.display = "block";
    submitEmail.style.display = "none";
  } else {
    errorEmail.textContent = "Định dạng Email sai, hãy nhập lại Email";
    errorEmail.style.color = "red";
    valueChange.focus();
  }
});

// Su kien nhan nút enter submit
const EnterBtn = document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  }
});
// Nut close Email
const btnCloseInfo = function () {
  const valueEmailNew = document.getElementById("email");
  infoperson.style.display = "none";
  submitEmail.style.display = "block";
  valueEmailNew.value = "";
  valueEmailNew.focus();
  errorEmail.textContent = "Hãy nhập email để xác thực";
  errorEmail.style.color = "black";
};

//Kinh nghiem - Ky nang
var btnExps = document.querySelectorAll(".view-more");
console.log(btnExps);
btnExps.forEach(function (btnExp) {
  btnExp.addEventListener("click", function () {
    if (btnExp.innerHTML.trim() == "VIEW MORE") {
      btnExp.innerHTML = "VIEW LESS";
    } else {
      btnExp.innerHTML = "VIEW MORE";
    }
  });
});
