function calcularEnvio(subtotal) {
  if (!Number.isSafeInteger(subtotal) || subtotal < 0) {
    throw new RangeError("Escribe un monto entero válido, mayor o igual a cero.");
  }

  return subtotal >= 100000 ? 0 : 8000;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularEnvio };
}
