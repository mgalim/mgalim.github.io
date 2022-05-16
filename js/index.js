calcular = function () {
  var precio = 200;
  var cantidad = Number(document.getElementById("cantidad").value);
  var categoria = Number(document.getElementById("categoria").value) / 100;
  var subtotal = cantidad * precio;
  var total = subtotal - subtotal * categoria;
  document.getElementById("total").value = "Total a Pagar: $" + total.toFixed(2);
};

reset = function () {
  var element = document.getElementsByClassName("form-control");
  for (let i = 0; i < element.length; i++) {
    element[i].value = "";
  }
  document.getElementsByClassName("form-control-lg")[0].value = "Total a Pagar: $";
  document.getElementById("categoria").value = "80";
};
