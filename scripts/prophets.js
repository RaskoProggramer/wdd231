const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.surname}`;
        portrait.setAttribute('src', prophet.image);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.surname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '340');

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData();
displayProphets();