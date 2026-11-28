const messageDisplay = document.getElementById('visit-message');

// 2. Constants for time conversion
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const now = Date.now();

const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const timeDifference = now - Number(lastVisit);
  const daysBetween = Math.floor(timeDifference / MS_PER_DAY);


  if (daysBetween < 1) {
    messageDisplay.textContent = "Back so soon! Awesome!";
    messageDisplay.classList.add('soon');
  } else {
    const dayLabel = daysBetween === 1 ? "day" : "days";
    messageDisplay.textContent = `You last visited ${daysBetween} ${dayLabel} ago.`;
    messageDisplay.classList.add('returning');
  }
}

localStorage.setItem('lastVisit', now.toString());

async function getBusiness() {
    try {
        const response = await fetch("data/businesses.json");

        if (!response.ok) {
            throw new Error("Could not fetch business data");
        }

        const data = await response.json();
        return data

    } catch (error) {
        console.error("Membership loading error:", error);
        membershipSelect.disabled = true;
    }
}


async function discoverCard() {
  const business = await getBusiness();
  const grid = document.querySelector("#discover-grid");

  if (!grid || !business) {
    console.error("Business data or discover grid not found.");
    return;
  }

  grid.innerHTML = "";

  const items = business.slice(0, 8);

  items.forEach((item, index) => {
    const article = document.createElement("article");
    article.classList.add("business-card", `card-${index + 1}`);

    const image = document.createElement("img");
    image.classList.add("card-photo");
    image.src = item.photo;
    image.alt = item.title;
    image.loading = "lazy";

    const title = document.createElement("h2");
    title.classList.add("discover-title");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("discover-description");
    description.textContent = item.description;

    const address = document.createElement("p");
    address.classList.add("discover-address");
    address.textContent = item.address;

    const link = document.createElement("a");
    link.classList.add("discover-btn");
    link.href = item.link;
    link.textContent = `Learn More About ${item.title}`;

    article.append(
      image,
      title,
      description,
      address,
      link
    );

    grid.appendChild(article);
  });
}

discoverCard();


discoverCard();