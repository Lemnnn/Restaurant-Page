const createContactPage = () => {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  const form = document.createElement("form");
  form.classList.add("contactForm");

  const headingInput = document.createElement("input");
  headingInput.type = "text";
  headingInput.placeholder = "Enter heading";
  form.appendChild(headingInput);

  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.placeholder = "Enter address";
  form.appendChild(addressInput);

  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.placeholder = "Enter heading";
  form.appendChild(phoneInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  form.appendChild(submitButton);

  pageContent.appendChild(form);
  content.appendChild(pageContent);
};

export default createContactPage;
