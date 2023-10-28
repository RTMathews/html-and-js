function getComputerChoice()
{
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];

    return choice;
    console.log(choice);
}

function getPlayerChoice()
{ 
    let choice = prompt('Enter Rock, Paper, or Scissors.').toUpperCase();
}