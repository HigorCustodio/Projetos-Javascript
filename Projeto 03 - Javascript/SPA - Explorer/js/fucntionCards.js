const btnArrowRight = document.querySelector('.btn-arrow-right-universe')
const btnArrowLeft = document.querySelector('.btn-arrow-left-universe')

function trocarSeletoresBtnRight(){
    document.documentElement.style.setProperty('--displayBtnRight','none')
    document.documentElement.style.setProperty('--displayBtnLeft','flex')
}
function trocarSeletoresBtnLeft(){
     document.documentElement.style.setProperty('--displayBtnRight','flex')
     document.documentElement.style.setProperty('--displayBtnLeft','none')
}
