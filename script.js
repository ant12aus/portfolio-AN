// Get the button element
let toggleButton = document.getElementById('toggleButton');

// Get the div element to toggle
let toggleDiv = document.getElementById('toggleDiv');

// Add event listener to the button
toggleButton.addEventListener('click', function() {
    // Check if the div is currently visible
    if (toggleDiv.style.display === 'block') {
        // If it's visible, hide it
        toggleDiv.style.display = 'none';
    } else {
        // If it's hidden, show it
        toggleDiv.style.display = 'block';
    }
});
