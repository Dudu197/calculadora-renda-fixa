class InvestmentTitle {
  constructor(type, initialValue, interestRate, period, applyTax) {
    this.type = type;
    this.initialValue = initialValue;
    this.interestRate = interestRate;
    this.period = period;
    this.applyTax = applyTax;
  }

  // Método para calcular o valor final com ou sem impostos
  calculateFinalValue(selic, ipca) {
    let realInterestRate = this.interestRate;
    if(this.type == "selic") realInterestRate = selic * (this.interestRate / 100);
    if(this.type == "ipca") realInterestRate = ipca + parseFloat(this.interestRate);

    const monthlyRate = realInterestRate / 12 / 100;

    const finalValue = this.initialValue * Math.pow(1 + monthlyRate, this.period);
    if (this.applyTax) {
      const tax = this.calculateTaxes(finalValue - this.initialValue, this.period);
      return finalValue - tax;
    }
    return finalValue;
  }

  // Método para calcular os impostos
  calculateTaxes(profit, period) {
    if (profit <= 0) return 0;
    if(period <= 6) return profit * 0.225;
    if(period <= 12) return profit * 0.2;
    if(period <= 60) return profit * 0.175;
    return profit * 0.15;
  }

  // Método para formatar números com separadores de milhar
  formatNumber(number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number);
  }

  // Método auxiliar para obter uma string formatada do valor inicial
  getFormattedInitialValue() {
    return this.formatNumber(this.initialValue);
  }

  // Método auxiliar para obter o valor final formatado
  getFormattedFinalValue(selic, ipca) {
    return this.formatNumber(this.calculateFinalValue(selic, ipca));
  }
}

export default InvestmentTitle;
