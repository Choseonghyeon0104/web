document.addEventListener("DOMContentLoaded",()=>{

    const productType = window.productType || 'dog'
    const productList = window.currentProducts || (productType === 'cat' ? window.catProducts : window.dogProducts) || []

    // ul태그에 li태그의 형태로 상품 데이터를 넣는 소스코드
    const list = document.querySelector(".list-grid")
    let result = ""
    productList.forEach(item=>{
        result +=` <li>
                            <a href="./detail.html?pid=${item.pid}&type=${productType}">
                                <figure>
                                    <img src="./img/${item.pThumbnail}" alt="${item.pName}">
                                </figure>
                                <div class="list-option">
                                    <span class="btn-heart">
                                        <img src="./img/icn-heart.svg" alt="좋아요 아이콘">
                                    </span>
                                </div>
                                <h4>${item.pName}</h4>
                                <p class="fwm">${item.pDesc}</p>
                                <div class="price fwb">${toWon(item.pPrice)}</div>
                            </a>
                        </li>`
    })
    list.innerHTML = result

    //상품 개수를 데이터 갯수에 맞게 입력하는 코드
    document.querySelector("#current-count").innerHTML = productList.length

})