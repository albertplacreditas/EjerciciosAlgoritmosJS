'use-strict'

function palindrome(word) {

    cleanWord=word.replace(/[^a-zA-Z]+/g,'').toLowerCase()
    reverseWord=cleanWord.split('').reverse().join('')

    return cleanWord === reverseWord
}

var resultado= palindrome("rec!!)on23.oCER")
console.log(resultado) 

