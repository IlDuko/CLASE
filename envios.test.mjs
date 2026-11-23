import test from "node:test";
import assert from "node:assert/strict";
import envios from "./envios.js";

const { calcularEnvio } = envios;

test("99.999 COP genera un envío de 8.000 COP", () => {
  assert.equal(calcularEnvio(99999), 8000);
});

test("100.000 COP genera envío gratis", () => {
  assert.equal(calcularEnvio(100000), 0);
});

test("100.001 COP genera envío gratis", () => {
  assert.equal(calcularEnvio(100001), 0);
});

test("Un subtotal negativo produce un error", () => {
  assert.throws(() => calcularEnvio(-1), RangeError);
});
