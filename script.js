// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Store DOM elements
    const quoteElement = document.getElementById('quote');
    const generateButton = document.getElementById('generate');
    const backgroundContainer = document.querySelector('.background-container');
    const socialIcons = document.querySelectorAll('.social-icon');
    
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
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
        "The mind is everything. What you think you become. - Buddha",
        "The journey of a thousand miles begins with one step. - Lao Tzu"
    ];
    
    // Array of background categories for Unsplash
    const backgroundCategories = [
        'nature,inspiration',
        'mountains,sunset',
        'ocean,calm',
        'forest,light',
        'sky,clouds',
        'stars,night',
        'landscape,peaceful',
        'sunrise,hope',
        'waterfall,serenity',
        'autumn,reflection'
    ];
    
    // Keep track of recently used quotes to avoid repetition
    let recentQuotes = [];
    let currentQuote = '';
    
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
        currentQuote = selectedQuote;
        
        return selectedQuote;
    }
    
    // Function to change background image
    function changeBackground() {
        const randomCategory = backgroundCategories[Math.floor(Math.random() * backgroundCategories.length)];
        const newBackgroundUrl = `https://source.unsplash.com/random/1920x1080/?${randomCategory}&t=${new Date().getTime()}`;
        
        // Create a new image to preload
        const img = new Image();
        img.src = newBackgroundUrl;
        
        // When image is loaded, update the background
        img.onload = function() {
            backgroundContainer.style.opacity = 0;
            
            setTimeout(() => {
                backgroundContainer.style.backgroundImage = `url('${newBackgroundUrl}')`;
                backgroundContainer.style.opacity = 1;
            }, 500);
        };
    }
    
    // Function to update the quote text
    function updateQuote() {
        // Disable button during transition
        generateButton.disabled = true;
        
        // Get a random quote
        const newQuote = getRandomQuote();
        
        // Update the quote element with fade effect
        quoteElement.style.opacity = 0;
        
        // Change background
        changeBackground();
        
        setTimeout(() => {
            quoteElement.textContent = newQuote;
            quoteElement.style.opacity = 1;
            
            // Re-enable button after transition
            setTimeout(() => {
                generateButton.disabled = false;
            }, 500);
        }, 500);
    }
    
    // Function to handle social sharing
    function setupSocialSharing() {
        socialIcons.forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                
                const quote = currentQuote;
                let shareUrl = '';
                
                // Determine which platform was clicked
                if (this.querySelector('.fa-twitter')) {
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}&hashtags=inspiration,quotes`;
                } else if (this.querySelector('.fa-facebook-f')) {
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(quote)}`;
                } else if (this.querySelector('.fa-instagram')) {
                    // Instagram doesn't have a direct sharing API, so we'll just copy to clipboard
                    navigator.clipboard.writeText(quote).then(() => {
                        alert('Quote copied to clipboard! You can now paste it into Instagram.');
                    }).catch(err => {
                        console.error('Could not copy text: ', err);
                    });
                    return;
                }
                
                // Open share dialog
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            });
        });
    }
    
    // Add click event listener to the generate button
    generateButton.addEventListener('click', updateQuote);
    
    // Add button animation
    generateButton.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    generateButton.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
    
    // Setup social sharing
    setupSocialSharing();
    
    // Generate a random quote when the page loads
    updateQuote();
});
