document.getElementById('certificate-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const certificateNumber = document.getElementById('certificate-number').value;
	const validCertificates = {
		'9ef21f57-1283-4321-b1ed-b38acd48ba5f': 'certificates/9ef21f57-1283-4321-b1ed-b38acd48ba5f.pdf',
		'47387454841': 'certificates/9ef21f57-1283-4321-b1ed-b38acd48ba5f.pdf'
	}; // Example valid certificates with corresponding PDF paths
	const resultDiv = document.getElementById('result');
	
	if (validCertificates[certificateNumber]) {
		resultDiv.textContent = 'Certificado Válido...';
		resultDiv.style.color = 'green';
		window.open(validCertificates[certificateNumber], '_blank');
	} else {
		resultDiv.textContent = 'Certificado Inválido.';
		resultDiv.style.color = 'red';
	}
});
