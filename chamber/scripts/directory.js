const directory = document.querySelector('#directory');

async function getBusinessData() {
    try {
        const response = await fetch('../data/business.json');
        const data = await response.json();
        return data.businesses;
    } catch (error) {
        console.error('Error fetching business data:', error);
    }
}

async function displayBusiness() {
    const business = await getBusinessData();
    business.forEach((business) => {
        const card = document.createElement('section');
        const businessName = document.createElement('h2');
        const businessTagline = document.createElement('p');
        const email = document.createElement('p');
        const phone = document.createElement('p');
        const url = document.createElement('a');

        businessName.textContent = `${business.businessName}`;
        businessTagline.textContent = `${business.businessTagline}`;
        email.textContent = `${business.email}`;
        phone.textContent = `${business.phone}`;
        url.setAttribute('href', business.url);
        url.textContent = `${business.url}`;

        card.appendChild(businessName);
        card.appendChild(businessTagline);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(url);
        directory.appendChild(card);
    });
}

displayBusiness();