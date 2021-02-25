const container = document.getElementById("container");
const titleHead = document.querySelector("#titleHeader");
const titleText = document.querySelector("#titleText");

function changeTheme(theme, content) {
  let curTheme = container.classList.item(1);
  container.classList.remove(curTheme);
  requestAnimationFrame(() => container.classList.add(theme));

  titleHead.innerHTML = theme;
}

let navNames = ["Home", "Web", "Photos", "Reading", "Listening"];

let navEls = document.getElementsByTagName("a");

for (i = 0; i < 5; i++) {
  let theme = navNames[i];

  navEls[i].addEventListener("click", () => {
    changeTheme(theme);
  });
}
