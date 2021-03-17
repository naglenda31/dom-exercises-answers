let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.querySelector("#myList");
	let newLi = document.createElement("li");
    // newLi.innerHTML = "Fourth element";
    let liText = document.createTextNode("Fourth element")
    newLi.appendChild(liText);
    

	ul.appendChild(newLi);
});
