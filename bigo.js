const revrseWordsWithPunctuation = (inputString) => {
  const wordWithPanctuation = inputString.match(/\w+|[^\w\s]/g);

  if (!wordWithPanctuation) {
    return inputString;
  }
  return wordWithPanctuation.reverse().join(' ');
}

const inputString = "Hello, world! How are you?";
const reversedResult = revrseWordsWithPunctuation(inputString);

console.log(reversedResult);