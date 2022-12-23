/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");

// Switch the theme.
function switchTheme(_) {
  const currentTheme = window.localStorage && window.localStorage.getItem("theme");

  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

// Event listener
if (themeToggle) {
  const currentTheme = window.localStorage && window.localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", switchTheme, false);
} else {
  localStorage.removeItem("theme");
}
