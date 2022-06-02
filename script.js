document.addEventListener('DOMContentLoaded', (event) => {

    let degree = 6

    let heure = document.getElementById('heure')
    let minute = document.getElementById('minute')
    let seconde = document.getElementById('seconde')

    
    // horloge à aiguille
   
    //setInterval permet de répéter l'action
    setInterval(() => {
        
        let day = new Date()

        let hr = day.getHours() * 30
        let min = day.getMinutes() * degree   
        let sec = day.getSeconds() * degree
    
        heure.style.transform = `rotateZ(${hr + (min/12)}deg)`
        minute.style.transform = `rotateZ(${min}deg)`
        seconde.style.transform = `rotateZ(${sec}deg)`
    })

    // horloge numériique

    setInterval(() => {
        let times = new Date()
        let hrs =  times.getHours()
        let mins = times.getMinutes()
        let scds =  times.getSeconds()
    
        document.getElementById('hr').innerHTML = hrs
        document.getElementById('min').innerHTML = mins
        document.getElementById('sc').innerHTML = scds

    })  
    

})