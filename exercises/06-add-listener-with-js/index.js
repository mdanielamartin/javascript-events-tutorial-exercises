window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	document.querySelector('#theGreen').addEventListener('click',sendAlert)

};

// The listener function here
function sendAlert(){
	alert('woohoo!')
}