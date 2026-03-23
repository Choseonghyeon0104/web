document.addEventListener("DOMContentLoaded",()=>{

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-heart');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            let imgtag = btn.children[0];
            let originSrc = imgtag.getAttribute("src");
            if(originSrc=='./img/icn-heart.svg'){
                // 현재 빈 하트 상태라면
                imgtag.setAttribute("src",'./img/icn-heart-fill.svg');
            }else{
                // 채워진 하트 상태라면
                imgtag.setAttribute("src",'./img/icn-heart.svg');
            }
        }
    });

})