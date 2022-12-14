export default function initHorarioFuncionamento() {
  const horarioFuncionamento = document.querySelector("[data-semana]");
  const diasSemana = horarioFuncionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = horarioFuncionamento.dataset.horario
    .split(",")
    .map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    horarioFuncionamento.classList.add("aberto");
  }
}
