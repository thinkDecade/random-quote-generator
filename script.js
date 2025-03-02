// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Store DOM elements
    const quoteElement = document.getElementById('quote');
    const generateButton = document.getElementById('generate');
    
    // Array of quotes
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa"
    ];
    
    // Keep track of recently used quotes to avoid repetition
    let recentQuotes = [];
    
    // Function to get a random quote
    function getRandomQuote() {
        // If all quotes have been recently used, reset the tracking array
        if (recentQuotes.length >= quotes.length - 1) {
            recentQuotes = [];
        }
        
        // Filter out recently used quotes
        const availableQuotes = quotes.filter(quote => !recentQuotes.includes(quote));
        
        // Get a random quote from available quotes
        const randomIndex = Math.floor(Math.random() * availableQuotes.length);
        const selectedQuote = availableQuotes[randomIndex];
        
        // Add the selected quote to recently used quotes
        recentQuotes.push(selectedQuote);
        
        return selectedQuote;
    }
    
    // Function to update the quote text
    function updateQuote() {
        // Get a random quote
        const newQuote = getRandomQuote();
        
        // Update the quote element with fade effect
        quoteElement.style.opacity = 0;
        
        setTimeout(() => {
            quoteElement.textContent = newQuote;
            quoteElement.style.opacity = 1;
        }, 300);
    }
    
    // Add click event listener to the generate button
    generateButton.addEventListener('click', updateQuote);
    
    // Generate a random quote when the page loads
    updateQuote();
});
