function game(){
    let pScore =0;
    let cScore =0;
    playerScore = document.querySelector(".player-score h1")
    computerScore = document.querySelector(".computer-score h1")

    function startGame(){
        const playBtn = document.querySelector('.intro button');
        const intoScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
     

        playBtn.addEventListener('click',start)
        function start(){
            intoScreen.classList.add('fadeout');
            match.classList.add('fadein');
        }
    }
    function playMatch(){
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');


        const hands = document.querySelectorAll('.hands img')
        hands.forEach(function(hand){
         hand.addEventListener('animationend',function(){this.style.animation='';})
            })


        const computerOptions = ["rock","paper","scissors"];
        
        options.forEach(function opt(option){
            option.addEventListener('click',function(){
                
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber];
                
                campareHands(this.textContent, computerChoice);
                playerChoice = this.textContent;
                playerHand.src = `./images/${playerChoice}.png`;
                computerHand.src = `./images/${computerChoice}.png`;


                playerScore.textContent = pScore;
                computerScore.textContent = cScore;
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
            })
        })   
    }

    function campareHands(playerChoice,computerChoice){
        const winner = document.querySelector('.winner')
        if(playerChoice === computerChoice){
            winner.textContent = "it's a tie"
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice == 'scissors'){
                winner.textContent = "Player wins";
                pScore++;
                return;
            }
            else{
                winner.textContent = "Computer wins";
                cScore++;
                return;
            }
        } 
        if(playerChoice === 'scissors'){
            if(computerChoice == 'paper'){
                winner.textContent = "Player wins"
                pScore++;
                return;
            }
            else{
                winner.textContent = "Computer wins"
                cScore++;
                return;
            }
        } 
        if(playerChoice === 'paper'){
            if(computerChoice == 'rock'){
                winner.textContent = "Player wins"
                pScore++;
                return;
            }
            else{
                winner.textContent = "Computer wins"
                cScore++;
                return;
            }
        } 


    }


    startGame();
    playMatch();
}
game();