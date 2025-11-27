let secondes = 0;
let minutes = 0;
let heures = 0;
const timerElement = document.querySelector('.timer p');

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
}

setInterval(updateTimer, 1000);