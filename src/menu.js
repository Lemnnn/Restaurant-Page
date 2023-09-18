const createMenuPage = () => {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuList = document.createElement("ul");

  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Pomodoro";
  menuList.appendChild(menuItem1);

  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Bolognesa";
  menuList.appendChild(menuItem2);

  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Alfredo";
  menuList.appendChild(menuItem3);

  pageContent.appendChild(heading);
  pageContent.appendChild(menuList);
  content.appendChild(pageContent);
};

export default createMenuPage;
