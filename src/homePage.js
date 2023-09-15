const createHomePage = () => {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  image.height = "300";
  pageContent.appendChild(image);

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our restaurant!";
  pageContent.appendChild(headline);

  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town. Come and taste it!";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createHomePage;
