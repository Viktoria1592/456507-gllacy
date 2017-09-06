	  //Окно входа
		var login = document.querySelector(".login");
		var loginPopup = document.querySelector(".modal-enter-form");
		  
		login.addEventListener("click", function (evt) {
			evt.preventDefault();
			loginPopup.classList.add("modal-show");
		});
		
		window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (loginPopup.classList.contains("modal-show")) {
				loginPopup.classList.remove("modal-show");
				}
			}
		});