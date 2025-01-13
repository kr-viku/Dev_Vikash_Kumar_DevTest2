let country_list = ["Australia", "India", "USA"];

var select = document.getElementById("country");

for (var i = 0; i < country_list.length; i++) {
  var opt = country_list[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}
