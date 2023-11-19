import data from "../data.json";
const easyWords = data.easy;
const normalWords = data.normal;
const hardWords = data.hard;
type resultsArrType = {
  wpm: number;
  accuracy: number;
  correctWords: number;
  wrongWords: number;
  level: string;
}[];
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

export function getDifficultyTest(difficulty: string) {
  if (typeof window !== "undefined") {
    const storedArr = JSON.parse(localStorage.getItem("resultsArr") || "[]");

    const arrOfDifficulty: resultsArrType = [];
    for (let i = 0; i < storedArr.length; i++) {
      if (storedArr[i].level === difficulty) {
        arrOfDifficulty.push(storedArr[i]);
      }
    }
    return arrOfDifficulty;
  }
  return [];
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
export function punctuationRandomWordsList(words: string[]): string[] {
  const result: string[] = [];
  const punctuationProbability = 0.1; // This determines the frequency of punctuation. Adjust as needed.

  for (let i = 0; i < words.length; i++) {
    if (Math.random() < punctuationProbability && i !== words.length - 1) {
      // Append punctuation to the current word.
      result.push(words[i] + ".");

      // Capitalize the next word.
      i++;
      const capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      result.push(capitalizedWord);
    } else {
      result.push(words[i]);
    }
  }

  // Ensure the last word has punctuation.
  if (!result[result.length - 1].endsWith(".")) {
    result[result.length - 1] = result[result.length - 1] + ".";
  }

  return result;
}
