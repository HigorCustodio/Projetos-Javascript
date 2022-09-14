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
    cardFireplaceChecked
} from "./elements.js"

import {
    countDown,
    displayTimerPause,
    displayClear,
    aumentarTempo,
    diminuirTempo
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
}