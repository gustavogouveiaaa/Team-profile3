const form = document.querySelector("#contact-form");
const status = document.querySelector("#status");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const message = document.querySelector("#message").value;
	const data = {
		name,
		email,
		message
	};
	fetch("/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then((response) => {
		status.textContent = "Mensagem enviada, estaremos entrando em contato!";
		form.reset();
	}).catch((error) => {
		status.textContent = "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.";
	});
});