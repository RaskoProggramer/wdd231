const business = [{
    businessName: "Chauke Corncelia",
    businessTagline: "Professional legal guidance built around your needs, your interests and the matters that matter most.",
    email: "info@chaukecattorneys.co.za",
    phone: "+27 10 746 4808",
    url: "https://chaukecattorneys.co.za/",
},
{
    businessName: "Young Barber",
    businessTagline: "Five spots. One standard. Always sharp.",
    email: "info@youngbarber.co.za",
    phone: "+27 81 404 4756",
    url: "https://youngbarber.co.za/"
},
{
    businessName: "Alrode Fabric & Lifestyle centre",
    businessTagline: "Discover fabrics, haberdashery and homeware at Alrode Fabrics to bring your creative ideas to life and make your home your own.",
    email: "info@alrodefabric.co.za",
    phone: "+27 76 929 2409",
    url: "https://alrodefabric.co.za/"
},
{
    businessName: "Benvenuti",
    businessTagLine: "weddings and functions venue",
    email: "info@benvenuti.co.za",
    phone: "+27 82 782 1184",
    url: "https://benvenuti.co.za/"
},
{
    busonessName: "Ceba Projects",
    businessTagline: "Build with excellence. Inspired by innovation.",
    email: "info@cebaprojects.co.za",
    phone: "+27 68 103 3534",
    url: "https://cebaprojects.co.za/"
}]

const directory = document.querySelector('#directory');

function displayBusinness(business) {
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