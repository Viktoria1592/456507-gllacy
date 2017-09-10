//Окно корзины
	    var empty = document.querySelector(".empty");
		var emptyPopup = document.querySelector(".modal-basket-content");
		  
		empty.addEventListener("click", function (evt) {
			evt.preventDefault();
			emptyPopup.classList.add("modal-show");
		});
		
		window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (emptyPopup.classList.contains("modal-show")) {
				emptyPopup.classList.remove("modal-show");
				}
			}
		});

	  
