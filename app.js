// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var Kalvian_1 = "Ram";

// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + Kalvian_1);

// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var Kalvian_2 = "Santhu";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + Kalvian_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var driverNameLength = Kalvian_1.length;
var navigatorNameLength = Kalvian_2.length;

if (driverNameLength > navigatorNameLength) {
    console.log("The driver has the longest name, it has " + driverNameLength + " characters.");
} else if (driverNameLength < navigatorNameLength) {
    console.log("It seems that the navigator has the longest name, it has " + navigatorNameLength + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + driverNameLength + " characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
function findVowels(name) {
  var vowels = "aeiouAEIOU";
  var vowelIndices = [];

  for (var i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
          vowelIndices.push(i + 1);
      }
  }

  if (vowelIndices.length > 0) {
      console.log(name + " " + vowels.split('').join(' ') + " " + vowelIndices.join(' '));
  } else {
      console.log("No vowels in " + name);
  }
}

findVowels(Kalvian_1);
findVowels(Kalvian_2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function countUppercaseLowercase(name) {
  var uppercaseCount = 0;
  var lowercaseCount = 0;

  for (var i = 0; i < name.length; i++) {
      if (name[i] >= 'A' && name[i] <= 'Z') {
          uppercaseCount++;
      } else if (name[i] >= 'a' && name[i] <= 'z') {
          lowercaseCount++;
      }
  }

  console.log("Uppercase characters: " + uppercaseCount);
  console.log("Lowercase characters: " + lowercaseCount);
}

countUppercaseLowercase(Kalvian_1);
countUppercaseLowercase(Kalvian_2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var driverNameSeparated = "";
for (var i = 0; i < Kalvian_1.length; i++) {
    driverNameSeparated += Kalvian_1[i].toUpperCase() + " ";
}
console.log(driverNameSeparated.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var navigatorNameReversed = "";
for (var i = Kalvian_2.length - 1; i >= 0; i--) {
    navigatorNameReversed += Kalvian_2[i];
}
console.log(navigatorNameReversed);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
var mergedNames = Kalvian_1 + " " + Kalvian_2;
console.log(mergedNames);

// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
var rearrangedNames = Kalvian_2 + " " + Kalvian_1;
console.log(rearrangedNames);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Kalvian_1 < Kalvian_2) {
  console.log("The driver's name goes first.");
} else if (Kalvian_1 > Kalvian_2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
var loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Count the number of words in the string.
var wordCount = 0;
var words = loremText.split(' ');

for (var i = 0; i < words.length; i++) {
    if (words[i] !== "") {
        wordCount++;
    }
}

console.log("Word count: " + wordCount);
// Count the number of times the Latin word et appears.
var etCount = 0;
var latinWord = "et";

for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === latinWord) {
        etCount++;
    }
}

console.log("Number of times 'et' appears: " + etCount);

// Bonus 2:
var phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(phrase) {
    var cleanPhrase = phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        for (var i = 0; i < cleanPhrase.length / 2; i++) {
        if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log("Is it a palindrome? " + isPalindrome(phraseToCheck));
