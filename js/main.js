document.addEventListener("DOMContentLoaded", () => {
  burger();
});

const burger = () => {
  const burgerEl = document.querySelector(".burger");
  const menuEl = document.querySelector(".header__menu");
  const menuItems = [...document.querySelectorAll(".nav__item")];
  let isOpenMenu = false;

  const open = () => {
    menuEl.classList.add("header__menu--active");
    burgerEl.classList.add("burger--active");
    document.documentElement.style.overflow = "hidden";
    isOpenMenu = true;
  };
  const close = () => {
    menuEl.classList.remove("header__menu--active");
    burgerEl.classList.remove("burger--active");
    document.documentElement.style.overflow = "";
    isOpenMenu = false;
  };

  burgerEl.addEventListener("click", () => {
    if (isOpenMenu) close();
    else open();
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", close);
  });
};