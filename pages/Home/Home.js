import "./Home.css";
import { cleanPage } from "../../utils/cleanPage.js";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    
    <section class="home">
    <img id=image.home src="/icons/persona-ordenador.jpg" alt="persona-ordenador"/>
    <p>Soy un estudiante de Desarrollo de Aplicaciones Web (DAW) que compagina sus estudios con la experiencia laboral en proyectos web y aplicaciones. A lo largo de este proceso, he ido adquiriendo habilidades clave que me permiten crear soluciones digitales efectivas. Este es mi pequeño portafolio, donde comparto mis avances, proyectos y logros a medida que continúo aprendiendo y creciendo como desarrollador. Cada proyecto aquí reflejará mi evolución y pasión por la tecnología.</p>
    </section>`;
};

