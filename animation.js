function moveMe(){
	// Get the objeft we wanna move
	var object = document.getElementById("animate");
	var posX = 0; // Initial x position
	var posY= 0;  // Initial y position
	//Create an interval
	//setInterval(functionToCall,noMilliseconds)
	var timer = setInterval(move, 10);
	function move(){
		if (posY >=350){
			posX =0;
			posY = 0;
		}
		object.style.top = posY + "px";
	    object.style.left= posX + "px";
		posX = posX + 1;
		posY = posY + 1;
	}
}

function moveMe2(){
	// Get the objeft we wanna move
	var object = document.getElementById("ball");
	var posX = 0; // Initial x position
	var posY= 0;  // Initial y position
	//Create an interval
	//setInterval(functionToCall,noMilliseconds)
	var timer = setInterval(move, 10);
	function move(){
		if (posX >=350){
			posX =0;
			posY = 0;
		}
		object.style.bottom = posY + "px";
	    object.style.right= posX + "px";
		posX = posX + 1;
		posY = posY + 1;
	}
}
	
function moveMe3(){
	// Get the objeft we wanna move
	var object = document.getElementById("one");
	var posX = 0; // Initial x position
	var posY= 0;  // Initial y position
	//Create an interval
	//setInterval(functionToCall,noMilliseconds)
	var timer = setInterval(move,10);
	function move(){
		if (posX >=350){
			posX =0;
			posY = 0;
		}
		object.style.bottom = posY + "px";
	    object.style.left= posX + "px";
		posX = posX + 1;
		posY = posY + 1;
	}
}

function moveMe4(){
	// Get the objeft we wanna move
	var object = document.getElementById("two");
	var posX = 0; // Initial x position
	var posY= 0;  // Initial y position
	//Create an interval
	//setInterval(functionToCall,noMilliseconds)
	var timer = setInterval(move, 10);
	function move(){
		if (posX >=350){
			posX =0;
			posY = 0;
		}
		object.style.top = posY + "px";
	    object.style.right= posX + "px";
		posX = posX + 1;
		posY = posY + 1;
}
}



	