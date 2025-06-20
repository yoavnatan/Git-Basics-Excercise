'use strict'

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