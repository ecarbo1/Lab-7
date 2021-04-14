function init(){
	//add your javascript between these two lines of code 
	var entry = document.getElementById("entrybutton").addEventListener("click", AlertMe);
	function myScript() {
		var textbox = document.getElementById("entryinput");
		var output = document.getElementById("textoutput").textContent = text;
		alert("Eduardo Carbo: " + textBox.value);
		output.innerHTML = textBox.value;
	}
	entry.addEventListener('click', myScript);
}
window.addEventListener('load', init);