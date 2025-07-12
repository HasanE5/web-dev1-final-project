const currentDisplayMode = localStorage.getItem("display-mode");
if (currentDisplayMode === "dark") {
  document.body.classList.add("dark");
}

// handle open/close nav bar
const navEl = document.getElementById("nav");
const openNavButtonEl = document.getElementById("open-nav-btn");

openNavButtonEl.onclick = () => {
  if (navEl.style.left === "0px") {
    navEl.style.left = "calc(-1 * var(--nav-width-desktop))";
    openNavButtonEl.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    navEl.style.left = "0px";
    openNavButtonEl.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
};

// handle dark mode
const toggleDarkModeBtnEl = document.getElementById("dark-mode-btn");

toggleDarkModeBtnEl.onclick = () => {
  const mode = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("display-mode", mode);
  document.body.classList.toggle("dark");
};
