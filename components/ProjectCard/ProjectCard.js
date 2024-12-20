import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.img} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<img src="/icons/github.jpg" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="/icons/link.jpg" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.technologies}</p>
</div>
</div>
`;