// 1. Dynamic Date Display
// This runs as soon as the page loads to show the current date at the top
window.onload = function() {
    const dateElement = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    
    // Formats date like: "Monday, October 25, 2023"
    dateElement.textContent = today.toLocaleDateString('en-US', options);
};

// 2. Article Reader Simulation
// In a real site, this would open a new page. Here, we simulate opening an article.
function readArticle(title) {
    alert("Opening article: " + title + "\n\n(In a real website, this would navigate to the full article page.)");
}

// 3. Subscription Handler
// Handles the "Choose Plan" buttons
function subscribe(planType) {
    // Confirm user intent
    let confirmSub = confirm("You have selected the " + planType + " Plan.\nProceed to payment gateway?");
    
    if (confirmSub) {
        // Simulate payment processing
        alert("Redirecting to secure payment for " + planType + " plan...\nThank you for supporting The Daily India!");
    }
}

// 4. Newsletter Validator
// Checks if the email field is empty before submitting
function joinNewsletter() {
    const email = document.getElementById('emailInput').value;
    
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Welcome aboard! \nNews updates will be sent to: " + email);
        document.getElementById('emailInput').value = ""; // Clear the input box
    }
}