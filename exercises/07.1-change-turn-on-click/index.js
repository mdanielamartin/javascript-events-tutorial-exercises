let currentUser = "Mario";
let users = ['Mario', 'Juan','Josh']
let index = 0;
window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

// Modify this function
window.turnChanger = function turnChanger() {
	index+=1;
	if (index === users.length){
		index=0;
	}
	currentUser = users[index];

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
