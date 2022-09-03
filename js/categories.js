//Loading Categories from All News Category
const loadCat = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/news/categories';
        const res = await fetch(url);
        const data = await res.json();
        displayCat(data.data.news_category);
    }
    catch (error) {
        console.log('An Error Occurred: ', error);
    }
};

// Display Categories below header section
const displayCat = categories => {
    categories.forEach(category => {
        const categoriesContainer = document.getElementById('categories-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <li class="nav-item active-category">
            <a id="starting-page" class="nav-link ms-lg-4 ms-md-2" href="#" onclick="loadNews('${category.category_id}')">${category.category_name}</a>
        </li>
        `;
        categoriesContainer.appendChild(div);
    });

    // Active category detected and styled
    const activeClassNames = document.getElementsByClassName('active-category');
    let prevVisited;
    const a = activeClassNames[7].children[0];
    a.classList.add('text-primary');
    a.classList.add('border');
    a.classList.add('border-primary');
    a.classList.add('rounded-pill');
    for(const c of activeClassNames) {
        c.addEventListener('click', function(e) {
            a.classList.remove('text-primary');
            a.classList.remove('border');
            a.classList.remove('border-primary');
            a.classList.remove('rounded-pill');
            prevVisited ? prevVisited.classList.remove('text-primary') : '';
            prevVisited ? prevVisited.classList.remove('border') : '';
            prevVisited ? prevVisited.classList.remove('border-primary') : '';
            prevVisited ? prevVisited.classList.remove('rounded-pill') : '';
            e.target.classList.add('text-primary');
            e.target.classList.add('border');
            e.target.classList.add('border-primary');
            e.target.classList.add('rounded-pill');
            prevVisited = e.target;
        });
    }
};

loadCat();