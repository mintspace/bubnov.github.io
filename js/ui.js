// header white/black

let link = '';

if ($(".header").hasClass("header-black")) {
	link = "white-link";
} else {
	link = "black-link";
}

const $headerBlock = $(`
			<a href="index.html" class="${link} logo">Dmitry<br>Bubnov</a>
			<div>
				<a href="mailto:dmitrybubnov.ca@gmail.com" class="${link} data-info">dmitrybubnov.ca@gmail.com</a>
				<a href="https://www.linkedin.com/in/dbubnov/" class="${link} data-info">linkedIn</a>
				<a href="https://github.com/mintspace?tab=repositories" class="${link} data-info">GitHub</a>
			</div>
		`);

$(".header").append($headerBlock);
