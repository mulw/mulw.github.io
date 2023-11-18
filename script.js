const newsContainer = document.getElementById('news-container');

// Make an API call to a cybersecurity news source and get the latest news articles
fetch('https://newsapi.org/v2/top-headlines?category=technology&keyword=cybersecurity&apiKey=881122986ae7429ab8496abe2b929e0f')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    // Filter the articles based on the search term
    const searchTerm = document.getElementById('search').value;
    if (searchTerm) {
      articles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Filter the articles based on the selected category
    const selectedCategory = document.getElementById('filter').value;
    if (selectedCategory !== 'all') {
      articles = articles.filter(article => article.category === selectedCategory);
    }

    // Loop through the filtered articles and create HTML for each one
    for (const article of articles) {
      const articleHTML = `
        <div class="news-article">
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <time>${article.publishedAt}</time>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>
      `;

      // Add the HTML to the news container
      newsContainer.innerHTML += articleHTML;
    }
  });

// Handle the submit form submission
const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const url = document.getElementById('url').value;

  // Submit the article to a backend server or database for storage
  // and display a success message to the user
});
