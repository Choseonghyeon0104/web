document.addEventListener("DOMContentLoaded",()=>{

    //메뉴버튼을 누르면 header가 나오는 기능
    const btnMenu = document.querySelector(`.btn-menu`)
    const menuSmartHidden = document.querySelector(`.menu-smart-hidden`)
    const btnClose = document.querySelector(`.btn-close`)
    const gnbSmartList = document.querySelectorAll(`.gnb-smart>li`)

    btnMenu.addEventListener("click",()=>{
        menuSmartHidden.classList.add(`on`)
    })
    btnClose.addEventListener("click",()=>{
        menuSmartHidden.classList.remove(`on`)
        gnbSmartList.forEach(tag=>tag.classList.remove(`on`))
    })

    //모바일에서 2뎁스 메뉴 나오는 기능
    const btnMore = document.querySelectorAll(`.gnb-smart .btn-more`)
    btnMore.forEach((span,i)=>{
        span.addEventListener("click",()=>{
            span.parentElement.classList.toggle(`on`)
        })
    })
})