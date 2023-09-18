import createContactPage from "./contact";
import createHomePage from "./homePage";
import createMenuPage from "./menu";

const createTabs = () => {
  const content = document.getElementById("content");

  const div1 = document.createElement("div");
  div1.setAttribute("id", "homeButton");
  div1.classList.add("tab");
  div1.textContent = "Home";
  div1.addEventListener("click", () => {
    clearContent();
    createHomePage();
  });

  const div2 = document.createElement("div");
  div2.setAttribute("id", "menuButton");
  div2.classList.add("tab");
  div2.textContent = "Menu";
  div2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  const div3 = document.createElement("div");
  div3.setAttribute("id", "contactButton");
  div3.classList.add("tab");
  div3.textContent = "Contact";
  div3.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });

  content.appendChild(div1);
  content.appendChild(div2);
  content.appendChild(div3);
};

function clearContent() {
  const content = document.getElementById("content");
  const pageContent = document.querySelector(".pageContent");

  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
