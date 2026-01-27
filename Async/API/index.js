let currentPage = 0;

/**
 * TODO : Récupérer les jeux vidéo en rabais de la plateforme Steam à l'aide de l'API CheapShark (20 à la fois)
 * Afficher les résultats dans la page.
 * - Suivre le format présenté dans le fichier index.html pour chaque vignette de jeu.
 * @param {number} pageIndex - L'index de la page à récupérer, par défaut 0.
 * @returns {Promise<void>} rien
 */

async function fetchGames(pageIndex = 0) {
    const res = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=20&pageNumber=${pageIndex}`);
    const games = await res.json();

    const parent = document.getElementById('parent');
    parent.innerHTML= '';
    games.forEach(game => {
        const div = document.createElement('div');
        div.className = 'game';
        div.innerHTML = `
        <h2>${game.title}</h2>
        <p>Price : $${game.salePrice}</p>
        <p>Normal Price :$${game.normalPrice}</p>
        <p>Meta Score :${ game.metacriticScore}</p>
        <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank">
            <img src="${game.thumb}" alt="${game.title}" />
        </a>
        </div>`;
        parent.appendChild(div);

    })
}

// TODO : Récupérer les jeux vidéo en rabais de la page 0
const loadGamesButton = document.getElementById('loadButton');
loadGamesButton.addEventListener( 'click', () => {
    currentPage = 0;
    fetchGames(currentPage);
} );
// TODO : Récuprer les prochains 20 jeux vidéo en rabais et activer le bouton "Previous Page"
const nextPageButton = document.getElementById('nextPage');
nextPageButton.addEventListener( 'click', () => {
    currentPage++;
    fetchGames(currentPage);
    prevPageButton.disabled = false;
});
// TODO : Récupérer les 20 jeux vidéo précédents et désactiver le bouton "Previous Page" si on est à la première page
const prevPageButton = document.getElementById('prevPage');
prevPageButton.addEventListener( 'click', () => {
    if (currentPage > 0) {
        currentPage--;
        // if (currentPage == 0) {
        //     prevPageButton.disabled = true;
        // }
        prevPageButton.disabled = currentPage === 0;
        fetchGames(currentPage);
    }
});