
const spotlightContainer = document.querySelector("#spotlight-container");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not fetch member data");
        }

        const members = await response.json();

        displaySpotlights(members.businesses);

    } catch (error) {
        console.error("Error:", error);
        spotlightContainer.textContent =
            "Unable to load member information.";
    }
}

function shuffleMembers(members) {
    const shuffled = [...members];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// Display spotlight members
function displaySpotlights(members) {

    // Filter Gold and Silver members
    const eligibleMembers = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    // Randomly select three members
    const selectedMembers =
        shuffleMembers(eligibleMembers).slice(0, 3);

    spotlightContainer.innerHTML = "";

    selectedMembers.forEach(member => {

        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.businessName}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p class="membership ${member.membership.toLowerCase()}">
                ${member.membership} Membership
            </p>
            <a href="${member.url}" target="_blank"
               rel="noopener noreferrer">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

getMembers();
