import {
    botaoAtivarDarkMode,
    botaoDesativarDarkMode,
    toggleDay,
    toggleDark
} from "./elements.js"

export default function(){
    botaoAtivarDarkMode.addEventListener('click', function(){
        botaoAtivarDarkMode.classList.add('ativar-dark-mode');
        botaoDesativarDarkMode.classList.remove('desativar-dark-mode');
        setTimeout(()=>{
          changeDayForDark()

        },1000);
    })
    botaoDesativarDarkMode.addEventListener('click', function(){
        botaoDesativarDarkMode.classList.add('desativar-dark-mode');
        botaoAtivarDarkMode.classList.remove('ativar-dark-mode');
        setTimeout(()=>{
          changeDarkForDay()
        },1000);
    })
    

    function changeDayForDark(){
        toggleDay.classList.add('hide')
        toggleDark.classList.remove('hide')
    }
    function changeDarkForDay(){
        toggleDark.classList.add('hide')
        toggleDay.classList.remove('hide')
    }    
}
    