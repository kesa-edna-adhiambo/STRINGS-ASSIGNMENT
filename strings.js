//question1: Extracting last four characters from a string.
let str = "extravaganza"
let substr = str.substring (8,  );
console.log(substr);

//question2: Inserting string at the fourth index of the variable.
let food = "The quick fox jumped over the lazy dog";
let foodToAdd = "eat";
let indexPosition = 4;
let newfood = food.substring(0, indexPosition)+ foodToAdd + food.substring(indexPosition);
console.log(newfood);

//question3: Counting the number of times a string appears to another string variable.
let story = "The quick brown fox jumps over the lazy dog";
console.log(story.match('the').length)
console.log(story.match('brown').length)

//question4: Finding words from strings.
let string1 = "The pupils are reading in the library";
console.log(string1.indexOf('are'));

let string2 = "The child was sitting on the table before it fell";
console.log(string2.indexOf('sitting'));

//question5: Converting strings into 'Uppercase', 'Lowercase' and 'Titlecase'.
let firstWord = "wonderful";
let Uppercase = firstWord.toUpperCase();
console.log(Uppercase);

let secondWord = "amazing";
let Lowercase = secondWord.toLowerCase();
console.log(Lowercase);

let thirdWord = "UndERneath";
let Lowercase2 = thirdWord.toLowerCase();
console.log(Lowercase2);

function titleCase(str) {
    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase( ) + str[i].slice(1);
    }
    return str.join('');

}
console.log(titleCase("A wonderful world"));

