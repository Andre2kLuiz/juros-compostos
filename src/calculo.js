// Função para calcular juros compostos
function calcularJurosCompostos(
  capitalInicial,
  taxaJuros,
  periodo,
  frequencia
) {
  if (capitalInicial < 0 || taxaJuros < 0 || periodo < 0 || frequencia < 1) {
    throw new Error(
      "Os valores devem ser positivos e a frequência maior ou igual a 1."
    );
  }

  // Fórmula: M = P * (1 + r / n)^(n * t)
  const taxa = taxaJuros / 100;
  const montante =
    capitalInicial * Math.pow(1 + taxa / frequencia, frequencia * periodo);
  return montante.toFixed(2);
}
