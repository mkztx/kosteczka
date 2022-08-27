const gamePart = document.getElementById('gamePart');

const howManyPlayers = document.createElement('div');
howManyPlayers.style.cssText =
    'display:flex; flex-direction:column; align-items: center; justify-content: center;';
howManyPlayers.innerText = 'How many players?';

const howManyPlayersInput = document.createElement('input');
howManyPlayersInput.setAttribute('id', 'playerNumber');
howManyPlayersInput.innerText = 'How many players?';

const howManyPlayersButton = document.createElement('button');
howManyPlayersButton.setAttribute('id', 'playerNumberButton');
howManyPlayersButton.setAttribute('onclick', "alert('test')");
howManyPlayersButton.innerText = 'Accept players';

howManyPlayers.appendChild(howManyPlayersInput);
howManyPlayers.appendChild(howManyPlayersButton);
gamePart.appendChild(howManyPlayers);
