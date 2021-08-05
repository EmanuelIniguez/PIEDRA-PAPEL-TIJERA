// Configuracion de la puntuacion y elementos seleccionados del HTML
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// Arreglo randomClasses que contiene las imagenes de Piedra , papel , tijera : de FONTAWESOME 
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

// Funcionalidad del juego: Configuracion forEach para los botones
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Piedra papel o tijera para el jugaror y la computadora
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];
            // Puntaje del juego.
            // Si es Empate .
            if (showIcon.className === computerShowIcon.className) {
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "Empate ! ";
                text.style.color = '#264653';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#264653';
            }
            // Si no es Empate.
            else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "Ganaste! ";
                text.style.color = '#283618';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#283618';
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "Perdiste ! ";
                text.style.color = '#6a040f';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#6a040f';
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "Perdiste ! ";
                text.style.color = '#6a040f';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#6a040f';
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "Ganaste! ! ";
                text.style.color = '#283618';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#283618';
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "Perdiste ! ";
                text.style.color = '#6a040f';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#6a040f';
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "Ganaste! ! ";
                text.style.color = '#283618';
                text2.innerHTML = text.innerHTML;
                text2.style.color = '#283618';
            }
        });
    });
}
// Llamada a la funcion del juego.
game();
// Este contenedor contiene toda la logica del juego