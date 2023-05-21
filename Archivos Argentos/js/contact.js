function validarFormulario() {
  var nombre = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var email = document.getElementById("email").value.trim();
  var comentarios = document.getElementById("comentarios").value.trim();
  var expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido = expReg.test(email);

  if (nombre === "" || apellido === "" || email === "" || comentarios === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  
  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'nombre' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }

  for (var i = 0; i < apellido.length; i++) {
    var charCode = apellido.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'apellido' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }

  if (esValido==false){
    alert("Ingrese un email válido");
    return false;
  }

  alert("Formulario enviado correctamente.");
  return true;
}
