document.addEventListener("DOMContentLoaded",()=>{
    
    const productId = getParam("pid")
    const type = getParam("type") || 'dog'
    let dataSource = window.listArray || []
    if(type === 'cat') dataSource = window.catProducts || dataSource
    else dataSource = window.dogProducts || dataSource
    const result = dataSource.find(item => String(item.pid) === String(productId))
    // find함수는 배열에서 pid 값이 productId와 같은 원소를 찾아서 리턴합니다.
    console.log({type, productId, result})

    if(!result){
        document.querySelector('.product1').innerHTML = '<p>찾을 수 없는 상품입니다.</p>'
        return
    }

    const product1 = document.querySelector(".product1")
    product1.innerHTML = `
    <div class="common-frame">
                <figure class="img-pro-thumb">
                    <img src="./img/${result.pThumbnail}" alt="${result.pName}">
                </figure>
                <div class="txt-pro">
                    <h1>${result.pName}</h1>
                    <p class="fwr">${result.pDesc}</p>
                    <dl class="price-table">
                        <dt>판매가</dt>
                        <dd>${toWon(result.pPrice)}원</dd>
                        <dt>배송비</dt>
                        <dd>
                            1,000원
                            <span>(20,000원 이상 구매시 무료)</span>
                        </dd>
                    </dl>
                    <div class="sell-info">
                        <div class="fwb">${result.pName}</div>
                        <div>
                            <div class="box-number">
                                <span class="btn-minus">
                                    <img src="./img/minus.svg" alt="감소 버튼">
                                </span>
                                <span class="current-count">1</span>
                                <span class="btn-plus">
                                    <img src="./img/plus.svg" alt="증가 버튼">
                                </span>
                            </div>
                        </div>
                        <div class="fwb">${toWon(result.pPrice)}원</div>
                    </div>
                    <dl class="price-result">
                        <dt>전체금액</dt>
                        <dd>${toWon(result.pPrice)}원</dd>
                    </dl>
                    <ul class="btns-buy">
                        <li><a href="#"><span class="btn-heart"><img src="./img/icn-heart.svg" alt="관심상품 등록버튼"></span></a></li>
                        <li><a href="#">장바구니</a></li>
                        <li><a href="#">구매하기</a></li>
                    </ul>
                </div>
            </div>`

})

