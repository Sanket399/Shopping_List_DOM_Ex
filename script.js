var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var delBtn = document.querySelectorAll(".del-btn");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	li.classList.add("list-item");
	delButton.innerHTML ="Delete";
	delButton.classList.add("del-btn");
	delButton.addEventListener("click", deleteItem);
	li.appendChild(document.createTextNode(input.value + " "));
	li.append(delButton);
	ul.append(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossThroughAfterClick(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle('done');
    }
}


function deleteItem(element) {
    if (element.target.className === "del-btn") {
		element.target.parentElement.remove();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossThroughAfterClick);

delBtn.forEach(function(div) {
	div.addEventListener("click", deleteItem);
})



