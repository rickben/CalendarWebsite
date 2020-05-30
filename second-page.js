
document.getElementById("button").addEventListener("click", movePage,false);

document.getElementById("calendar").addEventListener("change", function() {
    var input = this.value;
    var dateEntered = new Date(input);
	var month = dateEntered.getMonth()+1;
	localStorage.setItem("pickedMonth",month);
});

function movePage() {
	var username = document.getElementById("username").value;
	alert (`Thank you ${username}! Now lets continue`); 
}
