

//Javascript para funcionamiento del menú hamburguesa
var headerNav = document.querySelector('.header__nav');
var iconMenu = document.querySelector('.icon-menu');
var handleMenuClick = function () {
    headerNav.classList.toggle('header__nav--mobile');
    iconMenu.classList.toggle("icon-menu--open");
}
iconMenu.addEventListener('click', handleMenuClick);

function handleWindowResize() {
    if (window.innerWidth > 400) {
        headerNav.classList.remove('header__nav--mobile');
    }
    if (window.innerWidth < 1024) {
        alert('I\'m sorry, this site isn\'t fully responsive, I\'m working on it ♥ :) !.');

    }
}
/* window.addEventListener('resize', handleWindowResize);
window.addEventListener('load', handleWindowResize); */


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

let projectsData = {};

const createProjectCards = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(projects => {
            projectsData = projects;

            const projectsContainer = document.querySelector('.latestProjects');

            projectsData.forEach((data, index) => {
                const projectCard = new ProjectCard(data, index, projectsContainer);
                projectCard.createCard();
            });
        });
}

const loadProject = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    fetch('https://portfolio-430e6-default-rtdb.firebaseio.com/projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectContainer = document.querySelector('.projectDetailSection');
        console.log(projects);
        const currentProject = projects[parseInt(urlParams.get('id'))];
        currentProject.images.forEach(image => {
            const img = document.createElement('img');
            img.setAttribute('src', image);
            projectContainer.appendChild(img);
        });
    });
}

window.addEventListener('load', () => {
    loadProject();
    createProjectCards('https://portfolio-430e6-default-rtdb.firebaseio.com/projects.json');
    });