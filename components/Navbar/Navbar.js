import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => {
  return `
    <nav>
      <h2>Erik's Portfolio</h2>
      <ul>
        <li><a href="#" id="homelink">Home</a></li>
        <li><a href="#" id="projectslink">Projects</a></li>
        <li><a href="#" id="contactlink">Contact</a></li>
        <li><button id="themeBtn">☀</button></li>
      </ul>
    </nav>
    <hr class="divider" /> <!-- Divider debajo del navbar -->
  `;
};