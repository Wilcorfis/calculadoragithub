let contizquierda = 0;
let contderecha = 0;
let bv = false;

function takeValue(x) {
  var texto = document.getElementById("inputwindow");
  var elemLen = texto.value.length;
  var val = elemLen - contizquierda;
  if (bv === true) {
    val = contderecha - 2;
  }

  let aux = texto.value.substr(0, val + 1) || "";
  let aux2 = texto.value.substr(val + 1, texto.value.length) || "";
  aux = aux + x + aux2;

  texto.value = aux;
  resetval();
}

function clearInput() {
  document.getElementById("calculator").reset();
}
function calculateResult() {
  /*var val = document.getElementById("inputwindow").value;
  raiz(val);*/
  var result = eval(document.getElementById("inputwindow").value) || "";

  document.getElementById("inputwindow").value = result;
}
/*function raiz(cadenaAnalizar) {
  let k = 0;
  //var cadenaAnalizar = document.getElementById("inputwindow").value;
  let aux = "";
  let j;
  let w;
  let t = 0;
  for (
    var i = 0;
    i < cadenaAnalizar.length && cadenaAnalizar.charAt(i) !== ")";
    i++
  ) {
    var caracter = cadenaAnalizar.charAt(i);
    if (
      caracter === "√" &&
      cadenaAnalizar.charAt(i + 1) !== "" &&
      cadenaAnalizar.charAt(i + 1) === "("
    ) {
      i = i + 2;
      k = i;
      j = i;
      while (cadenaAnalizar.charAt(k) !== ")") {
        aux += cadenaAnalizar.charAt(k);
        k = k + 1;
      }
      w = k;
    }
  }
  var bol = false;
  for (var z = 0; z < aux.length; z++) {
    if (
      aux.charAt(z) === "*" ||
      aux.charAt(z) === "/" ||
      aux.charAt(z) === "-" ||
      aux.charAt(z) === "+" ||
      aux.charAt(z) === "%" ||
      aux.charAt(z) === "**"
    ) {
      bol = true;
      break;
    }
    if (typeof parseInt(aux.charAt(z), 10) === "number") {
      t = t + 1;
    }
  }

  if (bol === true) {
    if (aux.includes("√")) {
      aux = aux.substr(0, aux.length - t);
      bandera = true;

      aux = raiz(`${aux})`);
    } else {
      aux = eval(aux);
    }
  }
  if (bandera === true) {
    aux = Math.sqrt(parseInt(aux, 10));
    bandera = false;
    clearInput();
  }
  var cad = document.getElementById("inputwindow").value;
  if (cad.includes("√")) {
    aux = "√(" + aux + ")";
  }

  var acum = "";
  acum += cadenaAnalizar.substr(0, j - 2) || "";
  acum += aux || "";
  acum += cadenaAnalizar.substr(w + 1, cadenaAnalizar.length) || "";

  acum += document.getElementById("inputwindow").value = acum;
  /*console.log(acum);
  acum = acum.substr(0, acum.length - 2);
  acum += acum2 + ")";
  acum2 = "";

  console.log(document.getElementById("inputwindow").value);
  */

// return aux;
//}

document.getElementById("borrar").addEventListener("click", () => {
  var texto = document.getElementById("inputwindow");
  var elemLen = texto.value.length;
  var val = elemLen - contizquierda;
  if (bv === true) {
    val = contderecha - 2;
  }

  texto.selectionStart = val;
  texto.selectionEnd = val;
  texto.focus();

  let aux = texto.value.substring(texto.value.length, val + 1) || "";

  if (aux !== "") {
    texto.value = `${texto.value.substring(0, val)}${aux}`;
  } else {
    texto.value = texto.value.substring(0, texto.value.length - 1);
  }
  resetval();
});

document.getElementById("moverizquierda").addEventListener("click", () => {
  bv = false;
  var texto = document.getElementById("inputwindow");
  var elemLen = texto.value.length;
  var val = elemLen - contizquierda;
  texto.selectionStart = val;
  texto.selectionEnd = val;
  texto.focus();
  contizquierda = contizquierda + 1;
  if (val === 0) {
    contizquierda = 0;
  } else {
    contderecha = val;
  }
});

document.getElementById("moverderecha").addEventListener("click", () => {
  bv = true;
  var texto = document.getElementById("inputwindow");
  var val = contderecha;
  texto.selectionStart = contderecha;
  texto.selectionEnd = contderecha;
  texto.focus();
  contderecha = contderecha + 1;
  if (val === texto.value.length) {
    contderecha = 0;
  } else {
    contizquierda = val;
  }
});
function resetval() {
  var texto = document.getElementById("inputwindow");
  texto.blur();
  contderecha = 0;
  contizquierda = 0;
}

document.getElementById("shift").addEventListener("click", () => {
  var texto = document.getElementById("inputwindow");
  var ban = document.getElementById("banner");
  texto.blur();
  contderecha = 0;
  contizquierda = 0;
  if (ban.style.backgroundColor === "green") {
    ban.style.backgroundColor = "red";
    ban.innerText = "Apagado";
    var form = document.getElementById("calculator");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].disabled = true;
    }
    var contador = document.getElementById("battery");
    contador.innerText = "100%";
    var stDiv = document.getElementById("battery");
    stDiv.style.backgroundColor = "green";
    cont = 100;
  } else {
    ban.innerText = "Encendido";
    ban.style.backgroundColor = "green";
    var form2 = document.getElementById("calculator");
    var elements2 = form2.elements;
    for (var j = 0, len2 = elements2.length; j < len2; ++j) {
      elements2[j].disabled = false;
    }
  }
});
/*bateria*/

var cont = 100;
function contador() {
  var stDiv = document.getElementById("battery");
  var data = stDiv.innerText;
  var ban = document.getElementById("banner");
  if (ban.innerText === "Encendido") {
    var contador = document.getElementById("battery");
    /*console.log(cont);*/
    contador.innerText = String(cont) + "%";
    cont--;
    if (parseInt(data, 10) < 50 && parseInt(data, 10) >= 11) {
      var stDiv2 = document.getElementById("battery");
      stDiv2.style.backgroundColor = "orange";
    } else if (parseInt(data, 10) <= 10) {
      var stDiv3 = document.getElementById("battery");
      stDiv3.style.backgroundColor = "red";
    }

    if (parseInt(data, 10) < 0) {
      data = "Bateria agotada";
      document.getElementById("shift").click();
    }
  }
}
setInterval("contador()", 60000);