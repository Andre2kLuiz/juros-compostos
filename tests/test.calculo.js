const { calcularJurosCompostos } = require("../src/calculo");

test("Calcula juros compostos corretamente", () => {
  expect(calcularJurosCompostos(1000, 5, 2, 12)).toBe("1104.94");
});

test("Lança erro para valores negativos", () => {
  expect(() => calcularJurosCompostos(-1000, 5, 2, 12)).toThrow(
    "Os valores devem ser positivos e a frequência maior ou igual a 1."
  );
});
