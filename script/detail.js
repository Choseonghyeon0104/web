document.addEventListener("DOMContentLoaded",()=>{
    
    let productId = getParam("pid")
    const result = listArray.find(item=>item.pid == productId)
    // find함수는 앞의 listArray 라는 배열의 여러 원소들은 전부 조사하여 원소 중 pid 키 값이 현재 productId 변수에 저장된 수와 일치되는 원소를 리턴하여 result라는 변수에 저장한다.
    console.log(result)


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

