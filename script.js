function init(){
	//add your javascript between these two lines of code 
	var entry = document.getElementById("entrybutton");
	function myScript() {
		var textbox = document.getElementById("entryinput");
		var output = document.getElementById("textoutput");
		alert("Eduardo Carbo: " + textBox.value);
		output.innerHTML = textBox.value;
	}
	entry.addEventListener('click', myScript);
}
window.addEventListener('load', init);