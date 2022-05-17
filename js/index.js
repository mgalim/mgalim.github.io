var precio = 200;

calcular = function () {
  var cantidad = Number(document.getElementById("cantidad").value);
  var categoria = Number(document.getElementById("categoria").value) / 100;
  var subtotal = cantidad * precio;
  var total = subtotal - subtotal * categoria;
  document.getElementById("total").innerHTML = total.toFixed(2);
};

limpiar = function () {
  document.getElementById("total").innerHTML = "";
};

// Funcion limpiar sin formulario

// reset = function () {
//   var element = document.getElementsByClassName("form-control");
//   for (let i = 0; i < element.length; i++) {
//     element[i].value = "";
//   }
//   document.getElementById("total").innerHTML = "";
//   document.getElementById("categoria").value = "80";
// };
