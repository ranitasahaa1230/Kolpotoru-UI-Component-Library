const toggleBtn = document.querySelector(".sidebar-toggle");
const toggleBtnContainer = document.querySelector(".sidebar-toggle-container");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// sidebar
toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
    toggleBtnContainer.classList.add("show-toggleBtn");
  });
  
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
    toggleBtnContainer.classList.remove("show-toggleBtn");
  });