let btn = document.querySelector("button");
let form = document.querySelector("form");
let input = document.querySelector("input");
let div = document.querySelector("main div:first-of-type");
let err = document.querySelector(".err");
let span = document.createElement("span");
span.style.cssText = `font-size: 13px;
    margin: -40px 1px 0px 10px;`;
for (i = 0; i < div.children.length; i++) {
  if (i % 2 === 0) {
    div.children[i].style.transform = "translateX(20%)";
    div.children[i].style.opacity = "0";
  } else {
    div.children[i].style.transform = "translateX(-20%)";
    div.children[i].style.opacity = "0";
  }
}

form.onsubmit = function (e) {
  e.preventDefault();
  if (/\w+@\w+.\w+/.test(input.value)) {
    div.appendChild(span);
    err.style.display = "none";
    form.classList.remove("wrong");
    form.style.transitionDelay = "0ms";
    span.innerHTML = "You Have Subscribed To Our Shop";
    span.style.color = "Green";
  } else {
    div.appendChild(span);
    span.innerHTML = "Please Provide A Valid Email Address";
    err.style.display = "block";
    span.style.color = "red";
    form.classList.add("wrong");
    form.style.transitionDelay = "0ms";
  }
};
window.onload = function () {
  let time = 0;
  for (i = 0; i < div.children.length; i++) {
    div.children[i].style.transition = "0.3s";
    if (i % 2 === 0) {
      time += 500;
      div.children[i].style.transform = "translateX(0)";
      div.children[i].style.opacity = "1";
      div.children[i].style.transitionDelay = `${time}ms`;
    } else {
      time += 500;

      div.children[i].style.transitionDelay = `${time}ms`;

      div.children[i].style.transform = "translateX(0)";
      div.children[i].style.opacity = "1";
    }
  }
};
setTimeout(function () {
  for (i = 0; i < div.children.length; i++) {
    div.children[i].style.transitionDelay = `0ms`;
  }
}, 3000);
