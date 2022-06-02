function toggleDarkLight() {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "pride-mode" : "dark-mode";
  }
