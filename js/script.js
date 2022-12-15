import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import Tab from "./modules/tab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropDownMenu.js";
import MenuMobile from "./modules/menuMobile.js";
import initHorarioFuncionamento from "./modules/horarioFuncionamento.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import ScrollAnima from "./modules/scrollAnima.js";

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

initHorarioFuncionamento();
