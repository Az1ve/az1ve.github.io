menu.onclick = function menuClick() {
	var x = document.getElementById('nav');
	var y = document.getElementById('title');

	if (x.className === "header-nav") {
		x.className += " responsive";
	}
	else {
		x.className = "header-nav"
	}
	if (y.className === "title") {
		y.className += " hide";
	}
	else {
		y.className = "title";
	}
}