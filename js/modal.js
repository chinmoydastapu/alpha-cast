const showModal = async (id) => {
    try {
        // Loading the data using given id
        const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
        const data = await res.json();

        // Showing the title
        document.getElementById('newsModalLabel').innerText = data.data[0].title;

        // Accessing the Modal Container
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = '';

        // Adding the Heading Image
        const imgDiv = createDiv();
        imgDiv.innerHTML = `
        <img class="img-fluid rounded mx-auto d-block" src="${data.data[0].image_url}"> <hr>
        `;
        modalContainer.appendChild(imgDiv);

        // Adding Some details
        const detailsDiv = createDiv();
        detailsDiv.innerHTML = `
        <p>${data.data[0].details}</p>
        `;
        modalContainer.appendChild(detailsDiv);

        // Adding Author Details, views and ratings
        const authorDiv = createDiv();
        authorDiv.innerHTML = `
        <div class="pt-3 row row-cols-1 g-4 text-center">
            <div class="col-md-6 d-md-flex align-items-center">
                <img class="img-fluid rounded-circle w-25 me-2" src="${data.data[0].author.name !== null ? data.data[0].author.img : ''}">
                <div>
                    <h6>${data.data[0].author.name !== null ? data.data[0].author.name : 'No Author'}</h6>
                    <p class="fs-8">${data.data[0].author.published_date !== null ? data.data[0].author.published_date : '-/-/-'}</p>
                </div>
            </div>
            <div class="col-md-3 d-md-flex align-items-center">
                <i class="fa-solid fa-eye me-1"></i>
                <b class="fs-8">${data.data[0].total_view === null ? '0' : data.data[0].total_view}k</b>
            </div>
            <div class="col-md-3 d-md-flex align-items-center">
                <i class="fa-solid fa-star me-1"></i>
                <b class="fs-8">${data.data[0].rating.number}</b>
            </div>
        </div>
        `;
        modalContainer.appendChild(authorDiv);
    }
    catch (error) {
        console.log('An Error Occurred: ', error);
    }
};

// Function for creating a div element
const createDiv = () => document.createElement('div');