/* Tabs navigation */
const listsBtn = document.querySelectorAll(".tab-list");
const listsTab = document.querySelectorAll(".tab-item");
listsBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".tab-list.active").classList.remove("active");
        btn.classList.add("active");
        document.querySelector(".tab-item.active").classList.remove("active");
        listsTab[idx].classList.add("active");
    });
});

// Tab 1 – Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
});
const hoverBtn = document.getElementById('hoverBtn');
hoverBtn.addEventListener('mouseover', () => {
    hoverBtn.style.backgroundColor = '#f0ad4e';
});
hoverBtn.addEventListener('mouseout', () => {
    hoverBtn.style.backgroundColor = '#0ef';
});
document.addEventListener('keydown', (event) => {
    const keyDisplay = document.getElementById('keyDisplay');
    keyDisplay.textContent = `Last Key Pressed: ${event.key}`;
});

// Tab 2 – Interactive Elements
document.getElementById('colorBtn').addEventListener('click', () => {
    // Change page background to a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
// Slideshow setup
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];
let currentIndex = 0;
const slideImg = document.getElementById('slide');
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.src = images[currentIndex];
}, 3000);

// Double click shake effect
const dblClickBtn = document.getElementById("dblClickBtn");
dblClickBtn.addEventListener("dblclick", () => {
    dblClickBtn.classList.add("shake");
    setTimeout(() => dblClickBtn.classList.remove("shake"), 500);
});


// Tab 3 – Form Validation
const form = document.getElementById('sampleForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

nameInput.addEventListener('input', () => {
    if (nameInput.validity.valueMissing) {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
});
emailInput.addEventListener('input', () => {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "Email is required";
    } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email";
    } else {
        emailError.textContent = "";
    }
});
form.addEventListener('submit', (event) => {
    if (!nameInput.value || !emailInput.validity.valid) {
        event.preventDefault();
        if (!nameInput.value) {
            nameError.textContent = "Name is required";
        }
        if (!emailInput.value || emailInput.validity.typeMismatch) {
            emailError.textContent = "Please enter a valid email";
        }
    }
});

// Password Validation
const passwordInput = document.getElementById('password');
const ruleLength = document.getElementById('ruleLength');

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 8) {
        ruleLength.classList.remove('invalid');
        ruleLength.classList.add('valid');
    } else {
        ruleLength.classList.remove('valid');
        ruleLength.classList.add('invalid');
    }
});

