console.log("test");

function wijzigvoorkeuren(event) {
  console.log(event);
  var ul = document.querySelector("ul");
  var inactive = document.querySelectorAll(".inactive");
  console.log(inactive);
  console.log(ul);

  if (event.code === "Tab") {
  } else {
    ul.setAttribute("id", "activelist");
    for (var i = 0; i < inactive.length; i++) {
      inactive[i].classList.toggle("active");
    }
  }
}

function addtolist(event) {
  console.log(event);
  if (event.code === "Enter" || event.key === "+") {
    document.getElementById("activelist").appendChild(event.path[0]);
  }
}

function removefromlist(event) {
  console.log(event);
  if (
    event.code === "Enter" ||
    event.code === "Backspace" ||
    event.code === "Minus"
  ) {
    if (event.path[1].id === "") {
      console.log(event.path[1]);
    } else {
      document.getElementById("intactivelist").appendChild(event.path[0]);
    }
  }
}

function removeallclasses(event) {
  console.log(event);
  if (event.code != "Tab") {
    document.getElementById("activelist").removeAttribute("id");
    document.getElementById("intactivelist").classList.toggle("inactive");
    document.getElementById("intactivelist").removeAttribute("id");
  }
}
