const rulesImg = document.querySelector('.rules-img');
const rulesOpen = document.querySelector('.rules');
const rulesClose = document.querySelector('.close-rules');

rulesOpen.onclick = () => rulesImg.classList.add('active');
rulesClose.onclick = () => rulesImg.classList.remove('active');

// ==================================================================
const choicesBoxContainer = document.createElement('div');
choicesBoxContainer.classList.add('choices');
choicesBoxContainer.innerHTML = `
                <p data-choice="paper">
                    <img src="./icon-paper.svg" alt="">
                </p>
                <p data-choice="scissors">
                    <img src="./icon-scissors.svg" alt="">
                </p>
                <p data-choice="rock">
                    <img src="./icon-rock.svg" alt="">
                </p>
`;

const resultChoices = document.createElement('div');
resultChoices.classList.add('result-choices');

const container = document.querySelector(".container");
let choicesBox = document.querySelectorAll('.choices p');
let playAgain = document.querySelector('#play-again');
const numberOfGamesBox = document.querySelector("#nog");
const scoreBox = document.querySelector("#points");
let yourChoice = null;
let computerChoice = null;
let matchResult = null;
let numberOfGames = 0;
let score = 0;
let played = false;
const choices = new circularLinkedList;
const winProbabilities = new circularLinkedList;
const loseProbabilities = new circularLinkedList;

const showChoices = () => {
    if (!played) {
        resultChoices.remove();
        container.insertBefore(choicesBoxContainer, rulesImg);
        choicesBox = document.querySelectorAll('.choices p');
    } else {
        resultChoices.innerHTML = `
                <div id="your-choice">
                    <h3>Your Coice</h3>
                    <img src="icon-${yourChoice}.svg" alt="">
                </div>
                <div class="result-win">
                    <h3>${matchResult}</h3>
                    <button id="play-again">Play Again</button>
                </div>
                <div id="your-choice">
                    <h3>Computer Coice</h3>
                    <img src="icon-${computerChoice}.svg" alt="">
                </div>
            </div> `;
        choicesBoxContainer.remove();
        container.insertBefore(resultChoices, rulesImg);
        playAgain = document.querySelector('#play-again');
    }
}

showChoices()

// ===========================
choices.append('paper');
choices.append('scissors');
choices.append('rock');

winProbabilities.append("scissorspaper");
winProbabilities.append("rockscissors");
winProbabilities.append("paperrock");


loseProbabilities.append("paperscissors")
loseProbabilities.append("scissorsrock")
loseProbabilities.append("rockpaper")
// ==========================


choicesBox.forEach((choice, index) => {
    choice.onclick = (e) => {
        yourChoice = e.currentTarget.getAttribute('data-choice');
        computerChoice = choices.getRandomNode();
        const twoChoices = yourChoice + computerChoice;
        if (winProbabilities.includes(twoChoices)) {
            matchResult = "You Win";
            score++;
        } else if (loseProbabilities.includes(twoChoices)) {
            matchResult = "You Lose";
        } else {
            matchResult = "Draw";
        }
        numberOfGames++;
        played = true;
        showChoices();
        addClick();
        numberOfGamesBox.textContent = numberOfGames;
        scoreBox.textContent = score;
    }
});


const addClick = () => playAgain.onclick = () => {
    played = false;
    showChoices();
};