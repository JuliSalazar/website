/*var search = document.querySelector('input');
var handleSearchKeyDown = function (hola){
    if (hola.keyCode == 13){

        console.log(search.value);
        search.value = "";
    }
}
search.addEventListener('keydown', handleSearchKeyDown);*/
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

/*var btnRight = document.querySelector(".nombredelaclase");
var sliderStrip = document.querySelector(".slider__strip");
function handleBtnNextClick(){
    strip.style.transform = "valor de la cosa en css,siempre en striing comillas";
}
    btnRight.addEventListener('click',handleBtnNextClick);
*/




