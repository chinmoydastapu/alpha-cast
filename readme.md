# Alpha Cast

Alpha Cast is a news portal that allows users to browse news of various categories. The app fetches  data from an external API, presenting news in a clean, user-friendly interface. Users can explore news by category and read individual articles.

---

## Features

- **News Categories**: Displays different categories such as Sports, Entertainment, International etc.
- **Individual News Articles**: Allows users to view detailed news articles within each category.
- **User-Friendly Interface**: Clean and responsive design for an optimal browsing experience.
- **Data Fetching**: Uses an external API to fetch news.
- **Dynamic Updates**: News content is dynamically loaded based on user interactions.

---

## Technologies Used

### Frontend
- **HTML**: For the structure of the web page.
- **CSS**: For modifying bootstrap styles.
- **Bootstrap**: For styling the application and ensuring a responsive layout.
- **JavaScript**: Handles the dynamic fetching of data from the API and updates the UI.

### API Integration
- **News API**:  
  - Fetches the list of news categories from [Programming Hero News API](https://openapi.programming-hero.com/api/news/categories).  
  - Fetches individual news articles for each category using ID:  
    `https://openapi.programming-hero.com/api/news/category/01`.

---

## Deployment

This site is deployed on `Netlify`. Here is the live demo:
[Alpha Cast News Portal Live Preview](https://alpha-cast.netlify.app/)