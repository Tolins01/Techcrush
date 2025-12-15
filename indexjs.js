console.log(document.URL);

const Greeting = document.getElementById("greeting");

console.log(Greeting);

const Items = document.querySelector(".item");

console.log(Items);

const selectAll = document.querySelectorAll(".text");

console.log(selectAll);

// lists:
// beans = 0
// rice = 1;
// eba = 2;

const header3 = document.getElementsByTagName("h3");

console.log(header3);

const edit = document.getElementById("example");

console.log(edit.textContent);
// console.log(edit.innerHTML);

edit.textContent = "We changed this text";

const link = document.getElementById("link");
console.log(link.href);

link.href = "http://bing.com";

link.setAttribute("target", "_blank");

const box = document.getElementById("box");

// box.style.backgroundColor = "pink";
// box.style.color = "black";
// box.style.padding = "20px";
// // box.style.minHeight = "100dvh";
// box.style.borderRadius = "10px";

Object.assign(box.style, {
  backgroundColor: "Purple",
  color: "white",
  padding: "20px",
});

const button = document.getElementById("btn");

const Fish = document.getElementsByClassName("Fish");

// button.classList.add("active");

button.classList.add("primary", "large");

button.classList.remove("large");

button.classList.toggle("active");

if (button.classList.contains("primary")) {
  console.log("Primary exists");
} else {
  console.log("Primary does not exists");
}
