const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
  //console.dir(event.target.tagname);
  // if (event.target && event.target.tagName == "BUTTON") {
  //   console.log("click");
  // }
  //-----------
  // if (event.target && event.target.classList.contains("crimson")) {
  //   console.log("click");
  // }
  //------------------------
  if (event.target && event.target.matches("button.crimson")) {
    console.log("click");
  }
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("click");
//   });
// });

const btn = document.createElement("button");
btn.classList.add("blue");
wrapper.append(btn);
