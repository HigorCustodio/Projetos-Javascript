
import{
    cardFlorest,
    cardFlorestChecked,
    cardRain,
    cardRainChecked,
    cardCoffe,
    cardCoffeChecked,
    cardFireplace,
    cardFireplaceChecked,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAumentarTempo,
    buttonDiminuirTempo,
    botaoAtivarDarkMode,
    botaoDesativarDarkMode,
    toggleDay,
    toggleDark,
    florestRangeVolume,
    rainRangeVolume,
    coffeRangeVolume,
    fireplaceRangeVolume,
    cardImageFlorest,
    cardImageFlorestChecked,
    cardImageRain,
    cardImageRainChecked,
    cardImageCoffe,
    cardImageCoffeChecked,
    cardImageFirePlace,
    cardImageFirePlaceChecked
   
} from "./elements.js"

import {
    florestFirstAction,
    florestSecondAction,
    rainFirstAction,
    rainSecondAction,
    coffeFirstAction,
    coffeSecondAction,
    fireplaceFirstAction,
    fireplaceSecondAction,
    styleChangeDark,
    styleChageLight,
    
    
} from "./functions.js"

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
// Eventos dos controladores do Timer    
buttonPlay.addEventListener('click', function(){
    countDown()
    Sounds.pressButton()

    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
})
buttonPause.addEventListener('click', function(){
    displayTimerPause()
    Sounds.pressButton()
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})
buttonStop.addEventListener('click', function(){
    displayClear()
    Sounds.pressButton()
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})
buttonAumentarTempo.addEventListener('click', function(){
    aumentarTempo()
    Sounds.pressButton()
})
buttonDiminuirTempo.addEventListener('click', function(){
    diminuirTempo()
    Sounds.pressButton()
})

// Eventos dos controladores dos Cards
cardImageFlorest.addEventListener('click',function(){
    florestFirstAction()
    Sounds.florestModePlay()
    Sounds.pressButton()
    
  
})
cardImageFlorestChecked.addEventListener('click', function(){
    florestSecondAction()
    Sounds.florestModePause()
    Sounds.pressButton()

    
})
cardImageRain .addEventListener('click',function(){
    rainFirstAction()
    Sounds.rainModePlay()
    Sounds.pressButton()
})
cardImageRainChecked.addEventListener('click', function(){
    rainSecondAction()
    Sounds.rainModePause()
    Sounds.pressButton()
})
cardImageCoffe.addEventListener('click', function(){
    coffeFirstAction()
    Sounds.coffeModePlay()
    Sounds.pressButton()
})
cardImageCoffeChecked.addEventListener('click', function(){
    coffeSecondAction()
    Sounds.coffeModePause()
    Sounds.pressButton()
})
cardImageFirePlace.addEventListener('click',function(){
    fireplaceFirstAction()
    Sounds.fireplaceModePlay()
    Sounds.pressButton()
})
cardImageFirePlaceChecked.addEventListener('click', function(){
    fireplaceSecondAction()
    Sounds.fireplaceModePause()
    Sounds.pressButton()
})

//Dark Mode
botaoAtivarDarkMode.addEventListener('click', function(){
    styleChangeDark()  
    Sounds.pressButton()    
}) 
botaoDesativarDarkMode.addEventListener('click', function(){
    styleChageLight()
    Sounds.pressButton()
})

//Volume
florestRangeVolume.addEventListener('input', function(){
    Sounds.setFlorestRangeVolume(florestRangeVolume.value)
   
})
rainRangeVolume.addEventListener('input', function(){
    Sounds.setRainRangeVolume(rainRangeVolume.value)
    
})
coffeRangeVolume.addEventListener('input', function(){
    Sounds.setCoffeRangeVolume(coffeRangeVolume.value)
    
})
fireplaceRangeVolume.addEventListener('input', function(){
    Sounds.setFireplaceRangeVolume(fireplaceRangeVolume.value)
    
})

return{
    cardFlorest,
    cardRain,
    cardCoffe,
    cardFireplace,
    cardFlorestChecked,
    cardRainChecked,
    cardCoffeChecked,
    cardFireplaceChecked,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAumentarTempo,
    buttonDiminuirTempo,
    
}

}
