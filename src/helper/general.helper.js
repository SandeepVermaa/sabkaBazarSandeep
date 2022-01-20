const API_URL = 'http://localhost:3000/';

export function request(route, method, body, headers) {
    return fetch(API_URL + route, 
        {  method, body: JSON.stringify(body), headers });
}

export function isMobile() {
    let isMobile = false;
    const screenWidth = window.innerWidth;
    if(screenWidth < 768){
        isMobile = true;
    }
    return isMobile;
}