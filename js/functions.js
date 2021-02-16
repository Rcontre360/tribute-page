
(()=>{
	const navBar = document.querySelector(".navbar");

	const toggleButton = e=>{
		console.log(e.target.classList)
		if (e.target.classList.contains("active")){
			e.target.classList.remove("active");
			navBar.classList.remove("active");
		}else{
			e.target.classList.add("active");
			navBar.classList.add("active");
		}
	}

	const navButton = document.querySelector(".burger-icon");
	navButton.addEventListener("click",toggleButton);

})();