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
    const items = business.slice(0, 8);

    const grid = document.querySelector("#discover-grid");

    grid.innerHTML = items
      .map(
        (item, index) => `
        <article class="business-card card-${index + 1}">
          <img
            class="card-photo"
            src="${item.photo}"
            alt="${item.title}"
            loading="lazy"
          />
          <h2 class="card-title">${item.title}</h2>
          <p class="card-description">${item.description}</p>
           <p class="card-address">${item.address}</p>
          <a class="card-btn" href="${item.link}" aria-label="Learn more about ${item.title}>Learn More</a>
        </article>
      `
      )
      .join("");
}

discoverCard();

