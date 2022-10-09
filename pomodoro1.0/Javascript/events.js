import{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncreaseDisplay,
    buttonTurnDownDisplay,
    cardFlorest,
    cardRain,
    cardCoffe,
    cardFireplace,
    cardFlorestChecked,
    cardRainChecked,
    cardCoffeChecked,
    cardFireplaceChecked,
    botaoAtivarDarkMode,
    botaoDesativarDarkMode,
    toggleDay,
    toggleDark,
    separadorMinutos,
    body,
    imgPlay,
    imgPause,
    imgIncreaseDisplay,
    imgTurnDownDisplay,
    imgPausePath2,
    svgFlorest,
    svgRain,
    svgCoffe,
    svgFireplace,
    inputFlorest,
    inputRain,
    inputCoffe,
    inputFireplace,
    inputFlorestChecked,
    inputRainChecked,
    inputCoffeChecked,
    inputFireplaceChecked


    
} from "./elements.js"

import {
    countDown,
    displayTimerPause,
    displayClear,
    aumentarTempo,
    diminuirTempo,
    minutesDisplay,
    secondsDisplay
} from "./timer.js"

import sounds from "./sounds.js"

const Sounds = sounds()

export default function(){
//Eventos timer buttons:
buttonPlay.addEventListener('click', function(){
    countDown()
    
    buttonPause.classList.remove('hide')
    buttonStop.classList.add('hide')
})

buttonPause.addEventListener('click', function(){
    displayTimerPause()
    
    buttonPause.classList.add('hide')
    buttonStop.classList.remove('hide')
})

buttonStop.addEventListener('click', function(){
    displayClear()

    buttonPause.classList.remove('hide')
    buttonStop.classList.add('hide')
})

buttonIncreaseDisplay.addEventListener('click', function(){
    aumentarTempo()
})

buttonTurnDownDisplay.addEventListener('click', function(){
    diminuirTempo()
})

//Eventos Template cards:
cardFlorest.addEventListener('click',function(){
    cardFlorest.classList.add('hide')
    cardFlorestChecked.classList.remove('hide')
    
    Sounds.florestModePlay()
   
    cardRain.classList.remove('hide')
    cardCoffe.classList.remove('hide')
    cardFireplace.classList.remove('hide')

    cardRainChecked.classList.add('hide')
    cardCoffeChecked.classList.add('hide')
    cardFireplaceChecked.classList.add('hide')
})
cardFlorestChecked.addEventListener('click',function(){
    cardFlorest.classList.remove('hide')
    cardFlorestChecked.classList.add('hide')
    Sounds.florestModePause()
})

cardRain.addEventListener('click',function(){
    cardRain.classList.add('hide')
    cardRainChecked.classList.remove('hide')

    Sounds.rainModePlay()
    
    cardFlorest.classList.remove('hide')
    cardCoffe.classList.remove('hide')
    cardFireplace.classList.remove('hide')

    cardFlorestChecked.classList.add('hide')
    cardCoffeChecked.classList.add('hide')
    cardFireplaceChecked.classList.add('hide')
})
cardRainChecked.addEventListener('click',function(){
    cardRain.classList.remove('hide')
    cardRainChecked.classList.add('hide')
    Sounds.rainModePause()
})

cardCoffe.addEventListener('click',function(){
    cardCoffe.classList.add('hide')
    cardCoffeChecked.classList.remove('hide')

    Sounds.coffeModePlay()
    
    cardFlorest.classList.remove('hide')
    cardRain.classList.remove('hide')
    cardFireplace.classList.remove('hide')

    cardFlorestChecked.classList.add('hide')   
    cardRainChecked.classList.add('hide')
    cardFireplaceChecked.classList.add('hide')
})
cardCoffeChecked.addEventListener('click',function(){
    
    cardCoffe.classList.remove('hide')
    cardCoffeChecked.classList.add('hide')
    Sounds.coffeModePause()
})

cardFireplace.addEventListener('click',function(){
    cardFireplace.classList.add('hide')
    cardFireplaceChecked.classList.remove('hide')
    
    Sounds.fireplaceModePlay()

    cardFlorest.classList.remove('hide')
    cardRain.classList.remove('hide')
    cardCoffe.classList.remove('hide')
    
    cardFlorestChecked.classList.add('hide')
    cardRainChecked.classList.add('hide')
    cardCoffeChecked.classList.add('hide')
    
})

cardFireplaceChecked.addEventListener('click',function(){
    cardFireplace.classList.remove('hide')
    cardFireplaceChecked.classList.add('hide')
    Sounds.fireplaceModePause()
})

botaoAtivarDarkMode.addEventListener('click', function(){
   
    styleChangeDark()
        
    
}) 
botaoDesativarDarkMode.addEventListener('click', function(){
    styleChageLight()
   
})

function styleChangeDark(){

 setTimeout(
    function(){
        minutesDisplay.style.cssText = 
            'color: white;' 
        ;
        secondsDisplay.style.cssText = 
            'color: white;' 
        ;
        separadorMinutos.style.cssText = 
            'color: white;' 
        ;
        body.style.cssText =
            'background: #121214;'
        ;
        imgPlay.style.cssText =
            'fill:#ffffff;'
        ;    
        imgPause.style.cssText =
            'fill:#ffffff;'
        ;
        imgPausePath2.style.cssText =
            'fill:#ffffff;'
        ; 
        imgIncreaseDisplay.style.cssText =
            'fill:#ffffff;'
        ;  
        imgTurnDownDisplay.style.cssText =
            'fill:#ffffff;'
        ;
        cardFlorest.style.cssText =
            'background:#29292E;'
        ;
        svgFlorest.style.cssText =
            'fill:#C4C4CC;'
        ;
        cardRain.style.cssText =
            'background:#29292E;'
        ;
        svgRain.style.cssText =
            'fill:#C4C4CC;'
        ;
        cardCoffe.style.cssText =
            'background:#29292E;'
        ;
        svgCoffe.style.cssText =
            'fill:#C4C4CC;'
        ;
        cardFireplace.style.cssText =
            'background:#29292E;'
        ;
        svgFireplace.style.cssText =
            'fill:#C4C4CC;'
        ;
        cardFlorestChecked.style.cssText =
            'background:#0A3442;'
        ;  
        cardRainChecked.style.cssText =
            'background:#0A3442;'
        ;
        cardCoffeChecked.style.cssText =
            'background:#0A3442;'
        ;
        cardFireplaceChecked.style.cssText =
            'background:#0A3442;'
        ;   
        inputFlorest.classList.add('hide')
        inputFlorestChecked.classList.remove('hide')
        inputRain.classList.add('hide')
        inputRainChecked.classList.remove('hide') 
        inputCoffe.classList.add('hide')
        inputCoffeChecked.classList.remove('hide') 
        inputFireplace.classList.add('hide')
        inputFireplaceChecked.classList.remove('hide')    
          
       
    }, 1000) 
}

function styleChageLight(){ 
    setTimeout(
        function(){
            minutesDisplay.style.cssText = 
            'color: rgba(50, 50, 56, 100%);' 
            ;
            secondsDisplay.style.cssText = 
            'color: rgba(50, 50, 56, 100%);' 
            ;
            separadorMinutos.style.cssText = 
            'color: rgba(50, 50, 56, 100%);' 
            ;
            body.style.cssText =
            'background: #ffffff;'
            ;
            imgPlay.style.cssText =
            'fill:rgba(50, 50, 56, 100%);'
            ;    
            imgPause.style.cssText =
            'fill:rgba(50, 50, 56, 100%);'
            ;
            imgPausePath2.style.cssText =
            'fill:rgba(50, 50, 56, 100%);'
            ; 
            imgIncreaseDisplay.style.cssText =
            'fill:rgba(50, 50, 56, 100%);'
            ;  
            imgTurnDownDisplay.style.cssText =
            'fill:rgba(50, 50, 56, 100%);'
            ;
            cardFlorest.style.cssText =
            'background:#E1E1E6;'
            ;
            svgFlorest.style.cssText =
                'fill:#323238;'
            ;
            cardRain.style.cssText =
                'background:#E1E1E6;'
            ;
            svgRain.style.cssText =
                'fill:#323238;'
            ;
            cardCoffe.style.cssText =
                'background:#E1E1E6;'
            ;
            svgCoffe.style.cssText =
                'fill:#323238;'
            ;
            cardFireplace.style.cssText =
                'background:#E1E1E6;'
            ;
            svgFireplace.style.cssText =
                'fill:#323238;'
            ;
            cardFlorestChecked.style.cssText =
                'background:#02799D'
            ;  
            cardRainChecked.style.cssText =
                'background:#02799D'
            ;
            cardCoffeChecked.style.cssText =
                'background:#02799D'
            ;
            cardFireplaceChecked.style.cssText =
                'background:#02799D'
            ;  
            inputFlorest.classList.remove('hide')
            inputFlorestChecked.classList.add('hide')
            inputRain.classList.remove('hide')
            inputRainChecked.classList.add('hide') 
            inputCoffe.classList.remove('hide')
            inputCoffeChecked.classList.add('hide') 
            inputFireplace.classList.remove('hide')
            inputFireplaceChecked.classList.add('hide')  
        }    , 1000)}
}      

