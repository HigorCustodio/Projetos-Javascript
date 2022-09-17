
const minutesDisplay = document.querySelector('.minutesDisplay')
const secondsDisplay = document.querySelector('.secondsDisplay')

    let minutes = Number(minutesDisplay.textContent)
    let timerTimeOut
    let increment = 5
    let incrementMinutes

    //Funções para rodar o Play:
    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds

        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')

    }
    function countDown(){
       timerTimeOut = setTimeout(
            function() {
                let seconds = Number(secondsDisplay.textContent)
                let minutes = Number(minutesDisplay.textContent)

                if(seconds <= 0 ){
                    seconds = 60
                    --minutes
                }
                if(minutes >= 0){
                    updateDisplay(minutes, String(seconds - 1))
                }    
                countDown()

            }
        , 1000)
    }

    //Funções para rodar o Pause:
    function displayTimerPause(){
        clearTimeout(timerTimeOut)
    }

    //Funções para rodar o Stop:
    function displayClear(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    //Função para incrementar os minutos:
    function aumentarTempo(){
        if(minutesDisplay.textContent >= 0 && minutesDisplay.textContent < 60){
            incrementMinutes = Number(minutesDisplay.textContent) + Number(increment)
        }
        updateDisplay(incrementMinutes, 0)
    }

    //Função para decrementar os minutos:
    function diminuirTempo(){
        if(minutesDisplay.textContent > 5 ){
            incrementMinutes = Number(minutesDisplay.textContent) - Number(increment)
        }
        updateDisplay(incrementMinutes, 0)
    }

  export{
    countDown,
    displayTimerPause,
    displayClear,
    aumentarTempo,
    diminuirTempo,
    minutesDisplay,
    secondsDisplay
  }