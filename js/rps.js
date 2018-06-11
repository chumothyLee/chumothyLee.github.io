
const options = ['rock', 'paper', 'scissors'];
const tieText = 'we tied...';
const winText = 'you won...are you cheating?'
const loseText = 'you lost...lol' 

var userPick = options[0];

function userPickRock() {
	userPick = options[0];
	updateUserPickImage();
}

function userPickPaper() {
	userPick = options[1];
	updateUserPickImage();
}

function userPickScissors() {
	userPick = options[2];
	updateUserPickImage();
}

function computerPick() {
	const pick = options[Math.floor(Math.random() * 3)]
	document.getElementById('compPickImage').src=`img/${pick}.png`;
	return pick;
}

function updateUserPickImage() {
	document.getElementById('userPickImage').src=`img/${userPick}.png`;
}

function reload() {
	document.getElementById('compPickImage').src='img/nothing.png';
	document.getElementById('playAgainText').innerText='';
	document.getElementById('instructionalText').innerText='Pick something, then Shoot';
	document.getElementById('playButton').onclick=compare;
	document.getElementById('playButton').innerText="Shoot";
}

function compare() {
	const instText = document.getElementById('instructionalText');
	const playText = document.getElementById('playAgainText');
	const button   = document.getElementById('playButton');
	const compPick = computerPick();

	if (userPick === compPick) {
		/* USER TIE */
		instText.innerText = tieText;
	}
	else if (userPick === options[0]) {
		if (compPick === options[1]) {
			/* USER LOSE */
			instText.innerText = loseText;
		}
		else {
			/* USER WIN */
			instText.innerText = winText;
		}
	}
	else if (userPick === options[1]) {
		if (compPick === options[2]) {
			/* USER LOSE */
			instText.innerText = loseText;
		}
		else {
			/* USER WIN */
			instText.innerText = winText;
		}
	}
	else if (userPick === options[2]) {
		if (compPick === options[0]) {
			/* USER LOSE */
			instText.innerText = loseText;
		}
		else {
			/* USER WIN */
			instText.innerText = winText;
		}
	}
	playText.innerText = "leave... or play again";
	playButton.innerText = "Play Again"
	playButton.onclick = reload;
}
