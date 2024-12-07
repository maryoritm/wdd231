document.addEventListener('DOMContentLoaded', () => {
  const businessCardsContainer = document.getElementById('business-cards');
  const toggleViewButton = document.getElementById('toggle-view');
  let isGridView = true;

  // Fetch business members data
  fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
      displayBusinessCards(data);
      // Toggle between grid and list view
      toggleViewButton.addEventListener('click', () => {
        isGridView = !isGridView;
        toggleViewButton.textContent = isGridView ? 'Toggle List View' : 'Toggle Grid View';
        displayBusinessCards(data);
      });
    })
    .catch(error => console.error('Error fetching business data:', error));

  // Function to display the business cards
  function displayBusinessCards(data) {
    businessCardsContainer.innerHTML = ''; // Clear container
    businessCardsContainer.style.display = isGridView ? 'grid' : 'block';
    businessCardsContainer.style.gridTemplateColumns = isGridView ? 'repeat(3, 1fr)' : 'none';

    data.forEach(member => {
      const card = document.createElement('div');
      card.className = 'business-card';

      // Populate card content
      card.innerHTML = `
              <img src="${member.image}" alt="${member.name}">
              <h3>${member.name}</h3>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <a href="${member.website}" target="_blank">Visit Website</a>
              <p><strong>Membership:</strong> ${member.membership_level}</p>
          `;

      if (!isGridView) {
        card.style.marginBottom = '20px';
        card.style.textAlign = 'left';
      }

      businessCardsContainer.appendChild(card);
    });
  }

  // Function to update the current date and time
  function updateDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const currentDate = new Date();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    currentDateTimeElement.textContent = currentDate.toLocaleString('en-US', options);
  }

  // Update the date and time every second
  setInterval(updateDateTime, 1000);

  // Initially set the date and time
  updateDateTime();
});

// Weather section (already handled in index.html)

// Spotlight businesses (Gold and Silver members only)
const spotlightCards = document.getElementById('spotlight-cards');
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    // Filter Gold and Silver members
    const filteredMembers = data.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');

    // Randomly select 2 or 3 spotlights
    const spotlightMembers = [];
    while (spotlightMembers.length < 3 && filteredMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredMembers.length);
      spotlightMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
    }

    // Display spotlights
    spotlightMembers.forEach(member => {
      const card = document.createElement('div');
      card.className = 'business-card';
      card.innerHTML = ` 
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><strong>Membership:</strong> ${member.membership_level}</p>
    `;
      spotlightCards.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching member data:', error));
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});
const timestampElement = document.getElementById('timestamp');
if (timestampElement) {
    timestampElement.value = new Date().toISOString();
} else {
    console.warn('El elemento con id="timestamp" no existe.');
}
