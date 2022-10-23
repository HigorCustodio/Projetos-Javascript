import { 
    explorationNav,
    homeNav,
    universeNav,
} from "./elements.js"

export function homeSelect(){
    homeNav.classList.add('titleSelect')
    universeNav.classList.remove('titleSelect')
    explorationNav.classList.remove('titleSelect') 
}
export function universeSelect(){
    homeNav.classList.remove('titleSelect')
    universeNav.classList.add('titleSelect')
    explorationNav.classList.remove('titleSelect') 
}   
export function explorationSelect(){
    universeNav.classList.remove('titleSelect')
    homeNav.classList.remove('titleSelect')
    explorationNav.classList.add('titleSelect')
}