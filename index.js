let scoreHomeEL = document.getElementById("score-home")
let scoreGuestEL = document.getElementById("score-guest")

let playerHome = document.getElementById("playerHome")
let playerGuest = document.getElementById("playerGuest")

let timerEL = document.getElementById("timer")

console.log(playerHome)
console.log(playerGuest)

let scoreHome = 0
let scoreGuest = 0

let time = 0 // 1 hour

scoreHomeEL.innerText = scoreHome
scoreGuestEL.innerText = scoreGuest

function addOneHome() {
    console.log("add one home")
    scoreHome += 1
    scoreHomeEL.innerText = scoreHome
    highlightWinner()
}

function addTwoHome() {
    console.log("add two home")
    scoreHome += 2
    scoreHomeEL.innerText = scoreHome
    highlightWinner()
}

function addThreeHome() {
    console.log("add three home")
    scoreHome += 3
    scoreHomeEL.innerText = scoreHome
    highlightWinner()
}


function addOneGuest() {
    console.log("add one guest")
    scoreGuest += 1
    scoreGuestEL.innerText = scoreGuest
    highlightWinner()
}

function addTwoGuest() {
    console.log("add two guest")
    scoreGuest += 2
    scoreGuestEL.innerText = scoreGuest
    highlightWinner()
}

function addThreeGuest() {
    console.log("add three guest")
    scoreGuest += 3
    scoreGuestEL.innerText = scoreGuest
    highlightWinner()
}


function restart() {
    scoreHome = 0;
    scoreHomeEL.innerText = scoreHome;
    
    scoreGuest = 0;
    scoreGuestEL.innerText = scoreGuest;
    
    highlightWinner()
    
    //reset timer
    time = 0
    timerEL.innerText = "60:00"
}

function highlightWinner() {
    if(scoreHome > scoreGuest){
        playerHome.style.textDecoration = "underline";
        playerGuest.style.textDecoration = "none";
    }else if(scoreHome == scoreGuest){
       playerHome.style.textDecoration = "none";
       playerGuest.style.textDecoration = "none";
    }else {
        playerHome.style.textDecoration = "none";
       playerGuest.style.textDecoration = "underline";
    }
}

setInterval(function(){
    console.log("tik...")
    time += 1;
    
    if(time >= 60 * 60) {
        console.log("Time is out!")
        return
    }
    
    let timeLeft = 60 * 60 - time
    
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    timerEL.innerText = minutes + ":"  + seconds
    
    console.log(minutes + "m "  + seconds + "s")
    
}, 1000)