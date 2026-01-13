const hourHand = document.querySelector('.hand-hour-hand')
const minuteHand = document.querySelector('.hand-minute-hand')
const secondHand = document.querySelector('.hand-second-hand')

/*
function hourMove(){
    const hour = timeCalc('hour');
    
    hourHand.style.transform = `rotate(${hour}deg)`
    console.log('moved')
}

function minuteMove () {
    const minute = timeCalc('minute');
    
    minuteHand.style.transform = `rotate(${minute}deg)`
    console.log('moved')
}

function secondMove() {
    const second = timeCalc('second');
    
    secondHand.style.transform = `rotate(${second}deg)`
    console.log('moved')
}

Shaved off this, as multiple functions and setinterval is easier with singular function

*/

function updateHands() {
    
    const second = timeCalc('second');
    const minute = timeCalc('minute');
    const hour = timeCalc('hour');
// why does it freak out when hitting 12
    secondHand.style.transform = `rotate(${second}deg)`
    minuteHand.style.transform = `rotate(${minute}deg)`
    hourHand.style.transform =  `rotate(${hour}deg)`

}


//getting messy: focus on how IF funciton works, how to seperate
// it out the move onto how to pass variable

function timeCalc(handType) {
    const now = new Date()
//handtype here acts as a coinslot just taking one and outputting & so fourth 
   
    if (handType === 'second') {
        return (now.getSeconds() / 60) * 360; 
    }

    if (handType === 'minute') {
        return (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6;
        //finds fraction of second inbetween minutes and moves clock accordingly
        //making for accurate display of time 
        
    }

     if (handType === 'hour') {
        return (now.getHours() % 12 / 12) * 360 + (now.getMinutes() / 60) * 30; 
        // finds percentage of hours to translate into degrees & does the same as above
        // with making accurate display of time
    }

}

setInterval(updateHands, 1000)