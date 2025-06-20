'use strict'

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
            while (elBalls[i].offsetHeight - randNum < 100) {
                randNum = getRandomInt(0, 61)
            }
            elBalls[i].style.width = `${elBalls[i].offsetWidth - randNum}px`
            elBalls[i].style.height = `${elBalls[i].offsetHeight - randNum}px`
            elBalls[i].innerText = elBalls[i].offsetWidth - randNum
        } else continue
    }

}