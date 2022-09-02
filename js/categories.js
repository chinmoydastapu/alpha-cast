//Loading Categories from All News Category
const loadCat = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayCat(data.data.news_category);
};

// Display Categories below header section
const displayCat = categories => {
    categories.forEach(category => {
        // console.log(category.category_name);
        const categoriesContainer = document.getElementById('categories-container');
        const div = document.createElement('div');
        div.innerHTML = `${category.category_name}`;
        categoriesContainer.appendChild(div);
    });
};

loadCat();