

const Fill = () => {
	let progBars = document.querySelectorAll('.progress-bar');
	for (var i = 0; i < progBars.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = progBars[i].getBoundingClientRect().top;
		var elementVisible = 0;
		if (elementTop < windowHeight - elementVisible) {
			progBars[i].style.width = '100%';
		} 
        
	}

};

window.addEventListener("scroll", Fill);


  