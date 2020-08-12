'use-strict'

//Ejercicio 1

function palindrome(word) {

    cleanWord=word.replace(/[^a-zA-Z]+/g,'').toLowerCase()
    reverseWord=cleanWord.split('').reverse().join('')

    return cleanWord === reverseWord
}

var resultado= palindrome("rec!!)on23.oCER")
//console.log(resultado) 

//Ejercicio 2

function countWords(text){
    cleanText=text.replace(/[^a-zA-Z ]+/g,'').toLowerCase()
    arrayText=cleanText.split(' ')
    dictionary = {}
    arrayText.map((word)=>{
        if(!dictionary[word]){
            dictionary[word] = 0
        }
        dictionary[word] += 1
    })

    return dictionary
}

//console.log(countWords('Doo bee doo bee doo'))

//Ejercicio 3

function anagram(words) {
    var groupWords=[];
    var messyWords =[];

    var lowerWords = words.map(word => {
        return word.replace(/[^a-zA-Z]+/,'').toLowerCase();
    })

    lowerWords.map((word,index)=>{
        sortedWord = word.split('').sort().join('')
        indexWord = messyWords.indexOf(sortedWord) 
        if(indexWord === -1){
            groupWords.push([words[index]])
            messyWords.push(sortedWord)
        }else{
            groupWords[indexWord].push(words[index])
        }
    })
    
    return groupWords
}
console.log(anagram(["Paco", "capo", "Casa", "saCa", "caas", "chopO", "Pocho", "perro"]))