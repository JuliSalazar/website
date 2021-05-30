class ProjectCard {

    constructor(data, index, root) {
        this.data = data;
        this.root = root;
        this.index = index;
    }

    createCard() {
        const container = document.createElement('a');
        container.classList.add('latestProjects__a');
        this.root.appendChild(container);

        const cardArticle = document.createElement('article');
        cardArticle.classList.add('latestProjects__article');
        container.appendChild(cardArticle); 

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('latestProjects__info');
        cardArticle.appendChild(projectInfo);
        
        const projectCategory = document.createElement('h4');
        projectCategory.innerText = this.data.category;
        projectInfo.appendChild(projectCategory);

        const projectTitle = document.createElement('h3');
        projectTitle.innerText = this.data.name;
        projectInfo.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.innerText = this.data.description;
        projectInfo.appendChild(projectDescription);


        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('project__thumbnail');
        cardArticle.appendChild(thumbnailContainer);

        const thumbnailImg = document.createElement('img');
        thumbnailImg.setAttribute('src', this.data.thumbnail);
        cardArticle.appendChild(thumbnailImg);

        container.addEventListener('click', () => {
            window.location.href = './project.html?id='+this.index;
        });
    }
}
