//Javascript para funcionamiento del menú hamburguesa
var headerNav = document.querySelector('.header__nav');
var iconMenu = document.querySelector('.icon-menu');
var handleMenuClick = function () {
    
    headerNav.classList.toggle('header__nav--mobile');
}
iconMenu.addEventListener('click', handleMenuClick);

function handleWindowResize () {
    if(window.innerWidth > 400){
        headerNav.classList.remove('header__nav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);

//Javascript para el funcionamiento del slider de galería de imagenes

var btnRight = document.querySelector('.arrow--right');
var btnLeft = document.querySelector('.arrow--left');
var galleryStrip = document.querySelector(".gallery__strip");
var posX = 0;
var width = galleryStrip.offsetWidth;
function handleBtnNextClick(){
    var quantity = galleryStrip.children.length;
    if(posX > -width * (quantity - 1)){
        posX -= width;
    } else {
        posX = 0;
    }
    galleryStrip.style.transform = 'translate(' + posX + 'px, 0px)';
}
    btnRight.addEventListener('click',handleBtnNextClick);

    function handleBtnPrevClick () {
        var quantity = galleryStrip.children.length;
        if(posX < 0){
            posX += width;
        } else {
            posX = -width * (quantity - 1);
        }
        galleryStrip.style.transform = 'translate(' + posX + 'px, 0px)';
    }
    btnLeft.addEventListener('click', handleBtnPrevClick);

    




