const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

const siteContent = [
    { title: 'Página Inicial', url: 'index.html', content: 'começo, comeco, inicio, pagina inicial' },
    { title: 'Introdução', url: 'intro.html', content: 'introdução, começo, iniciante, saude, energia, habilidade, habilidades' },
    { title: 'A Fazenda', url: 'fazenda.html', content: 'A fazenda, fazenda, fazendas' },
    { title: 'Aldeões', url: 'villagers.html', content: 'aldeões, aldeoes, villagers' },
    { title: 'Plantações', url: 'plantas.html', content: 'plantações, plantacoes, animais' },
    { title: 'Ferramentas', url: 'ferramenta.html', content: 'ferramenta, arma, armas' },
    { title: 'Mapa', url: 'mapa.html', content: 'mapa' },
    { title: 'Estações', url: 'clima.html', content: 'estacoes, clima, climas, estação' },
    { title: 'Variados', url: 'variados.html', content: 'variados' },
    { title: 'Copyrights', url: 'copyright.html', content: 'copyright, direito de uso' }
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length > 0) {
        const filteredResults = siteContent.filter(page => 
            page.title.toLowerCase().includes(query) || 
            page.content.toLowerCase().includes(query)
        );
        displayResults(filteredResults);
    } else {
        resultsContainer.innerHTML = '';
    }
});

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = result.title;
            resultItem.addEventListener('click', () => {
                window.location.href = result.url;
            });
            resultsContainer.appendChild(resultItem);
        });
    }

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
        resultsContainer.innerHTML = '';
    }
});