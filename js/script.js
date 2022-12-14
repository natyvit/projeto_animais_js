import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import Tab from "./modules/tab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropDownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initHorarioFuncionamento from "./modules/horarioFuncionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import initScrollAnimacao from "./modules/scrollAnimacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tab = new Tab('[data-tab="menu"] li', '[data-tab="content"] section');
tab.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropDownMenu();
initMenuMobile();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimacao();
