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
  if (event.type === "click" || event.code === "Enter" || event.key === "+") {
    document.getElementById("activelist").appendChild(event.path[0]);
  }
}

function removefromlist(event) {
  console.log(event);
  if (
    event.type === "click" ||
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
  if (event.code != "Tab" || event.type === "click") {
    document.getElementById("activelist").removeAttribute("id");
    document.getElementById("intactivelist").classList.toggle("inactive");
    document.getElementById("intactivelist").removeAttribute("id");
  }
}

var content = document.querySelector("body");
content.onkeydown = function(event) {
  let values = check(document.activeElement);
  console.log(values);
  var id = values[0];

  if (event.keyCode == 40) {
    console.log("pijl v");
    var id = Number(id);
    document.getElementById(id).blur();
    var nextElement = id + 1;
    var newId = nextElement.toString();
    console.log(newId);
    if (document.getElementById(newId) === null) {
      document.getElementById(id).focus();
    } else {
      console.log(newId);
      console.log(document.getElementById(newId));
      document.getElementById(newId).focus();
    }
  }
  if (event.keyCode == 38) {
    console.log("pijl ^");
    var id = Number(id);
    document.getElementById(id).blur();
    var nextElement = Math.round((id - 1) * 10) / 10;
    console.log(nextElement);
    var newId = nextElement.toString();
    console.log(newId);
    if (document.getElementById(newId) === null) {
      document.getElementById(id).focus();
    } else {
      console.log(newId);
      console.log(document.getElementById(newId));
      document.getElementById(newId).focus();
    }
  }

  if (event.keyCode == 39) {
    console.log("pijl >");
    var id = Number(id);

    document.getElementById(id).blur();
    var nextElement = Math.round((id + 0.1) * 10) / 10;
    console.log(nextElement);
    var newId = nextElement.toString();
    console.log(newId);

    if (document.getElementById(newId) === null) {
      document.getElementById(id).focus();
    } else {
      console.log(newId);
      console.log(document.getElementById(newId));
      document.getElementById(newId).focus();
    }
  }
  if (event.keyCode == 37) {
    console.log("pijl <");
    var id = Number(id);
    document.getElementById(id).blur();
    var nextElement = Math.round((id - 0.1) * 10) / 10;
    var newId = nextElement.toString();
    if (document.getElementById(newId) === null) {
      document.getElementById(id).focus();
    } else {
      console.log(newId);
      console.log(document.getElementById(newId));
      document.getElementById(newId).focus();
    }
  }
};

function check(x) {
  var id = x.id;
  return [id];
}
