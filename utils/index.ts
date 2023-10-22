import data from "../data.json";
const easyWords = data.easy;
const normalWords = data.normal;
const hardWords = data.hard;

export function getLastPath(pathname: string) {
  if (pathname.length === 0) {
    console.log("The length of the path is 0");
    return pathname;
  }
  let lastPath = "";
  for (let i = pathname.length - 1; i > 0; i--) {
    const currentChar = pathname[i];
    if (currentChar === "/") {
      break;
    }
    lastPath = currentChar + lastPath;
  }
  return lastPath;
}

export function randomWordsList(
  typeOfWordsList: string,
  wordsCount: number
): string[] {
  let jsonArr: string[] = [];
  switch (typeOfWordsList) {
    case "Easy":
      jsonArr = easyWords;
      break;
    case "Normal":
      jsonArr = normalWords;
      break;
    case "Hard":
      jsonArr = hardWords;
      break;
    default:
      console.error("The typeOfWordsList is not familiar");
      return [];
  }
  const arr: string[] = [];
  let prevWord = "";
  for (let i = 0; i < wordsCount; i++) {
    let randomIndex = Math.floor(Math.random() * jsonArr.length);
    let randomWord = jsonArr[randomIndex];
    while (randomWord === prevWord) {
      randomIndex = Math.floor(Math.random() * jsonArr.length);
      randomWord = jsonArr[randomIndex];
    }
    arr.push(randomWord);
    prevWord = randomWord;
  }
  return arr;
}
export function formatArrToSentence(arr: string[]) {
  return arr.join(" ");
}
export function algoFormatArrToSentence(words: string[]) {
  const numOfWords = Math.floor(Math.random() * 7) + 4;
  let sentence = [];
  for (let i = 0; i < numOfWords; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    sentence.push(randomWord);
    if (Math.random() < 0.1 && i !== numOfWords - 1) {
      sentence[i] = sentence[i] + ".";
      i++;
      const nextRandomWord = words[Math.floor(Math.random() * words.length)];
      sentence.push(nextRandomWord[0].toUpperCase() + nextRandomWord.slice(1));
    }
  }
  if (!sentence[sentence.length - 1].endsWith(".")) {
    sentence[sentence.length - 1] = sentence[sentence.length - 1] + ".";
  }
  return sentence.join(" ");
} // we do a join to the array, returns a string.
