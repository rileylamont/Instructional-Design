document.addEventListener("DOMContentLoaded", function () {
  // Existing header fetch code...
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerPlaceholder = document.getElementById("header-placeholder");
      if (headerPlaceholder) headerPlaceholder.innerHTML = data;
    });

  // Fade-in modules one after another
  const modules = document.querySelectorAll(".module-container");
  modules.forEach((module, i) => {
    setTimeout(() => {
      module.classList.add("visible");
    }, i * 100); // 300ms delay between each
  });
});
