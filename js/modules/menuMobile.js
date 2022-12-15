import outsideClick from "./outsideClick.js";

export default class MenuMobil {
  constructor(btnMenu, menuList, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.ativo = "active";
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.ativo);
    this.btnMenu.classList.add(this.ativo);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.ativo);
      this.btnMenu.classList.remove(this.ativo);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.btnMenu.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
