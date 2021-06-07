let navToggler = document.querySelector(".toggler");
const srcOpen = "images/icon-hamburger.svg";
const srcClose = "images/icon-close.svg";
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", function () {
  if (!nav.classList.contains("hide-nav-modal")) {
    navToggler.setAttribute("src", srcOpen);
    nav.classList.add("hide-nav-modal");
  } else {
    navToggler.setAttribute("src", srcClose);
    nav.classList.remove("hide-nav-modal");
  }
});
