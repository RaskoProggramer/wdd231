
const applicationDetails = document.querySelector("#application-details");

// Get URL search parameters
const currentUrl = new URLSearchParams(window.location.search);

// Retrieve submitted information
const firstName = currentUrl.get('firstName');
const lastName = currentUrl.get('lastName');
const email = currentUrl.get('email');
const mobile = currentUrl.get('phone-number');
const businessName = currentUrl.get('business-name');
const date = currentUrl.get('timestamp');

applicationDetails.innerHTML = `
    <h2>Application Details</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Membership Level:</strong> ${email}</p>
    <p><strong>Membership Level:</strong> ${mobile}</p>
    <p><strong>Membership Level:</strong> ${businessName}</p>
    <p><strong>Membership Level:</strong> ${date}</p>
    `;

