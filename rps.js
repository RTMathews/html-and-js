function getComputerChoice()
{
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];

    return choice;
    console.log(choice);
}

function getPlayerChoice()
{ 
    let choice;
    let choiceUpper;

    choice = prompt('Enter Rock, Paper, or Scissors');
    choiceUpper = choice.toUpperCase();
    while (choiceUpper !== 'ROCK' || choiceUpper !== 'PAPER' || choiceUpper !== 'SCISSORS')
    {
        choice = prompt('Try again. Rock, Paper, or Scissors');
        choiceUpper = choice.toUpperCase();
    }
}