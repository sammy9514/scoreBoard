//Home score controls
let homeScore = document.getElementById("home-score")
let homeScoreEl1 = document.getElementById("home-score-1")
let homeScoreEl2 = document.getElementById("home-score-2")
let homeScoreEl3 = document.getElementById("home-score-3")
let home = 0

function increasehome1() {
    home += 1
    homeScore.textContent = home
}

function increasehome2() {
    home += 2
    homeScore.textContent = home
}

function increasehome3() {
    home += 3
    homeScore.textContent = home 
}

// Guest score controls

let guestScore = document.getElementById("guest-score")
let guestScore1 = document.getElementById("guest-score-1")
let guestScore2 = document.getElementById("guest-score-2")
let guestScore3 = document.getElementById("guest-score-3")
let guest = 0

function increaseguest1() {
    guest += 1
    guestScore.textContent = guest
}

function increaseguest2() {
    guest += 2
    guestScore.textContent = guest
}

function increaseguest3() {
    guest += 3
    guestScore.textContent = guest
}

//reset controls
let score = home + guest
function reset() {
    home = 0
    guest = 0
    homeScore.textContent = score
    guestScore.textContent = score
}
