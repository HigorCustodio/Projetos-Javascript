
import { minutesDisplay, secondsDisplay } from "./timer.js";
import{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAumentarTempo,
    buttonDiminuirTempo,
    botaoAtivarDarkMode,
    botaoDesativarDarkMode,
    toggleDay,
    toggleDark,
    separadorTemporizador,
    cardFlorest,
    cardFlorestChecked,
    cardRain,
    cardRainChecked,
    cardCoffe,
    cardCoffeChecked,
    cardFireplace,
    cardFireplaceChecked,
      
} from "./elements.js";

import sounds from "./sounds.js";
const Sounds = sounds()



function florestFirstAction(){
    cardFlorest.classList.add('hide')
    cardFlorestChecked.classList.remove('hide')
    
    cardRain.classList.remove('hide')
    cardCoffe.classList.remove('hide')
    cardFireplace.classList.remove('hide')
    
    cardRainChecked.classList.add('hide')
    cardCoffeChecked.classList.add('hide')
    cardFireplaceChecked.classList.add('hide')
}    
function florestSecondAction(){
    cardFlorest.classList.remove('hide')
    cardFlorestChecked.classList.add('hide')
}
function rainFirstAction(){
    cardRain.classList.add('hide')
    cardRainChecked.classList.remove('hide')
    
    cardFlorest.classList.remove('hide')
    cardCoffe.classList.remove('hide')
    cardFireplace.classList.remove('hide')

    cardFlorestChecked.classList.add('hide')
    cardCoffeChecked.classList.add('hide')
    cardFireplaceChecked.classList.add('hide')
}
function rainSecondAction(){
    cardRain.classList.remove('hide')
    cardRainChecked.classList.add('hide')    
}
function coffeFirstAction(){
    cardCoffe.classList.add('hide')
    cardCoffeChecked.classList.remove('hide')
    
    cardFlorest.classList.remove('hide')
    cardRain.classList.remove('hide')
    cardFireplace.classList.remove('hide')

    
    cardRainChecked.classList.add('hide')
    cardFlorestChecked.classList.add('hide')
    cardFireplaceChecked.classList.add('hide')
}
function coffeSecondAction(){
    cardCoffe.classList.remove('hide')
    cardCoffeChecked.classList.add('hide')
}
function fireplaceFirstAction(){
    cardFireplace.classList.add('hide')
    cardFireplaceChecked.classList.remove('hide')
    
    cardFlorest.classList.remove('hide')
    cardRain.classList.remove('hide')
    cardCoffe.classList.remove('hide')

    
    cardRainChecked.classList.add('hide')
    cardFlorestChecked.classList.add('hide')
    cardCoffeChecked.classList.add('hide')
}
function fireplaceSecondAction(){
    cardFireplace.classList.remove('hide')
    cardFireplaceChecked.classList.add('hide')
}
function styleChangeDark(){
    setTimeout(
        function(){
            document.documentElement.style.setProperty('--bg-body','#121214')
            document.documentElement.style.setProperty('--color-text','#ffffff')            
            document.documentElement.style.setProperty('--color-icons-buttons-template-modes','#C4C4CC')
            document.documentElement.style.setProperty('--bg-cards','#29292E')
            document.documentElement.style.setProperty('--bd-cards-checked','#0A3442');
            document.documentElement.style.setProperty('--bg-darkMode', '#ffffff');
            document.documentElement.style.setProperty('--bg-svg-card', '#ffffff');
        }
    ,1000)
}  
function styleChageLight(){
    setTimeout(
        function(){
            document.documentElement.style.setProperty('--bg-body','#ffffff')
            document.documentElement.style.setProperty('--color-text','rgba(50, 50, 56, 100%)')            
            document.documentElement.style.setProperty('--color-icons-buttons-template-modes','rgba(50, 50, 56, 100%)')
            document.documentElement.style.setProperty('--bg-cards','#E1E1E6')
            document.documentElement.style.setProperty('--bd-cards-checked','#02799D');
            document.documentElement.style.setProperty('--bg-darkMode', '#323238');
            document.documentElement.style.setProperty('--bg-svg-card', '#323238');
        }
    ,1000)
}


export {
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
    
   
}