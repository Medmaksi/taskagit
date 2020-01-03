const rps = (elem) => {
    const userSelectArray= document.getElementsByClassName('selection');
    let rand= Math.floor(Math.random()*3);
    let computerSelection= userSelectArray[rand].id;

    for(let i=0; i<userSelectArray.length; i++){

        switch (computerSelection) {
            case 'Rock':
                elem === 'Rock' ? console.log('Tie') : elem === 'Paper' ? console.log('You won') : elem === 'Scissors' ? console.log('You lost') : null;
                return;
            case 'Paper':
                elem === 'Rock' ? console.log('You lost') : elem === 'Paper' ? console.log('Tie') : elem === 'Scissors' ? console.log('You won') : null;
                return;
            case 'Scissors':
                elem === 'Rock' ? console.log('You won') : elem === 'Paper' ? console.log('You lost') : elem === 'Scissors' ? console.log('Tie') : null;
                return;
        }
    }
}

const selectdis = (selection) => {
    let userSelection = selection.id;
    rps(userSelection);
}
