//Ejercicio 1

/*Funcion con el fin de mostrar resultados de consultas en el elemento HTML textarea*/
mostrarResultados = function (texto, estilo) {
  var x = $("#mostrarResultados");
  if (x) {
    x.attr("class", estilo);
    x.text(texto);
  }
}

/*Funcion Constructora Usuario*/
function Usuario(nombre, fecha) {

  //Propiedad privada
  var edad;

  //Método privado para calcular la edad.
  var calcularEdad = function() {
    var fecha_actual = new Date().getFullYear();
    fecha_actual = parseInt(fecha_actual);
    var fecha_nacimiento = fecha;
    fecha_nacimiento = parseInt(fecha_nacimiento);

    if (fecha_actual <= fecha_nacimiento) {
      edad = "Error: no se ha podido calcular";
    } else {
      edad = (fecha_actual - fecha_nacimiento);
    }
  };

  //Propiedades Públicas
  this._nombre = nombre;
  this._fechaN = fecha;

  //Método público presentarse
  this.presentarse = function() {
    calcularEdad();

    if (edad != 0 && !isNaN(edad) && this._nombre.length  > 0) {
            var resultado =
                "Hola, mi nombre es " + this._nombre +
                " y tengo " + edad + " años."
            mostrarResultados(resultado, 'enviaTextArea');
        } else {
            mostrarResultados("Error, digite sus datos de manera correcta.", 'error');
        }
  };
}

/* Ejercicio 2
Aqui vamos a tener la funcionalidad de los botones.
Donde segun el boton y la clase del css
va a cambiar de color y texto como el ejercicio lo requiere.
*/

$("#button_calcularEdad").click(function () {
  var nombre = $("#nombre").val();
  var fechaNac = $("#fecha").val();
  var rslt = parseInt(fechaNac.substring(0, 4));
  var nuevoUsuario = new Usuario(nombre, rslt);
  nuevoUsuario.presentarse();
});

$("#button_idSelector").click(function () {
  var txt = $("#thing1").text();
  mostrarResultados(txt, "id-selector");
});

$("#button_claseSelector").click(function () {
  var txt = $(".special").text();
  mostrarResultados(txt, "class-selector");
});

$("#button_tagSelector").click(function () {
  var txt = $("li[data-troy='true']").text();
  mostrarResultados(txt, "tag-selector");
});

$("#button_selectorEditarTexto").click(function () {
  var selectDataTroy = $("li[data-troy='true']").text();
  var selectDataEmp = $("li[data-employee='Bob Metz']").text();
  $("li[data-troy='true']").text(selectDataEmp);
  $("li[data-employee='Bob Metz']").text(selectDataTroy);
  $("li[data-troy='true']").attr("class", "selector-edit-text");
  $("li[data-employee='Bob Metz']").attr("class", "selector-edit-text");
  var result = selectDataTroy + " and " + selectDataEmp;
  mostrarResultados(result, "selector-editar-texto");
});

$("#button_selectorHijo").click(function () {
  var txt = $("div p").text();
  mostrarResultados(txt, "selector-hijo");
});
