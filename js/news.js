// Loading news from All news in a Category API
const loadNews = catId => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`)
    .then(res => res.json())
    .then(data => displayNews(data.data));
};

// Showing the results
const displayNews = data => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    data.forEach(d => {
        // console.log(d);
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('mt-3');
        div.innerHTML = `
        <div class="row g-0 p-3" data-bs-toggle="modal" data-bs-target="#newsModal" onclick="showModal('${d._id}')">
            <div class="col-lg-3 text-center">
                <img src="${d.thumbnail_url}" class="img-fluid rounded-start">
            </div>
            <div class="col-lg-9">
                <div class="card-body">
                    <h5 class="card-title">${d.title}</h5>
                    <p class="card-text">${d.details.slice(0, 200)} <br><br> ${d.details.length > 100 ? d.details.slice(200, 300)+' . . .' : d.details}</p>
                    <div class="pt-3 row row-cols-1 g-4 text-center">
                        <div class="col-md-5 col-xl-4 d-md-flex align-items-center">
                            <img class="img-fluid rounded-circle w-25 me-2" src="${d.author.name !== null ? d.author.img : ''}">
                            <div>
                                <h6>${d.author.name !== null ? d.author.name : 'No Author'}</h6>
                                <p class="fs-8">${d.author.published_date !== null ? d.author.published_date : '-/-/-'}</p>
                            </div>
                        </div>
                        <div class="col-md-3 d-md-flex align-items-center">
                            <i class="fa-solid fa-eye me-1"></i>
                            <b class="fs-8">${d.total_view}</b>
                        </div>
                        <div class="col-md-3 d-md-flex align-items-center">
                            <i class="fa-solid fa-star me-1"></i>
                            <b class="fs-8">${d.rating.number}</b>
                        </div>
                        <div class="col-md-1 col-xl-2 d-md-flex align-items-center">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(div);
    });
};

// When website opened, load just "Breaking News" Category
let startingPage = true;

if(startingPage) {
    loadNews('08');
}