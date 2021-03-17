window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	// let mySelect = document.querySelector("#mySelect");

	let option;
	for (let i = 0; i < countries.length; i++) {
		option = document.createElement("option");
		option.innerHTML = countries[i];
		document.querySelector("#mySelect").appendChild(option);
	}
	mySelect.addEventListener("change", function(e) {
		alert(e.target.value);
	});
};
