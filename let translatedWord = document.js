let translatedWord = document.getElementById("translated-word");
let translatedWordItalian = document.getElementById("translated-word-italian");
let translatedWordFrench = document.getElementById("translated-word-french");
let translatedWordPortuguese = document.getElementById(
  "translated-word-portuguese"
);
let translateButton = document.getElementById("translate-button");



function newWord(url, lan){

  let textToTranslate = document.getElementById("text-input").value;
  if (
    (textToTranslate.length =
      0 || textToTranslate.length === 1 || textToTranslate === "")
  ) {
    alert("please enter a valid word");
  } else {
const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: textToTranslate,
		target: url,
		source: 'en'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
}
addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    newWord("es", translatedWord);
    // newWord("fr", translatedWordFrench);
    // newWord("it", translatedWordItalian);
    // newWord("pt", translatedWordPortuguese);
  }
});
translateButton.addEventListener("click", () => {
  newWord("es", translatedWord);
  // newWord("fr", translatedWordFrench);
  // newWord("it", translatedWordItalian);
  // newWord("pt", translatedWordPortuguese);
});
