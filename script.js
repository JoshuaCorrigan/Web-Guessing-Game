function guessingGame(){
  
  const guessingDom = document.getElementById("guessing");
  const playingDom  = document.getElementById("playing");
  const guessDom    = document.getElementById("guess");
  const triesDom    = document.getElementById("tries");
  const hintDom     = document.getElementById("hint");
  const score       = document.getElementById("score");
  const ansDom      = document.getElementById("answer");
  const yesDom      = document.getElementById("yes");
  const noDom       = document.getElementById("no");
  const guessesDom  = document.getElementById("guesses");
  const bestDom     = document.getElementById("best");
  const gamesDom    = document.getElementById("games");
  const avgDom    = document.getElementById("avg");
  let gameTotal     = 0;
  let guessTotal    = 0;
  let guessBest     ;
  let answer        ;   
  
  play();

  guessDom.addEventListener("change",makeGuess);
  yesDom.addEventListener("click",playAgain);
  noDom.addEventListener("click",endResults);

  
  function play(){ //init game
    answer = Math.floor(Math.random()*100);triesDom.value="0";
    guessDom.value="";
    ansDom.value="";
    score.value="";
    
  }

  function playAgain(){
    gameTotal++;
    play();
  }

  function makeGuess(e){
    console.log("This is this:");
    console.log(this); //the guessDom element
    //console.log("This is the event:");
    //console.log(e);
    console.log("This is the answer:");
    console.log(answer);
    triesDom.value = parseInt(triesDom.value)+1+"";
    evalGuess(guessDom.value);
    
  }

  function showGameResults(tries){
    ansDom.value= answer;
    score.value = tries;
    guessTotal+= parseInt(triesDom.value)
    if(gameTotal==1) guessBest=triesDom.value;
    if(gameTotal>triesDom.value) guessBest = triesDom.value;
  }

  function evalGuess(guess){
    if(guess<answer){
      alert("Higher");
    } else if(guess>answer){
      alert("Lower");
    } else {
      alert("You got it right!");
      showGameResults(triesDom.value);
    }
  }

  function endResults(){
    gamesDom.value=gameTotal+1;
    guessesDom.value=guessTotal;
    avgDom.value= guessTotal/(gameTotal*1.0+1);
    bestDom.value=guessBest;
  }
  
}


guessingGame();