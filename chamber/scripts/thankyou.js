
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

const modifiedDate = new Date(date).toLocaleDateString();

applicationDetails.innerHTML = `
    <h2>Application Details</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${mobile}</p>
    <p><strong>Business Name:</strong> ${businessName}</p>
    <p><strong>Date:</strong> ${modifiedDate}</p>
    `;

