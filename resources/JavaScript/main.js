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


let gameSingle = (playerSelection, x) => {
    if (playerSelection.toLowerCase()==="rock" && x==="scissors") {
        return "You win! Rock beats scissors"; 
    } else if (playerSelection.toLowerCase()==="paper" && x==="rock") {
        return "You win! Paper beats rock."; 
    } else if (playerSelection.toLowerCase()==="scissors" && x==="paper") {
        return "You win! Scissors beats paper";
    } else if (x==="rock" && playerSelection.toLowerCase()==="scissors") {
        return "Computer win! Rock beats scissors"; 
    } else if (x==="paper" && playerSelection.toLowerCase()==="rock") {
        return "Computer wins! Paper beats rock."; 
    } else if (x==="scissors" && playerSelection.toLowerCase()==="paper") {
        return "Computer wins! Scissors beats paper";
    } else {
        return "DRAW."
    }
}


document.body.addEventListener("click", event => {
    let y = computerPlay();
    if (event.target.textContent == "Paper") {
        console.log(gameSingle("Paper", y)); 
    }

    if (event.target.textContent == "Rock") {
        console.log(gameSingle("Rock", y)); 
    }

    if (event.target.textContent == "Scissors") {
        console.log(gameSingle("Scissors", y)); 
    }
    
})
