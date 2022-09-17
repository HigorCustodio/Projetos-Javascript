
//Utilizando a DOM (Document Object Model): "Procure no meu documento o seletor css:(seletor-css)"
const buttonPlay = document.querySelector('.buttonPlay')
const buttonPause = document.querySelector('.buttonPause')
const buttonStop = document.querySelector('.buttonStop')
const buttonIncreaseDisplay = document.querySelector('.buttonIncreaseDisplay')
const buttonTurnDownDisplay = document.querySelector('.buttonTurnDownDisplay')


const cardFlorest = document.querySelector('.button-florest')
const cardRain = document.querySelector('.button-rain')
const cardCoffe = document.querySelector('.button-coffe')
const cardFireplace = document.querySelector('.button-fireplace')

const cardFlorestChecked = document.querySelector('.button-florest-checked')
const cardRainChecked= document.querySelector('.button-rain-checked')
const cardCoffeChecked = document.querySelector('.button-coffe-checked')
const cardFireplaceChecked = document.querySelector('.button-fireplace-checked')

const botaoAtivarDarkMode = document.querySelector('.button-sol')
const botaoDesativarDarkMode = document.querySelector('.button-lua')
const toggleDay = document.querySelector('.sol')
const toggleDark = document.querySelector('.lua')

const separadorMinutos = document.querySelector('.separadorMinutos')
const body = document.querySelector('.body')

const imgPlay = document.querySelector('.buttonPlay svg path')
const imgPause = document.querySelector('.buttonPause svg path')
const imgPausePath2 = document.querySelector('.buttonPause svg :nth-child(2)')
const imgIncreaseDisplay = document.querySelector('.buttonIncreaseDisplay svg path')
const imgTurnDownDisplay = document.querySelector('.buttonTurnDownDisplay svg path')

const svgFlorest = document.querySelector('.svg-florest svg path')
const svgRain = document.querySelector('.svg-rain svg path')
const svgCoffe = document.querySelector('.svg-coffe svg path')
const svgFireplace = document.querySelector('.svg-fireplace svg path')


export{

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
    
}