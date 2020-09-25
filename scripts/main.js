document.getElementById("button").addEventListener("click", function () {
  event.preventDefault();
  console.log(document.getElementById("bg-modal"));
  document.getElementById("bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
