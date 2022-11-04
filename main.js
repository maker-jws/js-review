console.log('js review loaded')

// Primitives 
const fullName = "Joshua W. Smith"
let age = 10003
let isAive = true
const isOrganized = false
let currentLocation = "Trinidad, CO, USA"

const height = 1.7526
const stdHeight = 69.5
// undefined
// null / NaN

let myFavoriteGame;


// Objects
    // Array
    const favoriteColors = ["sunrise gray", "goldenrod"]
    favoriteColors.push('pepto-bismol pink')
    let pink = favoriteColors.pop().toUpperCase()
    // pink = pink.toUpperCase()
    // favoriteColors[0] = pink
    favoriteColors.unshift(pink)

    // splice - (versital tool)
    console.log(favoriteColors)


    // Objects - data type - container - 
    // why do we use objects? combine complex data types - organize our content 'conceptually'

// object literal declaration    
const mySelf = {
    stats: { 
        fullName: fullName,
        age
    }
}
console.log(mySelf.stats.myHeight)
// modify myself > {} stats to include myHeight
mySelf.stats.myHeight = height

console.log(mySelf.stats.myHeight)

// add fav_colors property to mySelf
mySelf.fav_colors = favoriteColors.slice() // create a new array with duplicates of the original elements
// when we assign properties to an object that themselves are objects
// we are actually provide a 'reference' to another object 
// in object when storing primitive values you actually store the new literal in place
// but in objects you store a reference 
// we might want to store a 'copy' of the the (referenced) object
// - slice() 
// - spread the values [...someSequence] 

mySelf.fav_colors.push("blue")

for(let c = 0; c<mySelf.fav_colors.length; c++){
    console.log(c+1, ":", mySelf.fav_colors[c])
}

mySelf.fav_colors.push("green")
console.log(mySelf.fav_colors)
console.log(favoriteColors)
// reverseWordOrder -> split ()


/*
Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don’t worry about punctuation.

*/ 

const firstTest = "Ishmael me Call"

function reverseWordOrder(str){
    // modifying our input 

        // iterate over a string ()
            // separate the different words at a given break point []
        // reverse the order of the  holder []
        // recombine our strings [] into a new string     
    // to return a new (reordered) string 

    return str.split(" ").reverse().join(" ")
}

console.log(reverseWordOrder(firstTest));

function mySplit(str, sep=" "){
    // in my function signature a default parameter is a value provided if no argument is given - so if a second argument is not provided to the function call JS will use " "
    // iterate of all of the characters
    let word = ""
    let listOfWords = []
    for (let i = 0;i<str.length;i++){
        // console.log("character", str[i])
        // console.log("current word", word)
        if(str[i] === sep){

            // console.log('new word')
            listOfWords.push(word)
            word = ""
        }else {
            // storing of our characters in our cache
            word+=str[i]
        }
    }
    listOfWords.push(word)
    console.log(listOfWords)
    // we need to store the current character plus any previous characters (temp/store) unless the current character matches the separator 
    // once we have found separator we need store the chunk in a holder []
    // move on to the next character (clearing our temp value)

}

mySplit("aa bb cc")