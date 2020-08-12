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

function anagram(words) {
    var lowerWords = words.map(word => {
        return word.replace(/[^a-zA-Z]+/,'').toLowerCase()
    })

    counterLeters = []
    lowerWords.map((word)=>{
        singleLetersArray = word.split('')
        var leters = {}
        singleLetersArray.map(leter => {
            if(leters[leter]){
                leters[leter]++
            }else{
                leters[leter] = 1
            }
        })
        counterLeters[word] = leters
    })

    result = []
    for (var item in counterLeters){
        for (var x in item){
            console.log(x);
        }
    }


    return counterLeters
}


resultado1 = palindrome("rec!!)on23.oCER")
console.log("Ejercicio 1 : " + resultado1) 
console.log(countWords("Doo bee doo bee doo"))
console.log(anagram(["Paco", "capo", "Casa", "saCa", "caas", "chopO", "Pocho", "perro"]))