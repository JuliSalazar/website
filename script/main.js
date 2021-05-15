//Javascript para funcionamiento del menú hamburguesa
var headerNav = document.querySelector('.header__nav');
var iconMenu = document.querySelector('.icon-menu');
var handleMenuClick = function () {
    
    headerNav.classList.toggle('header__nav--mobile');
    iconMenu.classList.toggle("icon-menu--open");
}
iconMenu.addEventListener('click', handleMenuClick);

function handleWindowResize () {
    if(window.innerWidth > 400){
        headerNav.classList.remove('header__nav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);


var firebaseConfig = {
    apiKey: "AIzaSyDauoo9J2YUPVOKTLFBPsvWehs50t69Dqw",
    authDomain: "portfolio-430e6.firebaseapp.com",
    projectId: "portfolio-430e6",
    storageBucket: "portfolio-430e6.appspot.com",
    messagingSenderId: "69053563916",
    appId: "1:69053563916:web:411278292dc22eddfeda29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);