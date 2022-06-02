document.addEventListener('DOMContentLoaded', (event) => {
    let startStop = document.getElementById('startStop')
    let resetBtn = document.getElementById('reset')
    let laps = document.getElementById('laps')
    let chrono = document.getElementById('chrono')
    
    let hrs = document.getElementById('heures')
    let miliscds = document.getElementById('milisecondes')
    let secdes = document.getElementById('secondes')
    let mins = document.getElementById('minutes')

    let ul = document.createElement('ul')
    
    let heures = 0
    let minutes = 0
    let secondes = 0
    let milisecondes = 0

    let intervalMiliseconde
    let intervalSeconde
    let intervalMinute
    let intervalHeure

    value = false
    
   startStop.addEventListener('click', (e) => {
        
        if (value == false) {
            start()
            value = true
        }
        else if (value == true) {
            stop()
            value = false
        }
     })

    resetBtn.addEventListener('click', (e) => {
        reset()
        value = false
    })

    laps.addEventListener('click', (e) => {
        let hr = document.getElementById('heures')
        let min = document.getElementById('minutes')
        let secde = document.getElementById('secondes')
        let miliscd = document.getElementById('milisecondes')        
        let li = document.createElement('li')        

        li.innerHTML = hr.innerHTML + 'H ' + min.innerHTML + 'Min ' + secde.innerHTML + 'S ' + miliscd.innerHTML + 'Mls '        
        ul.append(li)
        chrono.append(ul)
    })
   

    function start() {
        intervalMiliseconde = setInterval(miliseconde, 1)
        intervalSeconde = setInterval(seconde, 1000)
        intervalMinute = setInterval(minute, 60000)
        intervalHeure = setInterval(heure, 3600000)
    }

   

    function miliseconde() {
        if (milisecondes == 1000) 
            milisecondes = 0
        milisecondes += 1
        if (milisecondes < 10) 
            miliscds.innerHTML = '0'+ milisecondes
        else 
            miliscds.innerHTML = milisecondes
        
    }

    function seconde() {
       
        secondes += 1
        if (secondes < 10) {            
            secdes.innerHTML = '0'+ secondes
        }
        else {
            if (secondes == 60) {
                secondes = 0
                secdes.innerHTML = '0'+ secondes 
            }   
            else
                secdes.innerHTML = secondes                   
        }
                
    }

    function minute() {
        if (minutes == 60)           
            minutes = 0
        minutes += 1
        if (minutes < 10) 
            mins.innerHTML = '0'+ minutes 
        else 
            mins.innerHTML = minutes
          
    }

    function heure() {
        if (heures == 24) 
            heures = 0
        heures += 1
        if (heures < 10) 
            hrs.innerHTML = '0' + heures
        else 
            hrs.innerHTML = heures
        
    }

   

    function stop() {
        clearInterval(intervalMiliseconde)
        clearInterval(intervalSeconde)
        clearInterval(intervalMinute)
        clearInterval(intervalHeure)
    }

    function reset() {

        stop()

        //ul.localStorage.clear()

        heures = 0
        minutes = 0
        secondes = 0
        milisecondes = 0

        hrs.innerHTML = '0' + heures
        mins.innerHTML = '0'+ minutes
        secdes.innerHTML = '0'+ secondes
        miliscds.innerHTML = '0'+ milisecondes
    }
})

