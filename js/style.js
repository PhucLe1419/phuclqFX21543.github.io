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

// Nut close Email
const closeInfo = function () {
  const valueEmailNew = document.getElementById("email");
  infoperson.style.display = "none";
  submitEmail.style.display = "block";
  valueEmailNew.value = "";
  valueEmailNew.focus();
  errorEmail.textContent = "Hãy nhập email để xác thực";
  errorEmail.style.color = "black";
};
closeView.addEventListener("click", closeInfo);

// Nut phần kinh nghiệm đến kỹ năng
function click_Exp() {
  const exp = document.getElementById("skill-detail");
  const btnExp = document.getElementById("btnExp");

  console.log(exp.style.color, btnExp.classList);
  if (btnExp.classList.contains("collapsed")) {
    // exp.style.display = "none";
    // btnExp.classList.remove("view-less");
    // btnExp.classList.add("view-more");
    btnExp.innerHTML = "VIEW MORE";
  } else {
    // exp.style.display = "block";
    // btnExp.classList.remove("view-less");
    // btnExp.classList.add("view-more");
    btnExp.innerHTML = "VIEW LESS";
  }
}

console.log(btnExp);
