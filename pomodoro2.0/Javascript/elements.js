
const cardFlorest = document.querySelector('.cardFlorestPadrao');
const cardRain = document.querySelector('.cardRainPadrao');
const cardCoffe = document.querySelector('.cardCoffePadrao');
const cardFireplace = document.querySelector('.cardFireplacePadrao');

const cardFlorestChecked = document.querySelector('.cardFlorestChecked');
const cardRainChecked = document.querySelector('.cardRainChecked');
const cardCoffeChecked = document.querySelector('.cardCoffeChecked');
const cardFireplaceChecked = document.querySelector('.cardFireplaceChecked');

const cardImageFlorest = document.querySelector("#cardImageFlorest")
const cardImageFlorestChecked = document.querySelector("#cardImageFlorestChecked")
const cardImageRain = document.querySelector("#cardImageRain")
const cardImageRainChecked = document.querySelector("#cardImageRainChecked")
const cardImageCoffe = document.querySelector("#cardImageCoffe")
const cardImageCoffeChecked = document.querySelector("#cardImageCoffeChecked")
const cardImageFirePlace = document.querySelector("#cardImageFirePlace")
const cardImageFirePlaceChecked = document.querySelector("#cardImageFirePlaceChecked")

const buttonPlay = document.querySelector('.botaoPlay')
const buttonPause = document.querySelector('.botaoPause')
const buttonStop = document.querySelector('.botaoStop')
const buttonAumentarTempo = document.querySelector('.botaoAumentarTempo')
const buttonDiminuirTempo = document.querySelector('.botaoDiminuirTempo')
const separadorTemporizador = document.querySelector('.separadorTimer')

const botaoAtivarDarkMode = document.querySelector('.button-sol')
const botaoDesativarDarkMode = document.querySelector('.button-lua')
const toggleDay = document.querySelector('.sol')
const toggleDark = document.querySelector('.lua')


const imgPlay = document.querySelector('.botaoPlay svg path')
const imgPause = document.querySelector('.botaoPause svg path')
const imgPausePath2 = document.querySelector('.botaoPause svg :nth-child(2)')
const imgStop = document.querySelector('.botaoStop svg path')
const imgIncreaseDisplay = document.querySelector('.botaoAumentarTempo svg path')
const imgTurnDownDisplay = document.querySelector('.botaoDiminuirTempo svg path')

const florestRangeVolume = document.querySelector('.florestRange')
const rainRangeVolume = document.querySelector('.rainRange')
const coffeRangeVolume = document.querySelector('.coffeRange')
const fireplaceRangeVolume  =  document.querySelector('.firePlaceRange')

export {
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
    separadorTemporizador,
    imgPlay,
    imgPause,
    imgPausePath2,
    imgIncreaseDisplay,
    imgTurnDownDisplay,
    imgStop,
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
   
}