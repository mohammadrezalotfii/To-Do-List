let textValue = document.getElementById("textValue");
let submit = document.getElementById("ok");
let ul = document.getElementById("ul");
let item = document.getElementsByTagName("li");

function creatElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(textValue.value));
  ul.appendChild(li);
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Done"));
  li.appendChild(btn);
  function deleteList() {
    li.classList.add("done");
  }
  btn.addEventListener("click", deleteList);
  textValue.value = "";
}

function inputLength() {
  return textValue.value.length;
}

submit.addEventListener("click", creatElement);

function addAfterEnter() {
  if (inputLength() > 0 && event.which === 13) {
    creatElement();
  }
}
textValue.addEventListener("keypress", addAfterEnter);
