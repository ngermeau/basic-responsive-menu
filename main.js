let hamburger = document.querySelector(".header-section__hamburger");
let navList = document.querySelector(".header-section__nav-list");

hamburger.addEventListener("click", () => {
  let dataVisible = hamburger.getAttribute("data-visible");

  if (dataVisible === "false") {
    hamburger.setAttribute("data-visible", true);
    navList.setAttribute("data-visible", true);
  } else {
    hamburger.setAttribute("data-visible", false);
    navList.setAttribute("data-visible", false);
  }
});
