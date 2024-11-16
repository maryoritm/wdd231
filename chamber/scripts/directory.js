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
});
