const modalCTA=document.querySelector("#example-modal-CTA");
const modalCloseBtn = document.querySelector(".example-modal-close");
const closeAlerts = document.querySelectorAll(".example-modal-cancel");
const modalAlert = document.querySelector(".modal-alert");
const modalContainer = document.querySelector("#example-modal");

modalCTA.addEventListener("click", () => {
    modalContainer.classList.add("show");
    modalAlert.style.display = "block";
});

modalCloseBtn.addEventListener("click", ()=>{
    modalContainer.classList.remove("show");
    modalAlert.style.display = "none";
})
  
  closeAlerts.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      modalContainer.classList.remove("show");
      modalAlert.style.display = "none";
    });
  });
