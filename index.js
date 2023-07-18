let title = document.getElementById("title");
let description = document.getElementById("description");
let data = document.getElementById("data");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let text = document.getElementById("text");
let submitTitle = document.getElementById("submitTitle");
let back = document.getElementById("back");
let submitDes = document.getElementById("submitDes");
let goBack = document.getElementById("goBack");
let goHead = document.getElementById("goHead");

title.addEventListener("click", (e) => {
  number1.style.background = "blue";
  number1.style.color = "#fff";
  title.style.opacity = "1";
  number1.style.opacity = "1";
  text.textContent = "Choose title content";
  submitTitle.style.display = "block ";
  back.style.display = "none";
  submitDes.style.display = "none";
  goBack.style.display = "none";
  goHead.style.display = "none";
  number2.style.background = "#cccccc51";
  description.style.opacity = "0.5";
  number2.style.color = "#000";
  number2.style.opacity = "0.5";
  number3.style.background = "#cccccc51";
  data.style.opacity = "0.5";
  number3.style.color = "#000";
  number3.style.opacity = "0.5";
});
submitTitle.addEventListener("click", (e) => {
  number2.style.background = "blue";
  number2.style.color = "#fff";
  description.style.opacity = "1";
  number2.style.opacity = "1";
  text.textContent = "Choose description content";
  submitTitle.style.display = "none";
  back.style.display = "block";
  submitDes.style.display = "block";
});
back.addEventListener("click", (e) => {
  number2.style.background = "#cccccc51";
  description.style.opacity = "0.5";
  number2.style.color = "#000";
  number2.style.opacity = "0.5";
  text.textContent = "Choose title content";
  submitTitle.style.display = "block";
  back.style.display = "none";
  submitDes.style.display = "none";
});
description.addEventListener("click", (e) => {
  if (
    text.textContent == "Choose title content" ||
    text.textContent == "Are you happy now" ||
    text.textContent == "Ok, We are done. Thanks for sending us your data!"
  ) {
    number2.style.background = "blue";
    number2.style.color = "#fff";
    description.style.opacity = "1";
    number2.style.opacity = "1";
    text.textContent = "Choose description content";
    submitTitle.style.display = "none";
    back.style.display = "block";
    submitDes.style.display = "block";
    number3.style.background = "#cccccc51";
    data.style.opacity = "0.5";
    number3.style.color = "#000";
    number3.style.opacity = "0.5";
    goBack.style.display = "none";
    goHead.style.display = "none";
  } else {
    return none;
  }
});

data.addEventListener("click", (e) => {
  if (text.textContent == "Choose description content") {
    number3.style.background = "blue";
    number3.style.color = "#fff";
    data.style.opacity = "1";
    number3.style.opacity = "1";
    text.textContent = "Are you happy now";
    submitTitle.style.display = "none";
    back.style.display = "none";
    submitDes.style.display = "none";
    goHead.style.display = "block";
    goBack.style.display = "block";
  } else {
    return none;
  }
});

submitDes.addEventListener("click", (e) => {
  number3.style.background = "blue";
  number3.style.color = "#fff";
  data.style.opacity = "1";
  number3.style.opacity = "1";
  text.textContent = "Are you happy now";
  submitTitle.style.display = "none";
  back.style.display = "none";
  submitDes.style.display = "none";
  goHead.style.display = "block";
  goBack.style.display = "block";
});

goBack.addEventListener("click", (e) => {
  number2.style.background = "blue";
  number2.style.color = "#fff";
  description.style.opacity = "1";
  number2.style.opacity = "1";
  text.textContent = "Choose description content";
  submitTitle.style.display = "none";
  back.style.display = "block";
  submitDes.style.display = "block";
  number3.style.background = "#cccccc51";
  data.style.opacity = "0.5";
  number3.style.color = "#000";
  number3.style.opacity = "0.5";
  goBack.style.display = "none";
  goHead.style.display = "none";
});

goHead.addEventListener("click", (e) => {
  text.textContent = "Ok, We are done. Thanks for sending us your data!";
  goHead.style.display = "none";
  goBack.style.display = "none";
});
