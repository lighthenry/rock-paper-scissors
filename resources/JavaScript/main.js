let computerPlay = () => {
    let num=Math.floor(Math.random()*3); 
    switch (num) {
        case 0:
            return "rock"; 
            break;
        case 1: 
            return "paper"; 
            break; 
        case 2:
            return "scissors"; 
            break;
    }
}

let playerScore = 0; 
let computerScore = 0;

let gameSingle = (playerSelection, x) => {
    if (playerSelection.toLowerCase()==="rock" && x==="scissors") {
        playerScore ++;
        return "You win! Rock beats scissors"; 
    } else if (playerSelection.toLowerCase()==="paper" && x==="rock") {
        playerScore ++;
        return "You win! Paper beats rock."; 
    } else if (playerSelection.toLowerCase()==="scissors" && x==="paper") {
        playerScore ++;
        return "You win! Scissors beats paper";
    } else if (x==="rock" && playerSelection.toLowerCase()==="scissors") {
        computerScore ++;
        return "Computer win! Rock beats scissors"; 
    } else if (x==="paper" && playerSelection.toLowerCase()==="rock") {
        computerScore ++;
        return "Computer wins! Paper beats rock."; 
    } else if (x==="scissors" && playerSelection.toLowerCase()==="paper") {
        computerScore ++;
        return "Computer wins! Scissors beats paper";
    } else {
        return "DRAW."
    }
}

document.body.addEventListener("click", event => {
    const p = document.querySelector(".result");    
    let y = computerPlay();
    if (event.target.textContent == "Paper") {
        p.textContent = gameSingle("Paper",y) + "\n" + playerScore + "-" + computerScore; 
    }

    if (event.target.textContent == "Rock") {
        p.textContent = gameSingle("Rock",y) + "\n" + playerScore + "-" + computerScore; 
    }

    if (event.target.textContent == "Scissors") {
        p.textContent = gameSingle("Scissors",y) + "\n" + playerScore + "-" + computerScore; 
    }
});