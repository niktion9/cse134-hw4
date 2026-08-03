const button = document.querySelector("#aesthetic-toggle");

const saved = localStorage.getItem("nature-mode");

if (saved === "on") {
  document.body.classList.add("nature-mode");
  button.setAttribute("aria-pressed", "true");
  button.textContent = "Close field journal";
}

button.addEventListener("click", () => {
  document.body.classList.toggle("nature-mode");

  const enabled = document.body.classList.contains("nature-mode");

  button.setAttribute("aria-pressed", enabled);

  button.textContent = enabled
    ? "Close field journal"
    : "Open field journal";

  localStorage.setItem("nature-mode", enabled ? "on" : "off");
});