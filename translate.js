
function newWord(){

    let textToTranslate= document.getElementById("text-input").value;
let translatedWord= document.getElementById("translated-word");
if(textToTranslate.length = 0 || textToTranslate.length === 1 || textToTranslate === ""){
    alert("please enter a valid word")
}
else{
fetch("https://language-translation.p.rapidapi.com/translateLanguage/translate?text=" + textToTranslate + "&type=plain&target=es", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
		"x-rapidapi-host": "language-translation.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then((data)=>{
        console.log(data.translatedText)
        translatedWord.innerHTML = data.translatedText;
newWordItalian()
newWordFrench()
newWordPortuguese()

    })
})



.catch(err => {
	console.error(err);
});

}
}





function newWordItalian(){

let textToTranslate= document.getElementById("text-input").value;
let translatedWord= document.getElementById("translated-word");
let translatedWordItalian= document.getElementById("translated-word-italian");


fetch("https://language-translation.p.rapidapi.com/translateLanguage/translate?text=" + textToTranslate + "&type=plain&target=it", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
		"x-rapidapi-host": "language-translation.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then((data)=>{
        console.log(data.translatedText)
        translatedWordItalian.innerHTML = data.translatedText;

    })
})
.catch(err => {
	console.error(err);
});

}






function newWordFrench(){

    let textToTranslate= document.getElementById("text-input").value;
let translatedWord= document.getElementById("translated-word");
let translatedWordFrench= document.getElementById("translated-word-french");


fetch("https://language-translation.p.rapidapi.com/translateLanguage/translate?text=" + textToTranslate + "&type=plain&target=fr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
		"x-rapidapi-host": "language-translation.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then((data)=>{
        console.log(data.translatedText)
        translatedWordFrench.innerHTML = data.translatedText;

    })
})
.catch(err => {
	console.error(err);
});

}





function newWordPortuguese(){

    let textToTranslate= document.getElementById("text-input").value;
let translatedWord= document.getElementById("translated-word");
let translatedWordPortuguese= document.getElementById("translated-word-portuguese");


fetch("https://language-translation.p.rapidapi.com/translateLanguage/translate?text=" + textToTranslate + "&type=plain&target=pt", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
		"x-rapidapi-host": "language-translation.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);
    response.json().then((data)=>{
        console.log(data.translatedText)
        translatedWordPortuguese.innerHTML = data.translatedText;

    })
})
.catch(err => {
	console.error(err);
});

}