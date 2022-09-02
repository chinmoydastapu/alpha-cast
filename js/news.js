const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayNews(data.data));
};

const displayNews = data => {
    const newsContainer = document.getElementById('news-container');
    data.forEach(d => {
        console.log(d.title);
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('mt-3');
        div.innerHTML = `
        <div class="row g-0 p-3">
            <div class="col-lg-3 text-center">
                <img src="${d.thumbnail_url}" class="img-fluid rounded-start">
            </div>
            <div class="col-lg-9">
                <div class="card-body">
                    <h5 class="card-title">${d.title}</h5>
                    <p class="card-text fs-7">${d.details.slice(0, 200)} <br><br> ${d.details.length > 100 ? d.details.slice(200, 300)+' . . .' : d.details}</p>
                    <p>${d.author.name}</p>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(div);
    });
};

loadNews();