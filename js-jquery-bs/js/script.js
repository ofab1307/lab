//Ejercicio 1

muestra = function (texto, estilo) {
  var print = $("#mostrarResultados");
  if (print) {
    print.attr("class", estilo);
    print.text(texto);
  }
}

function Usuario(nombre, fecha) {

  //Propiedad privada
  var edad;

  //Métodos privados
    var calcularEdad = function() {
    var fecha_actual = new Date().getYear();
    var fecha_nacimiento = fecha.getYear();

    if (fecha_actual <= fecha_nacimiento)
    edad = "Error: no se ha podido calcular";
    else
    edad = fecha_actual - fecha_nacimiento;
  };

  //Propiedades Públicas
  this._nombre = nombre;
  this._fechaN = fecha;
  this._edad = edad;
}
//Método público presentarse
presentarse = function() {
  calcularEdad();

  var resultado =
    "Hola, mi nombre es " + this._nombre +
    " y tengo " + this._edad + " años."
    muestra(resultado, 'enviaTextArea');
};

mostrarResultados = function (texto, estilo) {
  var print = $("#resultado");
  if (print) {
    output.attr("class", estilo);
    output.text(texto);
  }
}

// Ejercicio 2
$("#button_calcularEdad").click(function () {
  var nombre = $("#nombre").val();
  var fechaN = $("#fecha").val();
  var rslt = parseInt(this._edad.substring(0, 4));
  var nuevoUsuario = new Usuario(nombre, rslt);
  nuevoUsuario.presentarse();
});

$("#button_idSelector").click(function () {
  var text = $("#thing1").text();
  mostrarResultados(text, "id-selector");
});

$("#button_claseSelector").click(function () {
  var text = $(".special").text();
  mostrarResultados(text, "class-selector");
});

$("#button_tagSelector").click(function () {
  var text = $("li[data-troy='true']").text();
  mostrarResultados(text, "tag-selector");
});

$("#button_selectorEditarTexto").click(function () {
  var firstSelect = $("li[data-troy='true']").text();
  var secondSelect = $("li[data-employee='Bob Metz']").text();
  $("li[data-troy='true']").text(secondSelect);
  $("li[data-employee='Bob Metz']").text(firstSelect);
  $("li[data-troy='true']").attr("class", "selector-edit-text");
  $("li[data-employee='Bob Metz']").attr("class", "selector-edit-text");
  var result = firstSelect + " and " + secondSelect;
  mostrarResultados(result, "selector-editar-texto");
});

$("#button_selectorHijo").click(function () {
  var text = $("div p").text();
  mostrarResultados(text, "selector-hijo");
});
