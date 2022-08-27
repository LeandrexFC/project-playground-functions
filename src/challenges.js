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
function highestCount(num) {
  let resultado = 0;

  for(i = 0; i < num.length; i += 1) {
      if (num[i] === Math.max(...num)) {
            resultado +=1;
      }   
  }
    return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs (cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return "cat2"
  }else if (Math.abs (cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1"
  }else
    return 'os gatos trombam e o rato foge'

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
