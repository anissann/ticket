const fileInput = document.querySelector('input[type="file"]');
const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const githubInput = document.getElementById('githubInput');
const generateBtn = document.getElementById('generateBtn');
const outputName = document.querySelector('.outputName');
const outputEmail = document.querySelector('.outputEmail');
const outputName2 = document.querySelector('.outputName2');
const userAvatar = document.querySelector('.userAvatar');
const formSection = document.querySelector('.form-section');
const ticketSection = document.querySelector('.ticket-section');


generateBtn.addEventListener('click', function () {
    const name = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const github = githubInput.value.trim();

    if (name && email && github) {
        outputName.textContent = name;
        outputName2.textContent = name;
        outputEmail.textContent = email;

        formSection.style.display = 'none';
        ticketSection.style.display = 'flex';
    } else {
        alert("Please, fill all fields");
    }
});

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            userAvatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
