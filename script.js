const gamePart = document.getElementById('gamePart');

const howManyPlayers = document.createElement('div');
howManyPlayers.style.cssText =
    'display:flex; flex-direction:column; align-items: center; justify-content: center; gap:10px; margin:10px;';
howManyPlayers.innerText = 'How many players?';

const howManyPlayersInput = document.createElement('input');
howManyPlayersInput.setAttribute('id', 'playerNumber');
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
            'display:flex; flex-direction:column; align-items: center; justify-content: center; gap:10px; margin:10px;';

        const playerNameInput = document.createElement('input');
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
    numberSelect.setAttribute('value', 'enter your number');

    const numberAccept = document.createElement('button');
    numberAccept.setAttribute('id', `numberButton${i}`);
    numberAccept.innerText = 'Accept your number';
    numberAccept.setAttribute('onclick', `numberAccept(${i})`);

    playerBox.appendChild(enteredName);
    playerBox.appendChild(numberSelect);
    playerBox.appendChild(numberAccept);
}

function numberAccept(i) {
    const playerBox = document.getElementById(`playerBox${i}`);
    const numberButton = document.getElementById(`numberButton${i}`);
    const numberOfPlayer = document.getElementById(`numberOfPlayer${i}`);
    const number = document.getElementById(`numberOfPlayer${i}`).value;

    numbersChosenByPlayers.splice(i, 0, number);

    playerBox.removeChild(numberButton);
    playerBox.removeChild(numberOfPlayer);

    const selectedNumber = document.createElement('div');
    selectedNumber.innerText = `${number}`;

    const playButton = document.createElement('button');
    playButton.setAttribute('id', `playButtonNr${i}`);
    playButton.setAttribute('onclick', `playGame(${number},${i})`);
    playButton.innerText = 'Throw dice';

    playerBox.appendChild(selectedNumber);
    playerBox.appendChild(playButton);
}

function playGame(num, x) {
    const playerBox = document.getElementById(`playerBox${x}`);

    if (isThisFirstGame[x] == 1) {
        const oldPlayerBox = document.getElementById(`numberGotten${x}`);
        playerBox.removeChild(oldPlayerBox);
    } else {
        isThisFirstGame.splice(x, 0, 1);
    }

    let randomNumber = Math.floor(Math.random() * 6 + 1);
    for (let i = 0; i < playersNames.length; i++) {
        if (randomNumber == numbersChosenByPlayers[i]) {
            const numberGotten = document.createElement('div');
            numberGotten.setAttribute('id', `numberGotten${x}`);
            numberGotten.innerHTML = `You rolled ${randomNumber} and it was ${playersNames[i]} number!`;
            playerBox.appendChild(numberGotten);
        }
    }
}
const isThisFirstGame = [];
let playersNumber = 0;
const numbersChosenByPlayers = [];
const playersNames = [];
