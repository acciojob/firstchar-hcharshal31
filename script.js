function firstChar(text) {
  let newText = text.trim();
	if(newText === ""){
		return "";
	}
	return newText[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
