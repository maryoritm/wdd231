document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');

    const events = [
        { name: 'Weekly Practice', date: '2024-12-15' },
        { name: 'Monthly Tournament', date: '2024-12-22' },
        { name: 'Tennis Clinic', date: '2024-12-30' }
    ];

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
        `;
        eventsContainer.appendChild(eventCard);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
