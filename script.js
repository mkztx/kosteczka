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
    playerBox.removeChild(playerNameInput);
    playerBox.removeChild(playerNameAccept);
    playerBox.innerText = `${name} \n Enter your number:`;

    const numberSelect = document.createElement('input');
    numberSelect.setAttribute('id', `numberOfPlayer${i}`);

    const numberAccept = document.createElement('button');
    numberAccept.setAttribute('id', `numberButton${i}`);
    numberAccept.innerText = 'Accept your number';
    numberAccept.setAttribute('onclick', "alert('test')");

    playerBox.appendChild(numberSelect);
    playerBox.appendChild(numberAccept);
}
