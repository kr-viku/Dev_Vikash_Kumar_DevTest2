let country_list = ["Australia", "India", "USA"];
const select = document.getElementById("country");
const label = document.querySelector(".country-label span");

// Populate the select element
for (let i = 0; i < country_list.length; i++) {
  const el = document.createElement("option");
  el.textContent = country_list[i];
  el.value = country_list[i];
  select.appendChild(el);
}

// Add event listener for changes
select.addEventListener("change", () => {
  if (select.value) {
    label.classList.add("active");
  } else {
    label.classList.remove("active");
  }
});
