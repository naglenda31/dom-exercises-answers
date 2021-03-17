// Your code here

let deleteIcons = document.querySelectorAll(".fa-trash");
let list = document.querySelector("ul");
let newToDo = document.querySelector("#addToDo");

newToDo.addEventListener("keypress", function(e) {
	if (e.key == "Enter") addToDo(e.target.value);
});

for (let i = 0; i < deleteIcons.length; i++) {
	deleteIcons[i].addEventListener("click", e => deleteToDo(e, i));
}

function addToDo(item) {
	let li = document.createElement("li");
	li.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + item;
	// deleteIcons.addEventListener("click", e => deleteToDo(e, i));
	list.appendChild(li);
	newToDo.value = "";
}

function deleteToDo(e, i) {
	list.removeChild(list.childNodes[i]);
}
