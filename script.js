"use strict";

// Selecting Elements
const close = document.querySelector('[aria-label="Close"]');
const min = document.querySelector('[aria-label="Minimize"]');
const max = document.querySelector('[aria-label="Maximize"]');
const wndw = document.querySelector(".window");

const display = document.querySelector(".display-text");
const yes = document.querySelector(".btn-yes");
const no = document.querySelector(".btn-no");

// Listeners on buttons
close.addEventListener("click", function () {
  wndw.classList.add("hidden");
  setTimeout(() => {
    wndw.classList.remove("hidden");
  }, 777);

  // Resets to defaults
  display.textContent = "Are you dumb?";
  wndw.style.marginTop = `0`;
  const minzd = display.classList.contains("minimize");
  minzd && display.classList.toggle("minimize");
  const maxzd = display.classList.contains("maximize");
  maxzd && display.classList.toggle("maximize");
});

// Window controls
max.addEventListener("click", () => {
  display.classList.toggle("maximize");
  // Check and clear opposite styling to avoid clash
  const minzd = display.classList.contains("minimize");
  minzd && display.classList.toggle("minimize");
});

min.addEventListener("click", () => {
  display.classList.toggle("minimize");
  // Check and clear opposite styling to avoid clash
  const maxzd = display.classList.contains("maximize");
  maxzd && display.classList.toggle("maximize");
});

yes.addEventListener("click", function () {
  display.textContent = "I knew it! :3";
});

no.addEventListener("click", function () {
  display.textContent !== "Are u dumb?"
    ? (display.textContent = "Are u dumb?")
    : null;

  //   const min = 70;
  //   const max = 100;
  //   const shift = Math.trunc(Math.random() * (max - min) + min);
  const shift = Math.trunc(Math.random() * 189);
  wndw.style.marginTop = `${shift}px`;
});
