let secondes = 0;
let minutes = 0;
let heures = 0;
const timerElement = document.querySelector('.timer p');

let scrollVictoire = false;
let alignVictoire = false;

const chaki = document.querySelector('.chaki');
const messageChaki = document.querySelector('.message-fin');
let chakiVisible = false;

function updateTimer() {
    secondes++;
    if (secondes === 60) {
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            heures++;
        }
    }

    const formattedTime = 
        String(heures).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(secondes).padStart(2, '0');
    timerElement.textContent = formattedTime;

    if (scrollVictoire && alignVictoire && !chakiVisible) {
        chaki.style.display = 'inline';
        chakiVisible = true;
        console.log("Chaki visible");
    }

    if (chakiVisible) {
        chaki.style.left = `${Math.floor(Math.random() * 80 - 40)}%`
        chaki.style.top = `${Math.floor(Math.random() * 70 - 35)}%`

        chaki.addEventListener('click', () => {
            chaki.style.display = 'none';
            messageChaki.style.display = 'block';
        });
    }
}

setInterval(updateTimer, 1000);