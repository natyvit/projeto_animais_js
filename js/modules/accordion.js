export default function initAccordion() {
  const accordionLista = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const ativo = "active";
  function activeAccordion() {
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }

  if (accordionLista.length) {
    accordionLista[0].classList.add(ativo);
    accordionLista[0].nextElementSibling.classList.add(ativo);

    accordionLista.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
