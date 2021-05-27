// Javascript Code starts here
//  1 Variable Declaration
const menuBtn = document.querySelector(".menu-btn");
const navDiv = document.querySelector(".nav-div");
const navDiv2 = document.querySelector(".grid-column");
const form = document.getElementById("email");
const check = document.getElementById("check");
const scroll = document.getElementById("scroll");
const load = document.getElementById("load-button");
const priceSort = document.getElementById("priceTag");
const ageSort = document.getElementById("ageTag");
const favorite = Array.from(document.getElementsByClassName("heart"));
const card = Array.from(document.getElementsByClassName("hide"));
const cardButton = Array.from(document.getElementsByClassName("card-button"));
const price = Array.from(document.getElementsByClassName("cat-price"));
const age = Array.from(document.getElementsByClassName("age"));
const navLinks = document.querySelector(".nav_links");
const priceFilter = document.getElementById("price-filter");
const ageFilter = document.getElementById("age-filter");

// Sort by Price sorting
priceSort.addEventListener("click", (e) => {
  if (!priceFilter.classList.contains("active")) {
    priceFilter.classList.add("active");
    if (ageFilter.classList.contains("active")) {
      ageFilter.classList.remove("active");
    }
    price.sort(function (a, b) {
      let nameA = a.innerHTML;
      let nameB = b.innerHTML;
      console.log(nameA);
      return nameA - nameB;
    });
    for (let k = 0; k < price.length; k++) {
      const element = price[k];
      const main = element.parentElement.parentElement.parentElement;
      console.log(element);
      document.getElementById("grid").appendChild(main);
    }
  }
});
// Sort by Age
ageSort.addEventListener("click", (e) => {
  if (!ageFilter.classList.contains("active")) {
    ageFilter.classList.add("active");
    if (priceFilter.classList.contains("active")) {
      priceFilter.classList.remove("active");
    }
    let bb = age.sort(function (a, b) {
      let nameA = a.innerHTML;
      let nameB = b.innerHTML;
      return nameA - nameB;
    });
    for (let k = 0; k < age.length; k++) {
      const element = age[k];
      const main = element.parentElement.parentElement.parentElement;
      document.getElementById("grid").appendChild(main);
    }
  }
});

// initial loading for cards
card.splice(0, 6).forEach((element) => element.classList.remove("hide"));
cardButton.forEach((element) => {
  if (element.innerHTML === "Продан") {
    element.classList.remove("card-button");
    element.classList.add("sold");
  }
});

// Lazy loading by load button

load.addEventListener("click", (e) => {
  card.splice(0, 10).forEach((element) => {
    element.style.display = "block";
    if (card.length === 0) {
      load.innerHTML = "Больше нет товаров для показа";
      load.disabled = true;
      return;
    }
  });
});
// Mobile Menu & Hamburger code starts here

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navDiv.style.display = "block";
    navDiv2.style.display = "block";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navDiv.style.display = "none";
    navDiv2.style.display = "none";
  }
});

// Add to favorites with notification code starts here
favorite.forEach((element) => {
  element.addEventListener("click", () => {
    swal("Поздравления", "Добавлено в избранное", "success");
  });
});
// form validation
form.addEventListener("keydown", () => {
  const value = form.value;
  const regex = /^[\w.%+-]+@[\w.-]+\.[\w]{1,6}$/;
  const result = regex.test(value.toLowerCase());
  if (!result) {
    form.style.borderColor = "red";
  } else {
    form.style.borderColor = "green";
  }
});
// Rechecking details on submit for newsletter
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (form.style.borderColor == "green" && check.checked) {
    swal("Поздравления", "Подписка на рассылку новостей", "success");
    form.value = "";
  } else if (form.style.borderColor == "green" && !check.checked) {
    swal("Ошибка", "Пожалуйста, поставьте галочку", "error");
  } else {
    swal(
      "Ошибка",
      "Пожалуйста, введите действующий адрес электронной почты",
      "error"
    );
  }
});
// scroll to top
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 100) {
    scroll.classList.add("active");
  } else {
    scroll.classList.remove("active");
  }
});
