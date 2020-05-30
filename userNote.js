var month = localStorage.getItem("pickedMonth");

chooseBackground();

function chooseBackground(){
	if (month == 12 || month<=2){//winter
		document.body.style.backgroundImage = "url('winter.jpg')";
	}
	else if(month>=3 && month<=5){//spring
		document.body.style.backgroundImage = "url('spring.jpg')";
	}
	else if(month>=6 && month<=8){//summer
		document.body.style.backgroundImage = "url('summer.jpg')";
	}
	else{//autmn
		document.body.style.backgroundImage = "url('autmn.jpg')";
	}
}