const container = document.getElementById("container");
const titleHead = document.querySelector("#titleHeader");
const titleText = document.querySelector("#titleText");

let navNames = ["Home", "Web", "Photos", "Reading", "Listening"];

let navEls = document.getElementsByTagName("a");

for (i = 0; i < 5; i++) {
  let theme = navNames[i];

  navEls[i].addEventListener("click", () => {
    changeTheme(theme);
  });
}

function changeTheme(theme, content) {
  let curTheme = getContainerClass();
  container.classList.remove(curTheme);
  requestAnimationFrame(() => container.classList.add(theme));

  titleHead.innerHTML = theme;
}

function getContainerClass() {
  return container.classList.item(1);
}

function bookComponent(title, author, description) {}

function albumComponent(title, year, description) {}

//conditional rendering

function Render(template, node) {
  if (!node) return;
  node.innerHTML = typeof template === "function" ? template() : template;
}
