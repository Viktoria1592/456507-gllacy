//Окно обратной связи
var feedback = document.querySelector(".feedback");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=e-mail]");

var storage = localStorage.getItem("username");

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		username.value = storage;
		e-mail.focus();
	} else {
		username.focus();
	}
});
		
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	/*login.focus();*/
});
		
form.addEventListener("submit", function (evt) {
	if (!username.value || !email.value) {
		evt.preventDefault();
		console.log("Нужно ввести имя и почту");
	} else {
		localStorage.setItem("name", username.value);
	}
});
		
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});