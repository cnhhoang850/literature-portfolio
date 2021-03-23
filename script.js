const container = document.getElementById("container");
const titleHead = document.querySelector("#titleHeader");
const titleText = document.querySelector("#titleText");

const titleTexts = {
  Home: `Hi, I'm Hoang. I develop art to app on the web
         that focus on bringing people out of the web.
         This is my portfolio + blog.`,
  Web: `I approach web experience development through systems thinking, user centered goals, and designing just enough.`,
  Photos: `The goal of my photos are first themselves. My photography straddles on the line of power between the presenter and the represented.`,
  Reading: `This is were I catalog what I read or am reading.
            Drop a recommendation if you see anything related.`,
  Listening: `Who doesn't love music?`,
}

const navNames = ["Home", "Web", "Photos", "Reading", "Listening"];

const navEls = document.getElementsByTagName("a");

for (i = 0; i < 5; i++) {
  const theme = navNames[i];

  navEls[i].addEventListener("click", () => {
    changeTheme(theme);
  });
}

function changeTheme(theme, content) {
  let curTheme = getContainerClass();
  container.classList.remove(curTheme);
  titleText.innerText = titleTexts[`${theme}`]
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
