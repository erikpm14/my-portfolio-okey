export function cleanPage(container) {
    container.innerHTML = "";
  };

  export const linkPage = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => page());
  };