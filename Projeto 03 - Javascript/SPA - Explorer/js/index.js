import { Router } from './router.js'
//import Events from './events.js'
import { homeSelect, universeSelect, explorationSelect } from './functions.js'
import { 
    homeNav,
    universeNav,
    explorationNav,
    dropdownHomeNav,
    dropdownUniverseNav,
    dropdownExplorationNav
} from "./elements.js"


const router = new Router()

router.add('/','/pages/home.html')
router.add('/universe','/pages/universe.html')
router.add('/exploration','/pages/exploration.html')
router.add(404,'/pages/home.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()


//Events()
dropdownHomeNav.addEventListener('click', function(){
    homeSelect()
    route() 
})
dropdownUniverseNav.addEventListener('click', function(){
    universeSelect()
    route()
})
dropdownExplorationNav.addEventListener('click', function(){
    explorationSelect()
    route()
})
homeNav.addEventListener('click', function(){
    homeSelect()
    route()
})
universeNav.addEventListener('click', function(){
    universeSelect()
    route()     
})
explorationNav.addEventListener('click', function(){
    explorationSelect()
    route()
})

  
   



