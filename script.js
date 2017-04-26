function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);

	
}

 
function calcButton(num) {
	var result = document.getElementById("result");
	if (result.value === "0") {
		result.value = "";
	}
	result.value = result.value + num;
}

function login() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var error = document.getElementById("error");

	
	// Check that the user and password are not blank
	if (username.length===0) {
		error.innerHTML = " Please enter a user or email!";
		return false;
	}
	if (passsword.length===0) {
		error.innerHTML = " Please enter a password!";
		return false;
	}
	// Check that the password is correct
	
	var realPassword = "abc123";
	if(password.value != realPassword) {
		error.innerHTML = "Wrong password.";
		return false;
	}
	else{
		return true;
	}
}
function getParameterByName(name, url) { 
if (!url) { 
url = window.location.href; 
} 
name = name.replace(/[\[\]]/g, "\\$&"); 
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
results = regex.exec(url); 
if (!results) return null; 
if (!results[2]) return ''; 
return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function loadHome(){
	var username = getParameterByName("username");
	window.alert(username);
	// Create a new <p> element to show the username
	newP = document.createElement("p");
	newP.innerHTML = "Welcome, " + username;
	// ADD the new <p> to the logout bar
	var logoutBar = document.getElementById("logout-bar");
	logoutBar.appendChild(newP);
	
	// Create a logout button
	var logoutButton = document.createElement("button");
	logoutButton.innerHTML = "log out";
	logoutButton.setAttribute("class", "form-button")
	logoutButton.setAttribute("onclick", "logout();");
	logoutBar.appendChild(logoutButton);
}
//Part 1: Automatically do something when page loads

function autoload(){
	// Write some text to the console
	console.log("Welcome!");
	
	//Add some content to <div id="part1">
	//1. Get the div where you want to add the content
	var part1Div= document.getElementById("part1");
	//2. Create new element(s) to put inside the </div>
	var newHeader = document.createElement("h3");
	var newParagraph = document.createElement("p");
	//3. Put some text in those new elements
	newHeader.innerHTML = "Part 1- On Load";
	newParagraph.innerHTML = "Automatically do stuff!";
	//4. Add new elemtns to the <div>
	part1Div.appendChild(newHeader);
	part1Div.appendChild(newParagraph);
	part1Div.appendChild(document.createElement("hr"));
}

// Part 2: Add text
function addText(){
	var input = document.getElementById("part2-input");
	var div = document.getElementById("text");
	
	var newParagraph = document.createElement("p");
	newParagraph.innerHTML = input.value;
	
	div.appendChild(newParagraph);
}

//Part 3: Change Style
function changeStyle(){
	var part3p= document.getElementById("part3-p");
	part3p.setAttribute("class", "new-style");
}

//Part4
function changePage(num){
	var body = document.getElementById("body");
	if (num===1){
		body.setAttribute("class","orginal");
	}
	else if (num===2){
		body.setAttribute("class","style1");
	}
	else if (num===3){
		body.setAttribute("class","style2");
	}
	else if (num===4) {
		body.setAttribute("class","style3");
	}
}
		
function addPic(){
	var picDiv = document.getElementById("picDiv");
	var pic = document.createElement("img");
	pic.setAttribute("src","http://www.keepcalmstudio.com/_gallery/300/kcs_88782f1f.png");
	picDiv.appendChild(pic);
}

function changePic(img){
	var pic = document.getElementById("bigPic");
	if (img===1){
		pic.setAttribute("src","http://www.exreflux.com/images/apple.jpg")
	}
	else if (img===2){
		pic.setAttribute("src","https://media.mercola.com/assets/images/foodfacts/banana-og.jpg")
	}
		
	else if (img===3){
		pic.setAttribute("src","http://vdb-proseeds.com/image/shop/products/bergpass-f1-hybrid-improved-galia-melon.jpg")
		}
	else if (img===4){
		pic.setAttribute("src","https://static1.squarespace.com/static/55359ac0e4b0a48fd270d2fa/t/5546f310e4b015ca719c53fd/1430713111513/.jpg")
		}
	else if (img===5){
		pic.setAttribute("src","http://gsoextracts.com/wp-content/uploads/2013/07/grapes-purple.jpg")
	}
}







