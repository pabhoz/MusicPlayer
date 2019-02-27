//UI interaction
const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

//Session handling
//https://www.w3schools.com/html/html5_webstorage.asp


// Requests

function doLogin(e){
	e.preventDefault();
	let fetch = postRequest("#loginForm",`http://localhost/usbcali/web-2019I/AudioPlayerServer/users.php?ejecute=login`);

	fetch.then(function(response) {
	return response.json();
	})
	.then(function(response) {
		if(response.login){
			alert(`Bienvenido`)
		}else{
			alert("Nombre de usuario o contraseña inccorecta");
		}
	});
}

function doSignUp(e){
	e.preventDefault();

	console.log("asdlkasldjasjl");
	
	let fetch = postRequest("#signUpForm",`http://localhost/usbcali/web-2019I/AudioPlayerServer/users.php?ejecute=signup`);

	fetch.then(function(response) {
	return response.json();
	})
	.then(function(response) {
		if(response){
			alert(`Bienvenido`)
			let form = document.querySelector("#signUpForm");
			let username = form.querySelector("input[name='username']");
			sessionStorage.setItem("username",username.value);
			window.location = "./index.html";
		}else{
			alert("El sistema de registro está petaqueado");
		}
	});
}

function postRequest(formSelector,url){

	let form = document.querySelector(formSelector);
	let inputs = form.querySelectorAll("input");
	let data = {};

	for (let i = 0; i < inputs.length; i++) {
		data[inputs[i].name] = inputs[i].value;	
	}

	var params = new FormData();
	for (const key in data) {
		params.append(key,data[key]);
	}

	var config = { 
		method: 'POST', 
		mode: 'cors',
		headers: {
			'Access-Control-Allow-Origin':'*'
		},
		body: params
	};

	return fetch(url,config);
	
}

