console.log("test");

function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object

  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text/plain");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
}

var nav = document.getElementById("verplaats");
console.log(nav);

function verplaats(event) {
  if (event.key === "Tab") {
  } else {
    console.log(event);
    console.log(event.path[0].classList[0]);
    if (event.path[2].classList[0] === "lijst1") {
      console.log("VERPLAATS NAAR LIJST 2");
      if (event.path[0].classList[0] === "verplaats") {
        console.log("task1");
        document
          .getElementById("lijst2")
          .appendChild(document.getElementById("task1"));
      } else if (event.path[0].classList[0] === "verplaats2") {
        console.log("task2");
        document
          .getElementById("lijst2")
          .appendChild(document.getElementById("task2"));
      }
    } else if (event.path[2].classList[0] === "lijst2") {
      console.log("VERPLAATS NAAR LIJST 1");

      if (event.path[0].classList[0] === "verplaats") {
        console.log("task1");
        document
          .getElementById("lijst1")
          .appendChild(document.getElementById("task1"));
      } else if (event.path[0].classList[0] === "verplaats2") {
        console.log("task2");
        document
          .getElementById("lijst1")
          .appendChild(document.getElementById("task2"));
      }
    }
  }
}
