let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

function getPassword(){
 const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
 const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const numeric = "0123456789"
 const symbol = "!@#$%^&*()-_=+[]{}\|;:'/?.>,<~`"

 const data = lowerAlphabet + upperAlphabet + numeric + symbol
 let generator = "";
 for (let index = 0; index < 10; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
}
console.log('generator:',generator);
}
 
function savePassword(){

}