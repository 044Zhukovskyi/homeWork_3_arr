// Усі пораховані результати вивести одним повідомленням за допомогою alert.
// Обчислення мають виконуватися в циклі, а не за допомогою методів масиву

const numbers = 
  [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 
  4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let result = []

// Знайти суму та кількість позитивних елементів.

let quantityPosNum = null
let sumPosNum = 0

  for ( let i = 0; i < numbers.length; i++ ) {
    if ( numbers[i] > 0 ){
     quantityPosNum++ 
     sumPosNum += numbers[i]
    }
  }
  result.push(`\nSum of positive num: ${ sumPosNum }`, `\nQuantity of positive num: ${ quantityPosNum }`)


// Знайти максимальний елемент масиву та його порядковий номер.
let maxNum = numbers[0]
let seqMaxNum = 0

  for ( let i = 1; i < numbers.length; i++ ){
    if ( numbers[i] > maxNum ){
      maxNum = numbers[i]
      seqMaxNum = i //bag dont correct index 
    }
  }
  result.push(`\nMax num: ${ maxNum }`, `\nSequence of max num: ${ seqMaxNum }`)
  

// Визначити кількість негативних елементів.
let quantityNegativeNum = null

  for( let i = 0; i < numbers.length; i++ ) {
    if ( numbers[i] < 0 ){
      quantityNegativeNum++
    }
  }
  result.push(`\nQuantity of negative num: ${ quantityNegativeNum }`)


// Знайти кількість непарних позитивних елементів.
let quantityUnpairedPosNum = null

  for( let i = 0; i < numbers.length; i++ ) {
    if ( numbers[i] < 0 || numbers[i] % 2 == 0 ){
      continue

    } else {
      quantityUnpairedPosNum++
    }
  }
  result.push(`\nQuantity of unpaired positive num: ${ quantityUnpairedPosNum }`)


// Визначити кількість парних позитивних елементів.
let quantityPairedPosNum = null

  for( let i = 0; i < numbers.length; i++ ) {
    if ( numbers[i] < 0 || numbers[i] % 2 !==0 ){
      continue

    } else {
      quantityPairedPosNum++
    }
  }
  result.push(`\nQuantity of paired positive num: ${ quantityPairedPosNum }`)


// Знайти суму парних позитивних елементів.
let sumPairedPosNum = 0

  for ( let i = 0; i < numbers.length; i++ ){
    if ( numbers[i] < 0 || numbers[i] % 2 !== 0 ){
      continue

    } else {
      sumPairedPosNum += numbers[i]
    }
  }
  result.push(`\nSum of paired positive num: ${ sumPairedPosNum }`)


// Знайти суму непарних позитивних елементів.
let sumUnpairedPosNum = 0

  for ( let i = 0; i < numbers.length; i++ ){
    if ( numbers[i] < 0 || numbers[i] % 2 == 0 ){
     continue

    } else {
      sumUnpairedPosNum += numbers[i]
    }
  }
  result.push(`\nSum unpaired positive num: ${ sumUnpairedPosNum }`)


// Знайти добуток позитивних елементів.
let mulPosNum = numbers[0]
  
  for ( let i = 1; i < numbers.length; i++ ){
    if ( numbers[i] > 0 ){
      mulPosNum *= numbers[i]
    }
  }
result.push (`\nMultiplication of positive num: ${ mulPosNum }`)

alert(result)