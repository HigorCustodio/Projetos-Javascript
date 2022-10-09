
import{
    florestRangeVolume,
    rainRangeVolume,
    coffeRangeVolume,
    fireplaceRangeVolume
} from "./elements.js"



export default function(){
    
    const florestSound = new Audio("/sounds/Floresta.wav")
    const rainSound = new Audio("/sounds/Chuva.wav")
    const coffeSound = new Audio("/sounds/Cafeteria.wav")
    const fireplaceSound = new Audio ("/sounds/Lareira.wav")
    
    const buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
    const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

    florestSound.loop = true
    rainSound.loop = true 
    coffeSound.loop = true
    fireplaceSound.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }
    
    function timeEnd() {
       kitchenTimer.play()
    }
           
    function setFlorestRangeVolume (florestRangeVolume) {
        florestSound.volume = florestRangeVolume / 100
    }
  
    function setRainRangeVolume (rainRangeVolume) {
        rainSound.volume = rainRangeVolume / 100
    }
    function setCoffeRangeVolume (coffeRangeVolume) {
        coffeSound.volume = coffeRangeVolume / 100
    }
    function setFireplaceRangeVolume (fireplaceRangeVolume) {
        fireplaceSound.volume = fireplaceRangeVolume / 100
    }

    function florestModePlay(){
        florestSound.play()
        rainSound.pause()
        coffeSound.pause()
        fireplaceSound.pause()
                
    }
    function rainModePlay(){
        rainSound.play()

        florestSound.pause()
        coffeSound.pause()
        fireplaceSound.pause()
    }
    function coffeModePlay(){
        coffeSound.play()
    
        florestSound.pause()
        rainSound.pause()
        fireplaceSound.pause()
    }
    function fireplaceModePlay(){
        fireplaceSound.play()
        
        florestSound.pause()
        rainSound.pause()
        coffeSound.pause()
    }
    function florestModePause(){
        florestSound.pause()
    }
    function rainModePause(){
        rainSound.pause()
    }
    function coffeModePause(){
        coffeSound.pause()
    }
    function fireplaceModePause(){
        fireplaceSound.pause()
    }
       

    return{
        florestModePlay,
        rainModePlay,
        coffeModePlay,
        fireplaceModePlay,
        florestModePause,
        rainModePause,
        coffeModePause,
        fireplaceModePause,
        setFlorestRangeVolume,
        setRainRangeVolume,
        setCoffeRangeVolume,
        setFireplaceRangeVolume,
        pressButton,
        timeEnd
    }
}