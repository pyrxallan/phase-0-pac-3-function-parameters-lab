//function that takes a name as an argument and returns a greeting message
function introduction(name) {
  return `Hi, my name is ${name}.`;
}
//Call introduction function
console.log(introduction("Aki"));

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//Call instuctionWithLanguage function
console.log(introductionWithLanguage("Aki","JavaScript"));

//function that takes a name and an optional language argument with a default value of "JavaScript"
function introductionWithLanguageOptional(name,language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//Call instuctionWithLanguageOptional function
console.log(introductionWithLanguageOptional("Aki"));
console.log(introductionWithLanguageOptional("Aki","Python"));

