// Fixed JavaScript code
function equivalentCheck() {
  if (parseInt(document.getElementById('equivalent').value)) {
    document.getElementById('equivalent').value = 0;
    document.getElementById('result').value = 0;
  }
}

function input(x) {
  equivalentCheck();

  let y = parseFloat(document.getElementById('result').value);

  if (document.getElementById('decimalVar').value == 0) {
    x += y * 10;
    document.getElementById('result').value = x;
  } else {
    let decimalCount = parseInt(document.getElementById('decimalVar').value);

    if (decimalCount == 1) {
      x *= 1 / 10;
      y += x;
      document.getElementById('result').value = y;
    } else {
      document.getElementById('result').value += x;
    }

    decimalCount++;
    document.getElementById('decimalVar').value = decimalCount;
  }
}

function decimalPoint() {
  if (document.getElementById('decimalVar').value == 0) {
    document.getElementById('decimalVar').value = 1;
  }

  if (parseInt(document.getElementById('operation').value)) {
    document.getElementById('result').value = 0;
  }
}

function operandcheck() {
  if (document.getElementById('operand').value == '') {
    document.getElementById('operand').value =
      document.getElementById('result').value;

    document.getElementById('result').value = 0;
    document.getElementById('equivalent').value = 1;
  } else {
    operatorcheck();
  }
}

function operatorcheck() {
  let a = parseFloat(document.getElementById('operand').value);
  let b = parseFloat(document.getElementById('result').value);

  switch (parseInt(document.getElementById('operation').value)) {
    case 1:
      a += b;
      break;
    case 2:
      a -= b;
      break;
    case 3:
      a *= b;
      break;
    case 4:
      a /= b;
      break;
  }

  document.getElementById('operand').value = a;
  document.getElementById('result').value = a;
  document.getElementById('equivalent').value = 1;
}

function operators(x) {
  document.getElementById('operation').value = x;
  operandcheck();
}

function equals() {
  operatorcheck();
  document.getElementById('result').value =
    document.getElementById('operand').value;
  document.getElementById('operand').value = '';
  document.getElementById('equivalent').value = 1;
}

function allClear() {
  document.getElementById('result').value = 0;
  document.getElementById('operand').value = '';
  document.getElementById('operation').value = 0;
  document.getElementById('equivalent').value = 1;
  document.getElementById('decimalVar').value = 0;
}

function plusminus() {
  let x = parseFloat(document.getElementById('result').value);
  x *= -1;
  document.getElementById('result').value = x;
}

function percent() {
  let x = parseFloat(document.getElementById('result').value);
  x *= 0.01;
  document.getElementById('result').value = x;
}

function square() {
  let x = parseFloat(document.getElementById('result').value);
  x *= x;
  document.getElementById('result').value = x;
}
