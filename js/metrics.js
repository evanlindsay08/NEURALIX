// Function to update processing speed
function updateProcessingSpeed() {
    const speedElements = document.querySelectorAll('.processingSpeed');
    const randomSpeed = Math.floor(Math.random() * (180 - 50 + 1)) + 50;
    
    speedElements.forEach(element => {
        element.textContent = `${randomSpeed}ms`;
    });
}

// Function to update accuracy rate
function updateAccuracyRate() {
    const accuracyElements = document.querySelectorAll('.accuracyRate');
    // Generate random number between 98.2 and 99.9
    const randomAccuracy = (Math.random() * (99.9 - 98.2) + 98.2).toFixed(1);
    
    accuracyElements.forEach(element => {
        element.textContent = `${randomAccuracy}%`;
    });
}

// Start updating immediately
updateProcessingSpeed();
updateAccuracyRate();

// Update every second
setInterval(() => {
    updateProcessingSpeed();
    updateAccuracyRate();
}, 1000); 