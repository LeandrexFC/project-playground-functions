// Desafio 1
function compareTrue(tenis, sapato) {
  if(tenis && sapato === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return base * heigth /2
}

calcArea(10,50);

// Desafio 3
function splitSentence(word) {
  let splitword = word.split(' ') 

  return splitword;
}

// Desafio 4
function concatName(names) {
  let firstName = names[0] 
  let lastName = names[names.length-1]
  let results = lastName + ', ' + firstName

  return results
}



// Desafio 5
function footballPoints(wins, ties) {
  let team = wins * 3;
  let resultado = team + ties;
  
  return resultado;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
