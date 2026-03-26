//주소표시줄에 있는 pid 파라미터에 저장된 값을 불러옴
function getParam(param){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}