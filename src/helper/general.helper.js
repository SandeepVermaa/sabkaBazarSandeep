const API_URL = 'http://localhost:3000/';

export function request(route, method, body) {
    return fetch(API_URL + route, {  method, body });
}

export function isMobile() {
    let isMobile = false;
    const screenWidth = window.innerWidth;
    if(screenWidth < 768){
        isMobile = true;
    }
    return isMobile;
}