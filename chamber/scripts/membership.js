
const membershipSelect = document.querySelector('#membership');
const membershipModal = document.querySelector('#membership-modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('#close-modal');

let membershipBenefits = [];

// Fetch membership data
async function getMembership() {
    try {
        const response = await fetch("data/membership.json");

        if (!response.ok) {
            throw new Error("Could not fetch membership data");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Membership data must be an array");
        }

        membershipBenefits = data;

        // Enable dropdown after successful loading
        membershipSelect.disabled = false;

    } catch (error) {
        console.error("Membership loading error:", error);
        membershipSelect.disabled = true;
    }
}

// Listen for membership selection
membershipSelect.addEventListener('change', () => {

    const level = membershipSelect.value.toLowerCase();

    const membership = membershipBenefits.find(
        member => member.level?.toLowerCase() === level
    );

    if (!membership) {
        console.error("Membership not found:", level);
        return;
    }

    // Display membership information
    modalContent.innerHTML = `
        <h2>${membership.title}</h2>

        <p>${membership.description}</p>

        <h3>Membership Benefits</h3>

        <ul>
            ${membership.benefits.map(benefit =>
                `<li>${benefit}</li>`
            ).join('')}
        </ul>
    `;

    // Open modal
    membershipModal.showModal();
});

// Close modal
closeModal.addEventListener('click', () => {
    membershipModal.close();
});

// Load membership data
getMembership();
