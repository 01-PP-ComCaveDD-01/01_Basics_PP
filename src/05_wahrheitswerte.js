let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

let year = new Date().getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

let isJohnOlder = ageJohn > ageMark;

console.log("Ist John älter? " + isJohnOlder? "ja" : "nein");
