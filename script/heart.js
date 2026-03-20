document.addEventListener("DOMContentLoaded",()=>{
    
    const btnHearts = document.querySelectorAll(".btn-heart")
    // btnHearts 변수에 무언가가 정상적으로 저장되었다면 다음과 같이 클릭했을 때의 동작을 등록한다.
    if(btnHearts){
        btnHearts.forEach((btn)=>{
            btn.addEventListener("click",(e)=>{
            e.preventDefault(); // 클릭을 할 때 기본 기능을 차단한다.(a태그를 클릭하면 기본기능으로 스크롤이 위로 이동됨)
            // e.stopPropagation() // 부모태그로 전달되는걸 막아주는 태그
            let imgtag = btn.children[0]
            let originSrc = imgtag.getAttribute("src")
            if(originSrc==`./img/icn-heart.svg`){
                //현재 빈 하트 상태라면
                imgtag.setAttribute("src","./img/icn-heart-fill.svg")
            }else{
                //채워진 하트 상태라면
                imgtag.setAttribute("src","./img/icn-heart.svg")
            }
            })
        }) 
    }

})