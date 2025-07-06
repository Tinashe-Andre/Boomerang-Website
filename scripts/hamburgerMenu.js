function myFunction() {
    var x = document.getElementById("nav-links");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

function closeMenu() {
  var x = document.getElementById("nav-links");
  x.classList.remove("responsive");
}