const tabs = document.querySelectorAll(".store-tab");
const sections = document.querySelectorAll(".store-section");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    sections.forEach(section => {
      const matches = category === "all" || section.dataset.category === category;
      section.style.display = matches ? "" : "none";
    });
  });
});
