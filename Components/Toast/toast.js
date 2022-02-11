const toastExample = document.querySelector("#toast-example-success");
const btnToShowToast = document.querySelector(".show-toast-example-btn");
const btnToCloseToast = document.querySelector("#toast-example-success-btn");

btnToShowToast.addEventListener("click", () => {
  toastExample.style.display = "block";
});
btnToCloseToast.addEventListener("click", () => {
  toastExample.style.display = "none";
});
