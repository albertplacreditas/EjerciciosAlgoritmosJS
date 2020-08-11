'use-strict'

function palindrome(word) {

    cleanWord=word.replace(/[^a-zA-Z]+/g,'').toLowerCase()
    reverseWord=cleanWord.split('').reverse().join('')

    return cleanWord === reverseWord
}

function countWords(str) {
    words = str.replace(/[^a-zA-Z ]+/g,'').toLowerCase().split(" ")
    result = {}
    
    words.map((word)=>{
        if(result[word]){
            result[word]++
        }
        else {
            result[word] = 1
        }
        
    })
    return result;
}

function countWords(str) {
    words = str.replace(/[^a-zA-Z] +/,'').toLowerCase().split(" ")
    result = {}
    
    words.map((word)=>{
        if(result[word]){
            result[word]++
        }
        else {
            result[word] = 1
        }
        
    })
    return result;
}

resultado1 = palindrome("rec!!)on23.oCER")
console.log("Ejercicio 1 : " + resultado1) 
console.log(countWords("Doo bee doo bee doo"))