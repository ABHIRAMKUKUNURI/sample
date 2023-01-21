watchmore = document.getElementById("watchmore");

console.log("Running js");
watchmore.onclick = function () {
  clickfunction();
};
function clickfunction() {
  console.log("clickfunction watchmore");

  document.getElementById("photo").innerHTML = "hero";
  watchmore.className = "btn btn-secondary";
  document.getElementById("photo").style.color = "black";
}