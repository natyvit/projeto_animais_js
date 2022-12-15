export default class HorarioFuncionamento {
  constructor(horarioFuncionamento, activeClass) {
    this.horarioFuncionamento = document.querySelector(horarioFuncionamento);
    this.activeClass = activeClass;
  }

  dadosHorarioFuncionamento() {
    this.diasSemana = this.horarioFuncionamento.dataset.semana
      .split(",")
      .map(Number);
    this.horarioSemana = this.horarioFuncionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosHorarioAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.horarioFuncionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.horarioFuncionamento) {
      this.dadosHorarioFuncionamento();
      this.dadosHorarioAgora();
      this.ativaAberto();
    }
    return this;
  }
}
