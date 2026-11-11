const directory = document.querySelector('#directory');

async function getBusinessData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        return data.businesses;
    } catch (error) {
        console.error('Error fetching business data:', error);
    }
}

async function displayBusiness() {
    const business = await getBusinessData();
    business.forEach((business) => {
         const card = document.createElement('article');
        card.classList.add('business-card');

        const image = document.createElement('img');
        image.src = business.image;
        image.alt = business.businessName;
        image.loading = 'lazy';

        const content = document.createElement('div');
        content.classList.add('business-content');

        const businessName = document.createElement('h2');
        businessName.textContent = business.businessName;

        const address = document.createElement('p');
        address.classList.add('address');
        address.textContent = business.address;

        const email = document.createElement('a');
        email.href = `mailto:${business.email}`;
        email.textContent = business.email;

        const phone = document.createElement('a');
        phone.href = `tel:${business.phone}`;
        phone.textContent = business.phone;

        const website = document.createElement('a');
        website.href = business.url;
        website.target = '_blank';
        website.rel = 'noopener noreferrer';
        website.textContent = 'Visit Website';
        website.classList.add('website-link');

        content.appendChild(businessName);
        content.appendChild(address);
        content.appendChild(email);
        content.appendChild(phone);
        content.appendChild(website);

        card.appendChild(image);
        card.appendChild(content);

        directory.appendChild(card);
    });
}

displayBusiness();

const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

function changeView(view) {

    if (view === "grid") {
        directory.classList.remove("list-view");

        gridButton.classList.add("active");
        listButton.classList.remove("active");

        gridButton.setAttribute("aria-pressed", "true");
        listButton.setAttribute("aria-pressed", "false");

    } else {
        directory.classList.add("list-view");

        listButton.classList.add("active");
        gridButton.classList.remove("active");

        listButton.setAttribute("aria-pressed", "true");
        gridButton.setAttribute("aria-pressed", "false");
    }
}

gridButton.addEventListener("click", () => {
    changeView("grid");
});

listButton.addEventListener("click", () => {
    changeView("list");
});