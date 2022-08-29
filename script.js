const gamePart = document.getElementById('gamePart');

const howManyPlayers = document.createElement('div');
howManyPlayers.style.cssText =
    'display:flex; flex-direction:column; align-items: center; justify-content: space-around; padding:5%; margin:10px; flex:1; ';
howManyPlayers.innerText = 'How many players?';

const howManyPlayersInput = document.createElement('input');
howManyPlayersInput.setAttribute('id', 'playerNumber');
howManyPlayers.setAttribute('class', 'playerBox');
howManyPlayersInput.setAttribute('type', 'number');
howManyPlayersInput.setAttribute('value', '2');
howManyPlayersInput.setAttribute(
    'onclick',
    "howManyPlayersInput.setAttribute('value','')"
);
howManyPlayersInput.innerText = 'How many players?';

const howManyPlayersButton = document.createElement('button');
howManyPlayersButton.setAttribute('id', 'playerNumberButton');
howManyPlayersButton.setAttribute('onclick', 'selectPlayers()');
howManyPlayersButton.innerText = 'Accept players';

howManyPlayers.appendChild(howManyPlayersInput);
howManyPlayers.appendChild(howManyPlayersButton);
gamePart.appendChild(howManyPlayers);

function selectPlayers() {
    const playerNum = document.getElementById('playerNumber').value;
    playersNumber = playerNum;
    gamePart.removeChild(howManyPlayers);
    const playerNames = [playerNum];
    for (let i = 0; i < playerNum; i++) {
        const createPlayer = document.createElement('div');
        createPlayer.setAttribute('id', `playerBox${i}`);
        createPlayer.innerText = `Player ${i + 1} name:`;
        createPlayer.style.cssText =
            'display:flex; flex-direction:column; align-items: center; justify-content: space-around; padding:5%;  margin:10px; flex:1;';
        createPlayer.setAttribute('class', 'playerBox');
        const playerNameInput = document.createElement('input');
        playerNameInput.setAttribute('value', `Player ${i + 1}`);
        playerNameInput.setAttribute('id', `typedPlayerName${i}`);

        const playerNameAccept = document.createElement('button');
        playerNameAccept.setAttribute('id', `playerNameButton${i}`);
        playerNameAccept.innerText = 'Accept Name';
        playerNameAccept.setAttribute('onclick', `nameAccepted(${i})`);

        createPlayer.appendChild(playerNameInput);
        createPlayer.appendChild(playerNameAccept);
        gamePart.appendChild(createPlayer);
    }
}

function nameAccepted(i) {
    const playerBox = document.getElementById(`playerBox${i}`);
    const playerNameInput = document.getElementById(`typedPlayerName${i}`);
    const playerNameAccept = document.getElementById(`playerNameButton${i}`);
    const name = document.getElementById(`typedPlayerName${i}`).value;

    playersNames.splice(i, 0, name);

    playerBox.removeChild(playerNameInput);
    playerBox.removeChild(playerNameAccept);
    playerBox.innerText = ``;

    const enteredName = document.createElement('div');
    enteredName.innerText = `${name}`;

    const numberSelect = document.createElement('input');
    numberSelect.setAttribute('id', `numberOfPlayer${i}`);
    numberSelect.setAttribute('type', 'number');

    const numberAccept = document.createElement('button');
    numberAccept.setAttribute('id', `numberButton${i}`);
    numberAccept.innerText = 'Accept your number';
    numberAccept.setAttribute('onclick', `numberAccept(${i})`);

    const numberText = document.createElement('div');
    numberText.setAttribute('id', `text${i}`);
    numberText.setAttribute('class', 'textForNumberEnter');
    numberText.innerText = `enter your number`;

    playerBox.appendChild(enteredName);
    playerBox.appendChild(numberText);
    playerBox.appendChild(numberSelect);
    playerBox.appendChild(numberAccept);
}

function numberAccept(i) {
    const playerBox = document.getElementById(`playerBox${i}`);
    const numberButton = document.getElementById(`numberButton${i}`);
    const numberOfPlayer = document.getElementById(`numberOfPlayer${i}`);
    const number = document.getElementById(`numberOfPlayer${i}`).value;
    const numberText = document.getElementById(`text${i}`);

    numbersChosenByPlayers.splice(i, 0, number);

    playerBox.removeChild(numberButton);
    playerBox.removeChild(numberOfPlayer);
    playerBox.removeChild(numberText);

    const selectedNumber = document.createElement('div');
    selectedNumber.innerText = `${number}`;

    const playButton = document.createElement('button');
    if (i == 0) {
        playButton.setAttribute('id', `playButtonNr${i}`);
        playButton.setAttribute('onclick', `playGame(${number},${i})`);
        playButton.innerText = 'Throw dice';
    } else {
        playButton.setAttribute('id', `playButtonNr${i}`);
        playButton.setAttribute('onclick', `playGame(${number},${i})`);
        playButton.innerText = 'Not your turn';
        playButton.disabled = true;
    }

    playerBox.appendChild(selectedNumber);
    playerBox.appendChild(playButton);
}

function playGame(num, x) {
    const playerBox = document.getElementById(`playerBox${x}`);
    if (x < playersNumber - 1) {
        const nextPlayerButton = document.getElementById(
            `playButtonNr${x + 1}`
        );
        nextPlayerButton.innerText = 'Throw dice';
        nextPlayerButton.disabled = false;
    } else {
        const nextPlayerButton = document.getElementById(`playButtonNr${0}`);
        nextPlayerButton.innerText = 'Throw dice';
        nextPlayerButton.disabled = false;
    }

    const nextPlayerButton = document.getElementById(`playButtonNr${x}`);
    nextPlayerButton.innerText = 'Not your turn';
    nextPlayerButton.disabled = true;

    if (isThisFirstGame[x] == 1) {
        const oldPlayerBox = document.getElementById(`numberGotten${x}`);
        playerBox.removeChild(oldPlayerBox);
    } else {
        isThisFirstGame.splice(x, 0, 1);
    }
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    const numberGotten = document.createElement('div');
    numberGotten.setAttribute('id', `numberGotten${x}`);
    numberGotten.setAttribute('class', 'numberGotten');
    numberGotten.innerText = `Number ${randomNumber} was rolled, it was nobody's number`;

    let won = 0;

    for (let i = 0; i < playersNames.length; i++) {
        if (randomNumber == numbersChosenByPlayers[i] && randomNumber != num) {
            won++;
            numberGotten.innerText = `You rolled ${randomNumber} and it was ${playersNames[i]} number!`;
            numberGotten.style.cssText =
                'color:red; font-size:20px; font-size:2vw;';
        }
    }
    if (won == 0) {
        numberGotten.style.cssText = '';
    }
    console.log(` number ${randomNumber} for player ${x + 1}`);
    playerBox.appendChild(numberGotten);
}
const isThisFirstGame = [];
let playersNumber = 0;
const numbersChosenByPlayers = [];
const playersNames = [];
