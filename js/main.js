'use strict'

var gTimeInterval
var gCyclesCounter = 0

var gGame = {
    balls: [{ size: 100, color: 'green' }, { size: 100, color: 'gold' }],
}

var gHistoryGame = []
var gHistoryUndoGame = []

function onUndoClicked() {

    const lastGGame = gHistoryGame.pop()
    gGame.balls[0].size = lastGGame[0].size
    gGame.balls[1].size = lastGGame[1].size
    renderGame(lastGGame)
}

function onRedoClicked() {

    const lastGGame = gHistoryUndoGame.pop()
    renderGame(lastGGame)

}

function renderGame(lastGGame) {
    const elBalls = document.querySelectorAll('.ball')
    for (var i = 0; i < 2; i++) {
        elBalls[i].style.width = `${lastGGame[i].size}px`
        elBalls[i].style.height = `${lastGGame[i].size}px`
    }
    // document.body.style.backgroundColor = gGame.backgroundColor
}

function updateGameData() {
    const elBalls = document.querySelectorAll('.ball')
    for (var i = 0; i < 2; i++) {
        gGame.balls[i].size = elBalls[i].offsetHeight
        console.log('elBalls[i].offsetHeight', elBalls[i].offsetHeight)
        gGame.balls[i].color = elBalls[i].style.color
    }
    gGame.backgroundColor = document.body.style.backgroundColor
}

const maxDiameter = [400, 300]

function onBallClicked(elBall, maxDiameter) {
    const randNum = getRandomInt(20, 61)
    const randColor = getRandomColor()
    elBall.style.backgroundColor = randColor
    if (elBall.offsetHeight < maxDiameter && elBall.offsetHeight + randNum < maxDiameter) {
        elBall.style.width = `${elBall.offsetWidth + randNum}px`
        elBall.style.height = `${elBall.offsetHeight + randNum}px`
        elBall.innerText = elBall.offsetWidth + randNum
    }
    else {
        elBall.style.width = `100px`
        elBall.style.height = `100px`
        elBall.innerText = 100
    }

    updateGameData()
    saveGameState()


}

function saveGameState() {

    const lastGameState = [
        { size: gGame.balls[0].size },
        { size: gGame.balls[1].size }
    ]
    gHistoryGame.push(lastGameState)
}

function onSpecialBallClicked(elSpecial) {
    const elBalls = document.querySelectorAll('.ball')
    for (var i = 0; i < elBalls.length; i++) {
        onBallClicked(elBalls[i], maxDiameter[i])
    }
}

function onReducerClicked(elReducer) {

    const elBalls = document.querySelectorAll('.ball')
    var randNum = getRandomInt(20, 61)
    for (var i = 0; i < elBalls.length; i++) {
        if (elBalls[i].offsetHeight > 100) {
            gHistoryGame.push(gGame)
            while (elBalls[i].offsetHeight - randNum < 100) {
                randNum = getRandomInt(0, 61)
            }
            elBalls[i].style.width = `${elBalls[i].offsetWidth - randNum}px`
            elBalls[i].style.height = `${elBalls[i].offsetHeight - randNum}px`
            elBalls[i].innerText = elBalls[i].offsetWidth - randNum
            updateGameData()
        } else continue
    }

}

function onChangeColorClicked() {
    const randColor = getRandomColor()
    document.body.style.backgroundColor = randColor
    updateGameData()
}

function onResetClicked() {
    const elBalls = document.querySelectorAll('.ball')
    for (var i = 0; i < elBalls.length; i++) {
        elBalls[i].style.width = `100px`
        elBalls[i].style.height = `100px`
        elBalls[i].innerText = '100'
    }
    document.body.style.backgroundColor = 'black'
}

function onHoverReset() {

    gTimeInterval = setInterval(activateAll4, 2000)

}

function activateAll4() {
    if (gCyclesCounter < 10) {
        const elBalls = document.querySelectorAll('.ball')
        for (var i = 0; i < elBalls.length; i++) {
            onBallClicked(elBalls[i], maxDiameter[i])
        }
        onSpecialBallClicked()
        onReducerClicked()
        gCyclesCounter++
    } else {
        onMouseLeaveReset()
    }

}

function onMouseLeaveReset() {
    clearInterval(gTimeInterval)
    gCyclesCounter = 0
}