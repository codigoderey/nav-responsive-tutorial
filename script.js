const menuButton = document.getElementById("nav-menu-icon");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
	navLinks.classList.toggle("active");

	if (navLinks.classList.contains("active")) {
		menuButton.classList.replace("fa-bars", "fa-times");
	} else {
		menuButton.classList.replace("fa-times", "fa-bars");
	}
});
