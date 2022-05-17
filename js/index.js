calcular = function () {
  var precio = 200;
  var cantidad = Number(document.getElementById("cantidad").value);
  var categoria = Number(document.getElementById("categoria").value) / 100;
  var subtotal = cantidad * precio;
  var total = subtotal - subtotal * categoria;
  document.getElementById("total").innerHTML = total.toFixed(2);
};

reset = function () {
  var element = document.getElementsByClassName("form-control");
  for (let i = 0; i < element.length; i++) {
    element[i].value = "";
  }
  document.getElementById("total").innerHTML = "";
  document.getElementById("categoria").value = "80";
};
