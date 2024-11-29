const members = [
    {
        "name": "Sample Company One",
        "address": "123 Business Rd, Cityville",
        "phone": "(123) 456-7890",
        "website": "https://samplecompany1.com",
        "image": "images/company.webp",
        "membership_level": "Gold"
    },
    {
        "name": "Sample Company Two",
        "address": "456 Market St, Townsville",
        "phone": "(987) 654-3210",
        "website": "https://samplecompany2.com",
        "image": "images/company.webp", // 
        "membership_level": "Silver"
    },
    {
        "name": "Sample Company Three",
        "address": "789 Commerce Ave, Cityville",
        "phone": "(555) 123-4567",
        "website": "https://samplecompany3.com",
        "image": "images/company.webp",
        "membership_level": "Platinum"
    }
];

const spotlightContainer = document.getElementById('spotlight-cards');

members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('business-card');
    card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo"> <!-- Changed member.logo to member.image -->
        <h3>${member.name}</h3> <!-- Changed member.company to member.name -->
        <p>${member.membership_level} Member</p> <!-- Changed member.membership to member.membership_level -->
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    spotlightContainer.appendChild(card);
});
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString(); // Hora en formato local
    document.getElementById('currentTime').textContent = formattedTime;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

