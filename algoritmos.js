'use-strict'

//Ejercicio 1 - Palindrome

function palindrome(word) {

    cleanWord=word.replace(/[^a-zA-Z]+/g,'').toLowerCase()
    reverseWord=cleanWord.split('').reverse().join('')

    return cleanWord === reverseWord
}

var resultado= palindrome("rec!!)on23.oCER")
//console.log(resultado) 

//Ejercicio 2 - Count Words

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

//Ejercicio 3 - Anagram

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

//Ejercicio 4 - Running Time of Algorithms

function runningTime(arr) {
    let changes=0
    let i, key, j
    for(let i=0;i < arr.length; i++){
        key = arr[i]
        j = i - 1
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j = j - 1
            changes++
        }
        arr[j + 1] = key
        console.log(arr)
    }
    return changes
}

/* let totalChanges= 0;
    for(let i=0;i < arr.length; i++){
        for(let j=0;j < arr.length; j++){
                let aux = arr[i];
            if(arr[i]>arr[j] && i<j){
                arr[i] = arr[j]
                arr[j] = aux
                totalChanges ++
            }
        }
        console.log(arr);
    }
    return totalChanges */

//Ejercicio 5 - Save the Prisoner!

function saveThePrisoner(n,m,s) {
    var ultimoprisionero = ((m % n) + (s-1)) % n;
    return ultimoprisionero
}

// Ejercicio 6 - Missing Numbers

// Ejercicio 7 - Halloween Sale

// Ejercicio 8 - KnightL on a Chessboard
