var buttons = document.getElementsByClassName('button');

console.log(buttons);

var i = buttons.length;

for (var j = 1; j <= i; j++) {
	var textButtons = document.getElementsByClassName('button')[0].innerText;
	alert(textButtons);
	console.log(textButtons);
}