export function isMobile() {
    let isMobile = false;
    const screenWidth = window.innerWidth;
    if(screenWidth < 768){
        isMobile = true;
    }
    return isMobile;
}