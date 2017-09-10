//Окно обратной связи
		var feedback = document.querySelector('.feedback');
		
		var popup = document.querySelector(".modal-feedback");
		var close = popup.querySelector(".modal-close");
		
		var form = popup.querySelector("form");
		var name = popup.querySelector("[name=name]");
		var email = popup.querySelector("[name=e-mail]");
		
		var storage = localStorage.getItem("name");
		
		feedback.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
			if (storage) {
				name.value = storage;
				email.focus();
			} else {
				name.focus();
			}
		});
		
		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			name.focus();
		});
		
		form.addEventListener("submit", function (evt) {
			if (!name.value || !email.value) {
				evt.preventDefault();
				console.log("Нужно ввести имя и почту");
			} else {
				localStorage.setItem("name", name.value);
			}
		});
		
		window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
		  if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			}
		  }
		});