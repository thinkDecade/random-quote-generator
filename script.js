// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Store DOM elements
    const quoteElement = document.getElementById('quote');
    const generateButton = document.getElementById('generate');
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
        "The journey of a thousand miles begins with one step. - Lao Tzu",
        "If you want to go fast, go alone. If you want to go far, go together. - African Proverb",
        "Wisdom is like a baobab tree; no one individual can embrace it. - Akan Proverb",
        "A man who uses force is afraid of reasoning. - Kenyan Proverb", 
        "Until the lion learns to write, every story will glorify the hunter. - African Proverb",
        "Even the best cooking pot will not produce food. - African Proverb",
        "He who learns, teaches. - Ethiopian Proverb",
        "Rain does not fall on one roof alone. - Cameroon Proverb",
        "A child who is carried on the back will not know how far the journey is. - Nigerian Proverb",
        "A fool and water will go the way they are directed. - African Proverb",
        "Do not look where you fell, but where you slipped. - African Proverb",
        "I am not African because I was born in Africa, but because Africa was born in me. - Kwame Nkrumah",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela", 
        "Courage is not the absence of fear — it's inspiring others to move beyond it. - Nelson Mandela",
        "He who is victorious in war shall be victorious in peace. - Haile Selassie",
        "An army of sheep led by a lion can defeat an army of lions led by a sheep. - Ghanaian Proverb",
        "Power is the ability to define reality and have others respond to your definition as if it were their own. - Steve Biko",
        "Revolution is not an apple that falls when it is ripe. You have to make it fall. - Thomas Sankara",
        "We must dare to invent the future. - Thomas Sankara",
        "A people without knowledge of their past history, origin, and culture is like a tree without roots. - Marcus Garvey",
        // Culture, Identity, and African Strength
        "Africa is not a country, but it is one people. - John Henrik Clarke",
        "I am because we are. - Ubuntu Philosophy",
        "A river that forgets its source will dry up. - African Proverb",
        "He who refuses to obey cannot command. - African Proverb", 
        "You must be prepared to lose sight of the shore if you want to discover new lands. - African Proverb",
        "Africa will write its own history, and it will be a history of glory and dignity. - Patrice Lumumba",
        "The best way to predict the future is to create it. - African Wisdom",
        "Even the smallest person can change the course of history. - African Proverb",
        "A roaring lion kills no game. - Ugandan Proverb",
        "The sun never sets on those who ride into it. - Zulu Proverb",

        // Success, Hard Work, and Resilience
        "He who does not know one thing knows another. - Maasai Proverb",
        "It always seems impossible until it is done. - Nelson Mandela",
        "A bird will always use another bird's feathers to build its nest. - African Proverb",
        "One cannot build a house for last year's summer. - Ethiopian Proverb",
        "You learn how to cut down trees by cutting them down. - African Proverb",
        "When the music changes, so does the dance. - African Proverb",
        "A vision without action is merely a dream. - African Wisdom",
        "No matter how long the night, the day is sure to come. - African Proverb",
        "Little by little, the bird builds its nest. - Cameroonian Proverb",
        "A hungry stomach has no ears. - African Proverb",

        // Love, Family & Relationships
        "It takes a village to raise a child. - African Proverb",
        "A mother is like a hen that warns its chicks against hawks. - Nigerian Proverb",
        "One does not eat honey without sharing it. - African Proverb",
        "If there is no enemy within, the enemy outside can do no harm. - African Proverb",
        "Where there is love, there is no darkness. - Burundian Proverb",
        "A friend is someone you share the path with. - African Proverb",
        "The child who is not embraced by the village will burn it down to feel its warmth. - African Proverb",
        "Love, like rain, does not choose the grass on which it falls. - African Proverb",
        "A family tie is like a tree; it can bend, but it will never break. - African Proverb",
        "Marriage is like a groundnut; you have to crack it to see what is inside. - Ghanaian Proverb",

        // Modern African Thinkers
        "Your real wealth is your time and freedom. - African Wisdom",
        "In Africa today, we recognize that trade and investment, and not aid, are pillars of development. - Paul Kagame",
        "We must find an African solution to our problems, and this can only be found in African unity. - Kwame Nkrumah",
        "Africa has her mysteries, and even a wise man cannot understand them. But a wise man respects them. - Miriam Makeba",
        "To be young, gifted, and Black is where it's at. - Nina Simone",
        // Ancient Asian Proverbs & Wisdom
        "A journey of a thousand miles begins with a single step. - Chinese Proverb",
        "When the character of a man is not clear, look at his friends. - Japanese Proverb",
        "A wise man adapts himself to circumstances as water shapes itself to the vessel that contains it. - Chinese Proverb",
        "A single conversation with a wise man is better than ten years of study. - Chinese Proverb", 
        "Fall seven times, stand up eight. - Japanese Proverb",
        "A fool judges people by the gifts they give him. - Chinese Proverb",
        "He who asks is a fool for five minutes, but he who does not ask remains a fool forever. - Chinese Proverb",
        "Do not speak unless it improves the silence. - Buddhist Proverb",
        "A gem is not polished without rubbing, nor a man perfected without trials. - Chinese Proverb",
        "One who points out your flaws is not necessarily your enemy; one who speaks of your virtues is not necessarily your friend. - Chinese Proverb",

        // Quotes from Asian Leaders & Philosophers
        "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power. - Lao Tzu",
        "The superior man is modest in his speech but exceeds in his actions. - Confucius",
        "Opportunities multiply as they are seized. - Sun Tzu",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "He who knows that enough is enough will always have enough. - Lao Tzu",
        "Be like water, my friend. - Bruce Lee",
        "He who has conquered himself is a far greater hero than he who has defeated a thousand enemies. - The Buddha",
        "To see the right and not to do it is cowardice. - Confucius",
        "The more you sweat in practice, the less you bleed in battle. - Chinese Proverb",
        "An army is not made up of soldiers but of their will. - Genghis Khan",

        // Culture, Identity, and Strength
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - The Buddha",
        "Great souls have wills; feeble ones have only wishes. - Chinese Proverb",
        "Better to light a candle than to curse the darkness. - Chinese Proverb",
        "The wise man learns more from his enemies than a fool from his friends. - Chinese Proverb",
        "Victory comes from finding opportunities in problems. - Sun Tzu",
        "The bamboo that bends is stronger than the oak that resists. - Japanese Proverb",
        "Do good, and good will come to you. - Indian Proverb",
        "A person grows most tired while standing still. - Chinese Proverb",
        "The moon does not fight. It attacks no one. It does not worry. It keeps to its course. - Deng Ming-Dao",
        "Adapt what is useful, reject what is useless, and add what is specifically your own. - Bruce Lee",

        // Success, Hard Work, and Resilience
        "If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else. - Chinese Proverb",
        "A little impatience will spoil great plans. - Chinese Proverb",
        "Do not fear failure but rather fear not trying. - Chinese Proverb",
        "The best time to plant a tree was 20 years ago. The second-best time is now. - Chinese Proverb",
        "You cannot direct the wind, but you can adjust the sails. - Chinese Proverb",
        "Pain is inevitable. Suffering is optional. - Buddhist Proverb",
        "He who depends on himself will attain the greatest happiness. - Chinese Proverb",
        "Even dust, when piled up, can become a mountain. - Japanese Proverb",
        "A wise man will make more opportunities than he finds. - Asian Wisdom",
        "A disciplined mind brings happiness. - The Buddha",

        // Love, Family & Relationships
        "A family in harmony will prosper in everything. - Chinese Proverb",
        "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love. - Lao Tzu",
        "A man should not be too honest. Straight trees are cut first, and honest people are screwed first. - Chanakya",
        "A man without a smiling face must not open a shop. - Chinese Proverb",
        "There is no greater wealth than wisdom, no greater poverty than ignorance. - Indian Proverb",
        "Do everything with a good heart and expect nothing in return, and you will never be disappointed. - Chinese Proverb",
        "One kind word can warm three winter months. - Japanese Proverb",
        "Respect for ourselves guides our morals; respect for others guides our manners. - Confucius",
        "A small spark can start a great fire. - Chinese Proverb",
        "Words have no wings, yet they can fly a thousand miles. - Korean Proverb",

        // Modern Asian Thinkers & Entrepreneurs
        "Success is not in what you have, but who you are. - Jack Ma",
        "If you don't give up, you still have a chance. Giving up is the greatest failure. - Jack Ma",
        "Being deeply loved by someone gives you strength while loving someone deeply gives you courage. - Lao Tzu",
        "Simplicity is the ultimate sophistication. - Chinese Wisdom",
        "The fool speaks; the wise man listens. - Asian Proverb",
        // Ancient Asian Proverbs & Sayings
        "Patience is a bitter plant, but its fruit is sweet. - Chinese Proverb",
        "Dig the well before you are thirsty. - Chinese Proverb",
        "An inch of time is an inch of gold, but you can't buy that inch of time with an inch of gold. - Chinese Proverb",
        "If you bow at all, bow low. - Japanese Proverb",
        "Better to be a warrior in a garden than a gardener in a war. - Asian Wisdom",
        "A closed mind is like a closed book; just a block of wood. - Chinese Proverb",
        "A frog in a well does not know the ocean. - Japanese Proverb",
        "If you chase two rabbits, you will not catch either one. - Japanese Proverb",
        "Diligence is the mother of good luck. - Chinese Proverb",
        "Live with no excuses and travel with no regrets. - Asian Proverb",

        // Leadership & Strategy
        "The supreme art of war is to subdue the enemy without fighting. - Sun Tzu",
        "A leader is best when people barely know he exists. - Lao Tzu",
        "Swift as the wind, quiet as the forest, aggressive as fire, and immovable as a mountain. - Sun Tzu",
        "Do not build a new ship out of old wood. - Korean Proverb",
        "It is easy to rule the kingdom, but difficult to rule oneself. - Chinese Proverb",
        "To lead others, you must first lead yourself. - Asian Wisdom",
        "A ruler who lacks wisdom will lead the country to ruin. - Chinese Proverb",
        "An army without discipline is like a man without a soul. - Asian Proverb",
        "Before you start a war, know why you are fighting. - Sun Tzu",
        "Even the strongest tree starts as a small seed. - Asian Proverb",

        // Resilience & Strength
        "No matter how high the mountain, it cannot block the sun. - Chinese Proverb",
        "Adversity is the foundation of virtue. - Chinese Proverb",
        "Do not be afraid of slow progress, only be afraid of standing still. - Chinese Proverb",
        "Hardship is the best teacher. - Asian Wisdom",
        "A diamond cannot be polished without friction, nor a person perfected without trials. - Chinese Proverb",
        "Be patient—water will wear away stone. - Japanese Proverb",
        "Gold is tested by fire; a man by adversity. - Chinese Proverb",
        "He who endures wins. - Japanese Proverb",
        "Great success comes from great perseverance. - Chinese Proverb",
        "Do not fear being slow, fear only standing still. - Asian Wisdom",

        // Wisdom & Knowledge
        "Better to be the head of a chicken than the tail of a bull. - Chinese Proverb",
        "Books are like a garden carried in the pocket. - Chinese Proverb",
        "A single conversation across the table with a wise person is worth a month's study of books. - Chinese Proverb",
        "Do not seek to follow in the footsteps of the wise. Seek what they sought. - Matsuo Bashō",
        "Even a fool can gain wisdom if he keeps his mouth shut. - Chinese Proverb",
        "Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
        "A great teacher opens the door, but you must enter by yourself. - Chinese Proverb",
        "The wise man learns from the mistakes of others; the fool learns only from his own. - Asian Wisdom",
        "To study and not think is a waste. To think and not study is dangerous. - Confucius",
        "Wisdom is like a river—the deeper it is, the less noise it makes. - Asian Proverb",

        // Success, Wealth & Ambition
        "An inch of time cannot be bought with an inch of gold. - Chinese Proverb",
        "If you want to be wealthy, think of saving as well as earning. - Chinese Proverb",
        "A great fortune depends on luck, a small one on diligence. - Chinese Proverb",
        "Wealth is not about having a lot of money, but about having a lot of options. - Asian Wisdom",
        "The man who removes a mountain begins by carrying away small stones. - Chinese Proverb"
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
    
    // Function to update the quote text with animation
    function updateQuote() {
        // Disable button during transition
        generateButton.disabled = true;
        
        // Get a random quote
        const newQuote = getRandomQuote();
        
        // Update the quote element with fade effect
        quoteElement.style.opacity = 0;
        
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
