// You are given a string `word` consisting of alphabetical characters.

// For each unique letter in the `word`:

// - Return the lower-case letter followed by the number of times it occurs in the `word`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `letterOccurrence` using JavaScript that solves the above problem and satisfies the conditions.

// scan through the word using a loop
// check for each letter and compare it against it self and check if it occurs
// create a dictionary to hold letters and count them
// first we check for letter and errors catching

function letterCount(word){
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    if(typeof word !== "string"){
        console.error("Error");
        return
    }

    for(const letter of word){
        if (!alpha.includes(letter.toLowerCase())){
            console.error("Error");
            return
        }
    }

    let LetterCounts = {};

    for(let letter of word){
        let lowerCase=letter.toLowerCase();
          //Dictionary part
        if(LetterCounts[lowerCase] !== undefined){
            LetterCounts[lowerCase]++;
        }else {
            LetterCounts[lowerCase] = 1;
        }
}
return LetterCounts;


}
letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("Phillippppppp"));