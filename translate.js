let translatedWord = document.getElementById("translated-word");
let translatedWordItalian = document.getElementById("translated-word-italian");
let translatedWordFrench = document.getElementById("translated-word-french");
let translatedWordPortuguese = document.getElementById("translated-word-portuguese");
let translateButton = document.getElementById("translate-button")




function newWord(url,lan) {
  let textToTranslate = document.getElementById("text-input").value;
if (
    (textToTranslate.length =
      0 || textToTranslate.length === 1 || textToTranslate === "")
  ) {
    alert("please enter a valid word");
  } else {
    fetch(
      "https://language-translation.p.rapidapi.com/translateLanguage/translate?text=" +
        textToTranslate +
        "&type=plain&target=" + url,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
          "x-rapidapi-host": "language-translation.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        console.log(response);
        response.json()
        .then((data) => {
          console.log(data.translatedText);
          lan.innerHTML = data.translatedText;
         });
      })

      .catch((err) => {
        console.error(err);
      });
  }
}

//These are the event listeners to run the function

addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
     newWord("es",translatedWord)
     newWord("fr",translatedWordFrench)
     newWord("it",translatedWordItalian)
     newWord("pt",translatedWordPortuguese)
  }
});
translateButton.addEventListener("click", ()=>{
  newWord("es",translatedWord)
  newWord("fr",translatedWordFrench)
  newWord("it",translatedWordItalian)
  newWord("pt",translatedWordPortuguese)
  

})