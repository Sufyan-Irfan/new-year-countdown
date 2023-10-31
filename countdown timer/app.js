let daysItem = document.querySelector("#days")
let minutesItem = document.querySelector("#minutes")
let hoursItem = document.querySelector("#hours")
let secondsItem = document.querySelector("#seconds")

let countdown = () => {
    let futuredate = new Date("1 jan 2024")
    let currentDate = new Date()
    let myDate = futuredate - currentDate
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24 )

    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24

    let mins = Math.floor(myDate / 1000 / 60 ) % 60

    let secs = Math.floor(myDate / 1000) % 60

    daysItem.innerHTML = days
    hoursItem.innerHTML = hours
    minutesItem.innerHTML = mins
    secondsItem.innerHTML = secs
}
countdown()

setInterval(countdown , 1000)