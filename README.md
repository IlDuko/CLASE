# Calculadora de envíos

Calcula el costo del envío de un pedido en pesos colombianos. Un subtotal menor a 100.000 COP genera un cargo de 8.000 COP. Desde 100.000 COP el envío es gratis. El subtotal se ingresa como entero mayor o igual a cero, sin separadores.

## Ejecución y pruebas

1. Descomprime el proyecto y abre `index.html` en un navegador.
2. Escribe un subtotal y pulsa **Calcular**. Por ejemplo, `99999` debe mostrar un costo de 8.000 COP.
3. Para probar la función, abre una terminal en esta carpeta con Node.js 22 o superior y ejecuta `node --test`. El proyecto no requiere instalar paquetes.

## Actividad de clase

1. Prueba el valor `100000` en la interfaz y compáralo con la regla.
2. Ejecuta las cuatro pruebas. Una debe fallar en la versión de partida.
3. Corrige el operador de comparación en `envios.js`. Repite las pruebas y verifica que las cuatro aprueben.
4. Agrega a este README un ejemplo de entrada y resultado. Pídele a otra persona que lo compruebe en el navegador.

## Despliegue de la versión corregida

Sube los archivos a la raíz de la rama `main` de un repositorio de demostración. En **Settings → Pages**, elige **Deploy from a branch**, selecciona **main** y **/(root)** y guarda. Consulta **Actions** y abre la URL que aparezca en **Settings → Pages**.

En la URL publicada, verifica que cargue el formulario, que `100000` muestre un envío de 0 COP y que el campo vacío muestre un mensaje de validación. Registra la URL y el resultado de cada comprobación.

[Guía de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
