function getComputerChoice()
{
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = options[Math.floor(Math.random() * options.length)];

    return choice;
    console.log(choice);
}

function getPlayerChoice()
{ 
    let choice = prompt('Enter Rock, Paper, or Scissors.').toUpperCase();
    if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS')
    {
        return choice;
        console.log(choice);
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        return 'Tie!';
        console.log('Tie!');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    {
        return 'You Win!';
        console.log('You Win!');
    }
}