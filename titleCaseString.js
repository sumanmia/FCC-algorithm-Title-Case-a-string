function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

const toTitleCase = phrase => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let result = toTitleCase("maRy hAd a lIttLe LaMb");
console.log(result);

const arr = ["blonde", "brunette", "redhead"];

const firstLetterOfEachWord = arr.map(word => word.charAt(0));

console.log(firstLetterOfEachWord);
