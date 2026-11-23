const formulario = document.querySelector("#pedido");
const campo = document.querySelector("#subtotal");
const resultado = document.querySelector("#resultado");
const pesos = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 0,
  minimumGroupingDigits: 1,
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const entrada = campo.value.trim();
  resultado.removeAttribute("data-error");

  try {
    const subtotal = /^\d+$/.test(entrada) ? Number(entrada) : NaN;
    const costo = calcularEnvio(subtotal);
    resultado.textContent = `Costo del envío: ${pesos.format(costo)} COP.`;
  } catch (error) {
    if (!(error instanceof RangeError)) throw error;
    resultado.textContent = error.message;
    resultado.setAttribute("data-error", "");
  }
});
