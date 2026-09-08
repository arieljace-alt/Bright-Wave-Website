// Data structures using objects and arrays
const serviceOptions = [
    { id: 'web-design', name: 'Web Design & Development', basePrice: 500 },
    { id: 'seo', name: 'Search Engine Setup', basePrice: 300 },
    { id: 'updates', name: 'Website Maintenance', basePrice: 150 }
];

const selectedPreferences = {
    service: '',
    savedAt: ''
};

// Function 1: Interactive Feature - Calculate estimated cost and update display
function calculateEstimate() {
    const serviceSelect = document.getElementById('service');
    const displayElement = document.getElementById('price-estimate');
    
    if (!serviceSelect || !displayElement) return;

    const selectedValue = serviceSelect.value;
    const matchedService = serviceOptions.find(item => item.id === selectedValue);

    if (matchedService) {
        displayElement.textContent = `Estimated Base Price: $${matchedService.basePrice}`;
        savePreference(selectedValue);
    } else {
        displayElement.textContent = 'Estimated Base Price: $0';
    }
}

// Function 2: Client-Side Data Storage - Save to localStorage
function savePreference(serviceId) {
    selectedPreferences.service = serviceId;
    selectedPreferences.savedAt = new Date().toLocaleTimeString();
    localStorage.setItem('brightWaveServicePref', JSON.stringify(selectedPreferences));
}

// Function 3: Client-Side Data Storage - Load from localStorage
function loadSavedPreference() {
    const savedData = localStorage.getItem('brightWaveServicePref');
    const serviceSelect = document.getElementById('service');
    const displayElement = document.getElementById('price-estimate');

    if (savedData && serviceSelect && displayElement) {
        const parsedData = JSON.parse(savedData);
        serviceSelect.value = parsedData.service;
        
        const matchedService = serviceOptions.find(item => item.id === parsedData.service);
        if (matchedService) {
            displayElement.textContent = `Estimated Base Price: $${matchedService.basePrice} (Restored from previous visit)`;
        }
    }
}

// Function 4: Form Validation
function validateForm(event) {
    let isValid = true;

    // Elements and Error Message containers
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');

    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';

    // Check 1: Required Name Length
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Please enter your name (at least 2 characters).';
        isValid = false;
    }

    // Check 2: Email Format Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
        isValid = false;
    }

    // Prevent submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
}

// Initialize event listeners after page loads
document.addEventListener('DOMContentLoaded', () => {
    loadSavedPreference();

    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', calculateEstimate);
    }

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});
