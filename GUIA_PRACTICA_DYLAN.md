# Guía de la práctica de pruebas para Dylan Diaz

Esta guía acompaña la calculadora de envíos de la clase. La versión inicial contiene un error preparado para la demostración. La práctica consiste en reproducirlo, ejecutar cuatro pruebas, corregir el código y ejecutar de nuevo esas mismas pruebas.

## 1. Instalar Node.js

1. Abre la [página oficial de descargas de Node.js](https://nodejs.org/en/download).
2. Selecciona tu sistema operativo y una versión LTS. Para esta práctica usa Node.js 22 o superior.
3. En Windows, descarga y ejecuta el instalador `.msi`. En macOS puedes usar el instalador `.pkg`. Sigue los pasos del instalador y conserva la opción que permite ejecutar Node.js desde la terminal si aparece.
4. En Linux, la página oficial ofrece instrucciones según el método elegido, por ejemplo con nvm, y paquetes binarios. Sigue las indicaciones de tu distribución o el método que aparezca para tu sistema.
5. Cierra y vuelve a abrir la terminal para que reconozca la instalación. En Windows puedes usar PowerShell o la terminal de Visual Studio Code.
6. Ejecuta el siguiente comando:

```bash
node --version
```

Debería aparecer una versión que empiece por `v`, por ejemplo `v24.x.x`. Si el comando no se reconoce, cierra y abre la terminal, verifica la instalación y vuelve a intentarlo. En Windows, si continúa el problema, comprueba que la ruta de Node.js esté en la variable `PATH`.

El proyecto usa el ejecutor de pruebas incluido en Node.js. No requiere instalar paquetes ni ejecutar `npm install`.

## 2. Preparar los archivos

Descomprime `Practica_calculadora_envios.zip` en una carpeta y ábrela en un editor como Visual Studio Code. Si obtuviste los archivos desde el repositorio, usa la carpeta que contiene estos cinco archivos:

- `index.html`, la página que se abre en el navegador.
- `interfaz.js`, el código que lee el formulario y muestra el resultado.
- `envios.js`, la función que calcula el costo del envío.
- `envios.test.mjs`, las cuatro pruebas automatizadas.
- `README.md`, las instrucciones generales del proyecto.

Abre una terminal dentro de esa carpeta. En Visual Studio Code puedes usar **Terminal > Nueva terminal** después de abrir la carpeta. Comprueba que la terminal muestra los archivos:

```bash
dir
```

En PowerShell y en el símbolo del sistema funciona `dir`. En macOS o Linux puedes usar `ls`. Antes de continuar deben verse `envios.js` y `envios.test.mjs`.

Conserva una copia del ZIP o de la carpeta sin modificar para repetir la demostración. La versión inicial de `envios.js` debe contener esta línea:

```js
return subtotal > 100000 ? 0 : 8000;
```

## 3. Recordar la regla de negocio

La calculadora recibe un subtotal entero, mayor o igual a cero y expresado en pesos colombianos. Para un subtotal menor a 100.000 COP, el envío cuesta 8.000 COP. Desde 100.000 COP, el envío cuesta 0 COP. Una entrada vacía, negativa o decimal se rechaza.

| Subtotal | Resultado esperado |
|---|---|
| 99.999 COP | Envío de 8.000 COP |
| 100.000 COP | Envío de 0 COP |
| 100.001 COP | Envío de 0 COP |
| −1 COP | Error de validación |

## 4. Reproducir el error en el navegador

1. Abre `index.html` con doble clic o desde el navegador.
2. Escribe `99999`, sin puntos ni comas, y pulsa **Calcular**. La página debe mostrar un envío de 8.000 COP.
3. Reemplaza el valor por `100000` y pulsa **Calcular**. En la versión inicial aparece un envío de 8.000 COP.
4. Registra los datos para el informe. La entrada fue 100.000 COP, el resultado esperado era 0 COP y el resultado observado fue 8.000 COP.

## 5. Leer la prueba del límite

Abre `envios.test.mjs` y busca este caso:

```js
test("100.000 COP genera envío gratis", () => {
  assert.equal(calcularEnvio(100000), 0);
});
```

La función recibe `100000`. `assert.equal` compara el valor que devuelve con `0`, el resultado esperado. Si son diferentes, la prueba falla.

## 6. Ejecutar las pruebas por primera vez

En la terminal abierta en la carpeta del proyecto, ejecuta:

```bash
node --test
```

En la versión inicial se ejecutan cuatro pruebas. Pasan las de 99.999 COP, 100.001 COP y el subtotal negativo. Falla la de 100.000 COP porque la función devuelve `8000` y se esperaban `0`. La salida y sus símbolos pueden variar según la versión de Node.js, pero el resumen debe indicar **3 aprobadas y 1 fallida**. Guarda una captura o copia la salida.

## 7. Corregir la función

En el editor, abre `envios.js`. Busca la siguiente línea:

```js
return subtotal > 100000 ? 0 : 8000;
```

El operador `>` incluye los valores mayores que 100.000, pero excluye el valor exacto. Agrega `=` para usar el operador mayor o igual que:

```js
return subtotal >= 100000 ? 0 : 8000;
```

Guarda el archivo con `Ctrl + S` en Windows o Linux, o `Cmd + S` en macOS. Conserva sin cambios el archivo de pruebas para comprobar la misma expectativa antes y después de la corrección.

## 8. Ejecutar de nuevo y verificar la página

Ejecuta otra vez desde la misma carpeta:

```bash
node --test
```

Ahora deben pasar las **4 pruebas**. Guarda también esta salida para el informe. Luego recarga `index.html` en el navegador y comprueba:

1. `99999` muestra un envío de 8.000 COP.
2. `100000` muestra un envío de 0 COP.
3. El campo vacío muestra un mensaje que solicita un monto válido.

Si la terminal muestra cuatro pruebas aprobadas pero el navegador todavía cobra 8.000 en el límite, verifica que guardaste `envios.js`, que el navegador abre la misma copia que modificaste y que recargaste la página.

## 9. Actualizar el README y preparar evidencias

Abre `README.md` y agrega un ejemplo, por ejemplo: «Ingresa `120000`, pulsa Calcular y verifica que el envío sea de 0 COP». Pruébalo en el navegador y guarda el documento.

Para el trabajo en Word conserva la salida inicial con una prueba fallida, la línea corregida, la salida final con cuatro pruebas aprobadas y los resultados de la comprobación en el navegador.

## Solución de problemas frecuentes

- **`node` no se reconoce.** Abre una terminal nueva y revisa la instalación y la variable `PATH`.
- **La terminal no encuentra las pruebas o ejecuta cero pruebas.** Verifica que estás en la carpeta que contiene `envios.test.mjs` y vuelve a ejecutar `node --test`.
- **Las cuatro pruebas pasan desde el principio.** Revisa que estés usando la copia inicial y que la línea tenga `>` antes de corregirla.
- **Se muestra un error diferente.** Lee el mensaje y confirma que estás usando Node.js 22 o superior y los archivos originales de la práctica.

Referencia técnica: [Ejecutor de pruebas de Node.js](https://nodejs.org/api/test.html).
