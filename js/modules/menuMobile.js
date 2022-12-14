import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    btnMenu.classList.add("active");
    outsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      btnMenu.classList.remove("active");
    });
  }

  if (btnMenu) {
    events.forEach((event) => {
      btnMenu.addEventListener(event, openMenu);
    });
  }
}
