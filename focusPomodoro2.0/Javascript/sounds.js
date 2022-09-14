export default function(){
    
    const florestSound = new Audio("/sounds/Floresta.wav")
    const rainSound = new Audio("/sounds/Chuva.wav")
    const coffeSound = new Audio("/sounds/Cafeteria.wav")
    const fireplaceSound = new Audio ("/sounds/Lareira.wav")
    


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
        fireplaceModePause
    }
}