import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage.js";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    
   <section class="contact">
      <h2>Contacto</h2>
      <form id="contact-form">
        <div class="form-group">
          <label for="first-name">Nombre</label>
          <input type="text" id="first-name" name="first-name" />
        </div>
        <div class="form-group">
          <label for="last-name">Apellido</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="form-group">
          <label for="phone">Número de Teléfono</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p id="form-status"></p>
    </section>
  `;
};

