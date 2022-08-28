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
function fizzBuzz(numbers) {
  let results = [];
  for(i = 0; i < numbers.length; i+=1) {
    if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0 ) {
      results.push('fizzBuzz')

    } else if (numbers[i] % 5 === 0){
      results.push('buzz')

    } else if (numbers[i] % 3 === 0 ) {
      results.push('fizz')

    }else {
      results.push('bug!')
    }
  }

  return results
}

// Desafio 9
function encode(palavra) {
  palavra = palavra.replace(/['a']/g, '1');
  palavra = palavra.replace(/['e']/g, '2');
  palavra = palavra.replace(/['i']/g, '3');
  palavra = palavra.replace(/['o']/g, '4');
  palavra = palavra.replace(/['u']/g, '5');

  return palavra;
}
function decode(palavra) {
  palavra = palavra.replace(/['1']/g, 'a');
  palavra = palavra.replace(/['2']/g, 'e');
  palavra = palavra.replace(/['3']/g, 'i');
  palavra = palavra.replace(/['4']/g, 'o');
  palavra = palavra.replace(/['5']/g, 'u');

  return palavra;
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
