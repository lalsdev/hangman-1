let underScore = document.getElementById("underScore");
let lives = 6;
let livesDisplay = document.getElementById("lives");
livesDisplay.innerHTML = lives;

// cree un mot random de wordsArray
const wordsArray = ["bot","humanoid","android","droid","cyborg","robot","machine","computer","automaton","linux"];
console.log(wordsArray);

let secretWord = wordsArray[Math.floor(Math.random()*10)];
console.log(secretWord);

// remplacer lettre par des underscore et mettre dans html
let remplace = secretWord.replace(/[a-z]/gi, "_");
console.log(remplace);
underScore.innerHTML = remplace;

//click sur lettre recupere la valeur 
let input = document.querySelectorAll(".lettreCheck")
input.forEach(button =>{
    button.addEventListener("click", () =>
    
    { 
        let btn = button.innerHTML
        console.log(btn);
        checkLetterInSecretWord(btn);
    });
});

//check si la lettre clickee fait partie du mot secret
function checkLetterInSecretWord(input){
    for (let i=0;i<secretWord.length;i++){
        if(input == secretWord[i]){
            let splitWord = remplace.split("");
            console.log(remplace);
            splitWord[i] = input; 
            console.log(i);
            console.log(splitWord);
            let string = splitWord.join('');
            console.log(string);
            underScore.innerHTML = string;
            remplace = string;
            return;
        }
    }
    lives--;
    livesDisplay.innerHTML=lives;
    document.getElementById("robot").setAttribute("src", "assets/img/"+lives+".png");
    if (lives <= 0){
        document.getElementById("pRegles").innerHTML = "Sorry, Game Over";
        document.querySelectorAll(".lettreCheck").forEach( button => {
            button.disabled = true;
        });
        
    }
}





//changer lettre clickee dans le secretword
