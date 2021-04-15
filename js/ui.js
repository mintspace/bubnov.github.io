// header white/black

let link = '';

if ($(".header").hasClass("header-black")) {
	link = "white-link";
} else {
	link = "black-link";
}

const $headerBlock = $(`
			<a href="index.html" class="${link} logo">Dmitry<br>Bubnov</a>
			<div class="icon-box">
				<div>
					<a href="https://www.linkedin.com/in/dbubnov/" target="_blank" class="${link} data-info">
						<i class="fa fa-linkedin fa-2x" aria-hidden="false"></i>
					</a>
				</div>
				<div>
					<a href="mailto:dmitrybubnov.ca@gmail.com" class="${link} data-info">
						<i class="fa fa-envelope fa-2x" aria-hidden="false"></i>
					</a>
				</div>
				<div>
					<a href="https://github.com/mintspace?tab=repositories" target="_blank" class="${link} data-info">
						<i class="fa fa-github fa-2x" aria-hidden="false"></i>
					</a>
				</div>
			</div>
		`);

$(".header").append($headerBlock);
