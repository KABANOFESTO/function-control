const reverseWordsWithPunctuation= function reverseWordsWithPunctuation(inputString) {
    const wordsWithPunctuation = inputString.match(/\w+|[^\w\s]/g);
  
    if (!wordsWithPunctuation) {
      return inputString; // No words found
    }
  
    return wordsWithPunctuation.reverse().join(' ');
  }
  
  // Example usage:
  const inputString = "Hello, world! How are you?";
  const reversedResult = reverseWordsWithPunctuation(inputString);
  
  console.log(reversedResult);
  