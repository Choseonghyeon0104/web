function header(){

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
    const gnbSmart = document.querySelector('.gnb-smart')
    if (gnbSmart){
        gnbSmart.addEventListener('click', (e)=>{
            const span = e.target.closest('.btn-more')
            if (!span || !gnbSmart.contains(span)) return

            e.preventDefault()
            e.stopPropagation()

            const li = span.closest('li')
            if (!li) return

            // on 클래스만 토글
            const classList = li.className.split(' ').filter(Boolean)
            if (classList.includes('on')) {
                classList.splice(classList.indexOf('on'), 1)
            } else {
                classList.push('on')
            }
            li.className = classList.join(' ')
        })
    }

}
