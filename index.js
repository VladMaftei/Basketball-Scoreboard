let homeScore = 0
let guestScore = 0
let homeScoreDisplay = document.getElementById("homeScoreEl")
let guestScoreDisplay = document.getElementById("guestScoreEl")

function highlightLeader() {
    let homeLeader = document.querySelector("#homeScoreCard")
    let guestLeader = document.querySelector("#guestScoreCard")
    if (homeScore > guestScore) {
        homeLeader.style.cssText = 'border: 2px solid gold'
        guestLeader.style.cssText = 'border: none'
    } else if (homeScore < guestScore) {
        guestLeader.style.cssText = 'border: 2px solid gold'
        homeLeader.style.cssText = 'border: none'
    } else {
        homeLeader.style.cssText = 'border: none'
        guestLeader.style.cssText = 'border: none'
    }
}

function homePlusOne() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
    highlightLeader()
}

function homePlusTwo() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
    highlightLeader()
}

function homePlusThree() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
    highlightLeader()
}

function guestPlusOne() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
    highlightLeader()
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
    highlightLeader()
}

function guestPlusThree() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
    highlightLeader()
}

function scoreReset() {
    homeScore = 0
    guestScore = 0
    homeScoreDisplay.textContent = homeScore
    guestScoreDisplay.textContent = guestScore
    highlightLeader()
}

