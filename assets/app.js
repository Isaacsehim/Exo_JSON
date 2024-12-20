// Récupérer le conteneur principal des cartes
let container = document.getElementById('container');

// Ajouter le titre et les informations générales
let header = document.createElement('div');
header.id = 'header';
header.innerHTML = `
    <h1>${data.squadName}</h1>
    <h2>
        <strong>Hometown:</strong> ${data.homeTown} // 
        <strong>Formed:</strong> ${data.formed}
    </h2>
`;
// Insérer le header avant le conteneur des cartes
document.body.insertBefore(header, container);

// Ajouter les cartes pour chaque membre de l'équipe
data.members.forEach(member => {
    // Création d'un élément carte
    let card = document.createElement('div');
    card.className = 'card';

    // Contenu de la carte
    card.innerHTML = `
        <h3>${member.name}</h3>
        <ul>
            <li>• <strong>Secret identity:</strong> ${member.secretIdentity}</li>
            <li>• <strong>Age:</strong> ${member.age}</li>
            <li>• <strong>Superpowers:</strong>
                <ul>
                    ${member.powers.map(power => `<li>${power}</li>`).join('')}
                </ul>
            </li>
        </ul>
    `;

    // Ajouter la carte au conteneur
    container.appendChild(card);
});