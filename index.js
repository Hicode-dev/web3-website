// const counters = document.querySelectorAll('counter ');
// const speed = 200;
// // console.log('counters')
// counters.forEach(counter =>{
// const updateCount = () => {
//     const target = +counter.getAttribute('data-target');
//     // console.log(target);
//     const count = +counter.innerText;

//     const inc = target/speed;
//     console.log('inc')
// }
// updateCount();
// })


let day = document.getElementById("day")
let hour = document.getElementById("hour")
let minute = document.getElementById("min")
let second = document.getElementById("sec")

let days = 2
let hours = 15
let minutes = 10
let seconds = 59


console.log(seconds);


function sw() {
    second.innerHTML = seconds 
    minute.innerHTML = minutes 
    hour.innerHTML = hours 
    day.innerHTML = days 

        seconds--;
        console.log(seconds);
        if (seconds == 0) {
            seconds = 59
            minutes--;
            if (minutes == 0) {
                minutes = 10
                hours--;
            }  
}

}
setInterval(sw,1000);