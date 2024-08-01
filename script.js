var bubbles = document.querySelector(".bubble");
var timer = 59;
var score = 0;
var hitVal = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function getNewHit() {
    hitVal = Math.floor(Math.random() * 10);
    document.querySelector("#hitVAl").textContent = hitVal;
}

function makeBubble() {
    
    let culetter = '';
    for (var i = 0; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        culetter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector('#pbtm').innerHTML = culetter
}

function runTimer() {
    var timeout = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else if (score >= 100) {
            document.querySelector("#pbtm").innerHTML = `<h1>GameOver Good <span>${score}</span></h1>`
            
        }
        
        else if (score ===1000) {
            document.querySelector("#pbtm").innerHTML = `<h1Excellience <span>${score}</span></h1>`
            


        }
        else if (score === 500) {

            document.querySelector("#pbtm").innerHTML = `<h1>GameOver very Good <span>${score}</span></h1>`
        }
        else {
            clearInterval(timeout);
            document.querySelector("#pbtm").innerHTML = `<h1>GameOver, and your score is <span>${score}</span></h1>`
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener('click', function (dets) {
    var clicknum = Number(dets.target.textContent);
    if (clicknum === hitVal) {
        increaseScore();
        getNewHit();
        makeBubble()
    };
});

runTimer()
makeBubble()
getNewHit()
