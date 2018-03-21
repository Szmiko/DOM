var buttons = document.getElementsByClassName('button');

console.log(buttons);

var n = buttons.length;

for (var j = 0; j <= n; j++) {
	var textButtons = document.getElementsByClassName('button')[j].innerText;
	alert(textButtons);
	console.log(textButtons);
}