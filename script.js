// Scroll Animation with JavaScript
window.addEventListener('scroll', () => {
    const services = document.querySelectorAll('.service-item');
    services.forEach(service => {
        const rect = service.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
            service.classList.add('show');
        }
    });
});

// Google News API Fetch
const apiKey = '993c8a7c7f9245638becf3696b406213';  // Google News API key
const newsContainer = document.getElementById('news-container');

async function fetchTechNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the response to check its structure

        if (data.articles && Array.isArray(data.articles) && data.articles.length > 0) {
            displayNewsArticles(data.articles);
        } else {
            console.error('No articles found or invalid response structure:', data);
        }
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

function displayNewsArticles(articles) {
    console.log('Displaying articles:', articles); // Log the articles being displayed
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Fetch news when the page loads
window.addEventListener('DOMContentLoaded', fetchTechNews);
