'use strict'

function onBallClicked(elBall) {
    if (elBall.offsetHeight < 400) {
        elBall.style.width = `${elBall.offsetWidth + 50}px`
        elBall.style.height = `${elBall.offsetHeight + 50}px`
        elBall.innerText = elBall.offsetWidth + 50
    }
    else {
        elBall.style.width = `100px`
        elBall.style.height = `100px`
        elBall.innerText = 100
    }

}