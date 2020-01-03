const rps = (elem) => {
    const userSelectArray= document.getElementsByClassName('selection');
    let rand= Math.floor(Math.random()*3);
    let computerSelection= userSelectArray[rand].id;
    let result = '';

        switch (computerSelection) {
            case 'Rock':
                elem === 'Rock' ? result= 'Tie' : elem === 'Paper' ? result= 'Won' : elem === 'Scissors' ? result= 'Lost' : null;
                break;
            case 'Paper':
                elem === 'Rock' ? result= 'Lost' : elem === 'Paper' ? result= 'Tie' : elem === 'Scissors' ? result= 'Won' : null;
                break;
            case 'Scissors':
                elem === 'Rock' ? result= 'Won' : elem === 'Paper' ? result= 'Lost' : elem === 'Scissors' ? result= 'Tie' : null;
                break;
            default:
                result= 'Please try again';
        }

    return result;
}

const selectdis = (selection) => {
    let userSelection = selection.id;
    if(rps(userSelection)==='Won'){
        var data = 'YollaKaderim';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/taskagit/src/php/givekeys.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Your key is: ' + xhr.responseText);
            }
            else {
                alert('Request failed. Returned status of ' + xhr.status);
            }
        };
        xhr.send('data=' + data);
    } else {
        alert('Please try again.');
    }
}
