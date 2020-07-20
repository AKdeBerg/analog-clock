const moveHands = () => {
    //get the DOM elements for hands
    const secondDiv = document.querySelector('.second-hand')
    const minDiv = document.querySelector('.min-hand')
    const hourDiv = document.querySelector('.hour-hand')


    //get the current time
    const now = new Date()

    //current second
    const second = now.getSeconds()
    //convert second to degree
    const secondRatio = second / 60
    const secondDegree = (secondRatio * 360) + 90
    //add the transform css style rotate
    secondDiv.style.transform = `rotate(${secondDegree}deg)`




    //current minute
    const min = now.getMinutes()
    //convert min to degree
    const minRatio = min / 60
    const minDegree = (minRatio * 360) + 90
    //add the transform css style rotate
    minDiv.style.transform = `rotate(${minDegree}deg)`


    //current hour
    const hour = now.getHours()
    //convert hour to degree
    const hourRatio = hour / 12
    const hourDegree = (hourRatio * 360) + 90
    //add the transform css style rotate
    hourDiv.style.transform = `rotate(${hourDegree}deg)`


    /********To fix the weird behaviour *******/
    if (secondDegree === 90) {
        secondDiv.classList.add('notransition'); // Disable transitions
        minDiv.classList.add('notransition'); // Disable transitions
        hourDiv.classList.add('notransition'); // Disable transitions
    }

    secondDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes
    minDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes
    hourDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes

    secondDiv.classList.remove('notransition'); // Re-enable transitions
    minDiv.classList.remove('notransition'); // Re-enable transitions
    hourDiv.classList.remove('notransition'); // Re-enable transitions

    /*********/
    /*The weird behaviour is - 
    when the second-hand goes to 444 degree, it then needs to start from 90 degree again. But to do that the second-hand goes backward direction
    which makes everything a bit shaky for a sec.
    Solution: to overcome this, I stopped the transition effect for the certain degree & re-add it after the degree changed.
    How to disable transition temporarily: https://stackoverflow.com/a/16575811/10238832*/

}

setInterval(moveHands, 1000)