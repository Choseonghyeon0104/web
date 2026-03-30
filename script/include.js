// HTML 파일을 동적으로 로드하는 함수
async function includeHTML(selector, url, callback) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
        const resp = await fetch(url);
        if (resp.ok) {
            el.innerHTML = await resp.text();
            if(callback) callback();
            header()
        }
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

// DOMContentLoaded 이벤트에서 헤더 로드
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('#include-header', './header.html');
    includeHTML(`#include-footer`,`./footer.html`)
});