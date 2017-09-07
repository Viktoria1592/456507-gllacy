//Окно поиска
		var search = document.querySelector(".search");
		var searchPopup = document.querySelector(".modal-search-form");
		  
		search.addEventListener("click", function (evt) {
			evt.preventDefault();
			searchPopup.classList.add("modal-show");
		});
		
		window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (searchPopup.classList.contains("modal-show")) {
				searchPopup.classList.remove("modal-show");
				}
			}
		});