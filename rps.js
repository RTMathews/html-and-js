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
    else (choice != 'ROCK' || choice != 'PAPER' || choice != 'SCISSORS')
    {
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection)
{
    if (getComputerChoice() == getPlayerChoice())
    {
        return 'Tie!';
        console.log('Tie!');
    }
    else if (getComputerChoice() == 'ROCK' && getPlayerChoice() == 'PAPER')
    {
        return 'You Win!';
        console.log('You Win!');
    }
    else if (getComputerChoice() == 'PAPER' && getPlayerChoice() == 'SCISSORS')
    {
        return 'You Win!';
        console.log('You Win!');
    }
}