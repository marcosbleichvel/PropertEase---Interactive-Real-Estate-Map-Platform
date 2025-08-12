// Configuração do Mapbox (você precisará de uma chave de acesso)
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29zMjIwMSIsImEiOiJjbWU3ZG9vMTEwM2dnMmpvNnlpbXFkanIzIn0.PoCrKzd3Z8DQdvjrplQGWw';

// Dados simulados de imóveis
    const properties = [
    {
        id: 1,
        title: "Casa Moderna em Beverly Hills",
        price: "$2,500,000",
        priceValue: 2500000,
        location: "Beverly Hills, CA",
        coordinates: [-118.4004, 34.0736],
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3200,
        type: "house",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        status: "available",
        action: "buy", // comprar
        description: "Casa luxuosa com vista para a cidade, acabamentos de alta qualidade e localização privilegiada.",
        features: ["Piscina", "Garagem 2 carros", "Vista para cidade", "Acabamentos de luxo"],
        yearBuilt: 2020
    },
    {
        id: 2,
        title: "Apartamento no Downtown LA",
        price: "$850,000",
        priceValue: 850000,
        location: "Downtown Los Angeles, CA",
        coordinates: [-118.2437, 34.0522],
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        type: "apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        status: "available",
        action: "buy", // comprar
        description: "Apartamento moderno no coração da cidade, com vista para o skyline e fácil acesso ao transporte.",
        features: ["Vista para skyline", "Academia", "Rooftop", "Concierge 24h"],
        yearBuilt: 2018
    },
    {
        id: 3,
        title: "Villa com Piscina em Malibu",
        price: "$4,200,000",
        priceValue: 4200000,
        location: "Malibu, CA",
        coordinates: [-118.7798, 34.0259],
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4500,
        type: "house",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        status: "available",
        action: "buy", // comprar
        description: "Villa de luxo com vista para o oceano, piscina infinita e acabamentos exclusivos.",
        features: ["Vista para oceano", "Piscina infinita", "Spa", "Cinema privativo"],
        yearBuilt: 2019
    },
    {
        id: 4,
        title: "Casa Familiar em Santa Monica",
        price: "$1,800,000",
        priceValue: 1800000,
        location: "Santa Monica, CA",
        coordinates: [-118.4912, 34.0195],
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2100,
        type: "house",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
        status: "sold",
        action: "buy", // comprar
        description: "Casa familiar em bairro tranquilo, próxima à praia e com excelentes escolas.",
        features: ["Próximo à praia", "Escolas próximas", "Bairro tranquilo", "Jardim"],
        yearBuilt: 2015
    },
    {
        id: 5,
        title: "Loft Industrial em Venice",
        price: "$3,200/mês",
        priceValue: 3200,
        location: "Venice, CA",
        coordinates: [-118.4695, 33.9850],
        bedrooms: 1,
        bathrooms: 1,
        sqft: 1800,
        type: "apartment",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        status: "available",
        action: "rent", // alugar
        description: "Loft com design industrial, teto alto e localização artística no coração de Venice.",
        features: ["Design industrial", "Teto alto", "Localização artística", "Estúdio"],
        yearBuilt: 2017
    },
    {
        id: 6,
        title: "Mansão em Bel Air",
        price: "$8,500,000",
        priceValue: 8500000,
        location: "Bel Air, CA",
        coordinates: [-118.4595, 34.0806],
        bedrooms: 6,
        bathrooms: 7,
        sqft: 8500,
        type: "house",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
        status: "available",
        action: "buy", // comprar
        description: "Mansão de luxo com vista panorâmica, spa, cinema privativo e segurança 24h.",
        features: ["Vista panorâmica", "Spa", "Cinema privativo", "Segurança 24h"],
        yearBuilt: 2021
    },
    {
        id: 7,
        title: "Apartamento de Luxo para Alugar",
        price: "$5,500/mês",
        priceValue: 5500,
        location: "West Hollywood, CA",
        coordinates: [-118.3764, 34.0900],
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1500,
        type: "apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        status: "available",
        action: "rent", // alugar
        description: "Apartamento de luxo com acabamentos premium e localização privilegiada.",
        features: ["Acabamentos premium", "Vista para cidade", "Academia", "Piscina"],
        yearBuilt: 2020
    },
    {
        id: 8,
        title: "Casa para Vender - Oportunidade Única",
        price: "$1,200,000",
        priceValue: 1200000,
        location: "Culver City, CA",
        coordinates: [-118.3965, 34.0211],
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        type: "house",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
        status: "available",
        action: "sell", // vender
        description: "Casa em excelente localização, pronta para morar ou investir.",
        features: ["Localização excelente", "Pronta para morar", "Jardim", "Garagem"],
        yearBuilt: 2016
    }
];

// Variáveis globais
let map;
let markers = [];
let popup;
let currentView = 'grid';
let filteredProperties = [...properties];
let mapInitialized = false;
let currentAction = 'buy'; // ação atual: buy, rent, sell

// Inicialização do mapa
function initMap() {
    // Limpa o conteúdo do container do mapa antes de inicializar
    const mapContainer = document.getElementById('map');
    if (mapContainer) mapContainer.innerHTML = '';
    try {
        // Verificar se o Mapbox está disponível
        if (typeof mapboxgl === 'undefined') {
            console.log('Mapbox não está disponível, inicializando sem mapa');
            showMapPlaceholder();
            return;
        }

        // Verificar se a chave é válida
        if (mapboxgl.accessToken === 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example') {
            console.log('Chave do Mapbox inválida, mostrando placeholder');
            showMapPlaceholder();
            return;
        }

        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-118.2437, 34.0522], // Los Angeles
            zoom: 10
        });

        // Adicionar controles de navegação
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
        
        // Adicionar controle de geolocalização
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }), 'top-right');

        // Carregar imóveis quando o mapa estiver carregado
        map.on('load', () => {
            addPropertiesToMap();
            mapInitialized = true;
        });

        map.on('error', (e) => {
            console.log('Erro no mapa:', e);
            showMapPlaceholder();
        });

    } catch (error) {
        console.log('Erro ao inicializar mapa:', error);
        showMapPlaceholder();
    }
}

// Mostrar placeholder quando o mapa não estiver disponível
function showMapPlaceholder() {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #f8fafc; color: #64748b; text-align: center; padding: 2rem;">
            <i class="fas fa-map" style="font-size: 3rem; margin-bottom: 1rem; color: #667eea;"></i>
            <h3 style="margin-bottom: 0.5rem; color: #1e293b;">Mapa Temporariamente Indisponível</h3>
            <p style="margin-bottom: 1rem;">Para ver o mapa interativo, configure uma chave válida do Mapbox</p>
            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 300px;">
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Como configurar:</strong></p>
                <ol style="text-align: left; font-size: 0.8rem;">
                    <li>Acesse <a href="https://mapbox.com" target="_blank" style="color: #667eea;">mapbox.com</a></li>
                    <li>Crie uma conta gratuita</li>
                    <li>Obtenha sua chave de acesso</li>
                    <li>Substitua no arquivo script.js</li>
                </ol>
            </div>
        </div>
    `;
}

// Adicionar imóveis ao mapa
function addPropertiesToMap() {
    if (!map || !mapInitialized) return;
    
    properties.forEach(property => {
        // Criar elemento HTML para o marcador
        const el = document.createElement('div');
        el.className = 'property-marker';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.borderRadius = '50%';
        el.style.background = getMarkerColor(property.status);
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        // Criar marcador
        const marker = new mapboxgl.Marker(el)
            .setLngLat(property.coordinates)
            .addTo(map);

        // Criar popup
        const popupContent = createPopupContent(property);
        const popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false,
            maxWidth: '300px'
        }).setHTML(popupContent);

        // Adicionar popup ao marcador
        marker.setPopup(popup);

        // Armazenar referência do marcador
        markers.push({
            marker: marker,
            property: property
        });

        // Evento de clique no marcador
        marker.getElement().addEventListener('click', () => {
            highlightProperty(property.id);
            scrollToProperty(property.id);
        });
    });
}

// Obter cor do marcador baseado no status
function getMarkerColor(status) {
    switch(status) {
        case 'available': return '#059669';
        case 'sold': return '#dc2626';
        case 'rented': return '#7c3aed';
        default: return '#059669';
    }
}

// Criar conteúdo do popup
function createPopupContent(property) {
    return `
        <div class="popup-content">
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
            <h4 style="margin: 0 0 8px 0; color: #1e293b;">${property.title}</h4>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">${property.location}</p>
            <p style="margin: 0 0 8px 0; font-size: 18px; font-weight: 700; color: #059669;">${property.price}</p>
            <div style="display: flex; gap: 15px; font-size: 14px; color: #64748b;">
                <span>🛏️ ${property.bedrooms} quartos</span>
                <span>🚿 ${property.bathrooms} banheiros</span>
                <span>📏 ${property.sqft} ft²</span>
            </div>
            <div style="margin-top: 10px;">
                <span class="property-status ${property.status}" style="background: ${getMarkerColor(property.status)}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                    ${getStatusText(property.status)}
                </span>
            </div>
        </div>
    `;
}

// Obter texto do status
function getStatusText(status) {
    switch(status) {
        case 'available': return 'Disponível';
        case 'sold': return 'Vendido';
        case 'rented': return 'Alugado';
        default: return 'Disponível';
    }
}

// Exibir imóveis na lista
function displayProperties(propertiesToShow) {
    const listingsGrid = document.getElementById('listings-grid');
    listingsGrid.innerHTML = '';

    if (propertiesToShow.length === 0) {
        listingsGrid.innerHTML = `
            <div class="empty-state">
                <h3>Nenhum imóvel encontrado</h3>
                <p>Tente ajustar os filtros de busca</p>
            </div>
        `;
        return;
    }

    propertiesToShow.forEach(property => {
        const propertyCard = createPropertyCard(property);
        listingsGrid.appendChild(propertyCard);
    });

    // Aplicar visualização atual
    applyViewMode();
}

// Criar card de imóvel
function createPropertyCard(property) {
            const card = document.createElement('div');
    card.className = 'property-card';
    card.dataset.propertyId = property.id;

    // Determinar o texto da ação baseado no tipo
    let actionText = '';
    let actionClass = '';
    
    switch(property.action) {
        case 'buy':
            actionText = 'Comprar';
            actionClass = 'btn-buy';
            break;
        case 'rent':
            actionText = 'Alugar';
            actionClass = 'btn-rent';
            break;
        case 'sell':
            actionText = 'Vender';
            actionClass = 'btn-sell';
            break;
    }

            card.innerHTML = `
        <div class="property-status ${property.status}">${getStatusText(property.status)}</div>
        <img src="${property.image}" alt="${property.title}" class="property-image">
        <div class="property-info">
            <h4>${property.title}</h4>
            <div class="property-location">
                📍 ${property.location}
            </div>
            <div class="property-price">${property.price}</div>
            <div class="property-features">
                <span>🛏️ ${property.bedrooms} quartos</span>
                <span>🚿 ${property.bathrooms} banheiros</span>
                <span>📏 ${property.sqft} ft²</span>
            </div>
            <div class="property-actions">
                <button class="btn-details" onclick="showPropertyDetails(${property.id})">
                    <i class="fas fa-info-circle"></i> Ver Detalhes
                </button>
                <button class="btn-action ${actionClass}" onclick="handlePropertyAction('${property.action}', ${property.id})">
                    <i class="fas fa-${property.action === 'buy' ? 'shopping-cart' : property.action === 'rent' ? 'key' : 'tag'}"></i> ${actionText}
                </button>
            </div>
                </div>
            `;

    // Evento de clique no card
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-details') && !e.target.closest('.btn-action')) {
            highlightProperty(property.id);
            if (mapInitialized) {
                flyToProperty(property.coordinates);
            }
        }
    });

    return card;
}

// Aplicar modo de visualização
function applyViewMode() {
    const listingsGrid = document.getElementById('listings-grid');
    listingsGrid.className = `listings-grid ${currentView}-view`;
}

// Destacar imóvel selecionado
function highlightProperty(propertyId) {
    // Remover destaque anterior
    document.querySelectorAll('.property-card').forEach(card => {
        card.classList.remove('active');
    });

    // Destacar card selecionado
    const selectedCard = document.querySelector(`[data-property-id="${propertyId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('active');
        selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Voar para imóvel no mapa
function flyToProperty(coordinates) {
    if (!map || !mapInitialized) return;
    
    map.flyTo({
        center: coordinates,
        zoom: 15,
        duration: 2000
    });
}

// Rolar para imóvel na lista
function scrollToProperty(propertyId) {
    const propertyCard = document.querySelector(`[data-property-id="${propertyId}"]`);
    if (propertyCard) {
        propertyCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Atualizar contador de resultados
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    const visibleProperties = document.querySelectorAll('.property-card').length;
    resultsCount.textContent = visibleProperties;
}

// Função de busca e filtros
function searchProperties() {
    const searchInput = document.querySelector('#search-input').value.toLowerCase();
    const priceFilter = document.querySelector('#price-filter').value;
    const bedroomsFilter = document.querySelector('#bedrooms-filter').value;
    const typeFilter = document.querySelector('#type-filter').value;
    
    filteredProperties = properties.filter(property => {
        // Filtro por ação (comprar, alugar, vender)
        const actionMatch = property.action === currentAction;
        
        // Filtro de texto
        const textMatch = property.title.toLowerCase().includes(searchInput) ||
                          property.location.toLowerCase().includes(searchInput) ||
                          property.description.toLowerCase().includes(searchInput);
        
        // Filtro de preço
        let priceMatch = true;
        if (priceFilter) {
            const isRent = property.action === 'rent';
            const price = isRent ? property.priceValue : property.priceValue;
            
            switch(priceFilter) {
                case '0-500k':
                    priceMatch = isRent ? price <= 5000 : price <= 500000;
                    break;
                case '500k-1m':
                    priceMatch = isRent ? price > 5000 && price <= 10000 : price > 500000 && price <= 1000000;
                    break;
                case '1m-2m':
                    priceMatch = isRent ? price > 10000 && price <= 20000 : price > 1000000 && price <= 2000000;
                    break;
                case '2m+':
                    priceMatch = isRent ? price > 20000 : price > 2000000;
                    break;
            }
        }
        
        // Filtro de quartos
        let bedroomsMatch = true;
        if (bedroomsFilter) {
            if (bedroomsFilter === '4+') {
                bedroomsMatch = property.bedrooms >= 4;
            } else {
                bedroomsMatch = property.bedrooms === parseInt(bedroomsFilter);
            }
        }
        
        // Filtro de tipo
        let typeMatch = true;
        if (typeFilter) {
            typeMatch = property.type === typeFilter;
        }
        
        return actionMatch && textMatch && priceMatch && bedroomsMatch && typeMatch;
    });

    displayProperties(filteredProperties);
    updateResultsCount();
    if (mapInitialized) {
        updateMapMarkers(filteredProperties);
    }
}

// Atualizar marcadores do mapa
function updateMapMarkers(visibleProperties) {
    if (!mapInitialized) return;
    
    // Ocultar todos os marcadores
    markers.forEach(markerData => {
        markerData.marker.remove();
    });

    // Mostrar apenas marcadores dos imóveis visíveis
    markers.forEach(markerData => {
        if (visibleProperties.some(prop => prop.id === markerData.property.id)) {
            markerData.marker.addTo(map);
        }
    });
}

// Ordenar imóveis
function sortProperties(sortBy) {
    const sortedProperties = [...filteredProperties];
    
    switch(sortBy) {
        case 'price-low':
            sortedProperties.sort((a, b) => a.priceValue - b.priceValue);
            break;
        case 'price-high':
            sortedProperties.sort((a, b) => b.priceValue - a.priceValue);
            break;
        case 'newest':
            sortedProperties.sort((a, b) => b.yearBuilt - a.yearBuilt);
            break;
        case 'sqft':
            sortedProperties.sort((a, b) => b.sqft - a.sqft);
            break;
        default:
            // Relevância - manter ordem original
            break;
    }
    
    displayProperties(sortedProperties);
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('property-modal');
    modal.style.display = 'none';
}

// Mostrar detalhes do imóvel
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const modal = document.getElementById('property-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 300px; object-fit: cover;">
            <div class="modal-status ${property.status}">${getStatusText(property.status)}</div>
        </div>
        <div class="modal-body" style="padding: 2rem;">
            <h2 style="margin-bottom: 1rem; color: #1e293b;">${property.title}</h2>
            <p style="color: #64748b; margin-bottom: 1.5rem; font-size: 1.1rem;">${property.description}</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div class="modal-feature">
                    <h4 style="color: #1e293b; margin-bottom: 0.5rem;">📍 Localização</h4>
                    <p style="color: #64748b;">${property.location}</p>
                </div>
                <div class="modal-feature">
                    <h4 style="color: #1e293b; margin-bottom: 0.5rem;">💰 Preço</h4>
                    <p style="color: #059669; font-size: 1.5rem; font-weight: 700;">${property.price}</p>
                </div>
                <div class="modal-feature">
                    <h4 style="color: #1e293b; margin-bottom: 0.5rem;">🏠 Detalhes</h4>
                    <p style="color: #64748b;">${property.bedrooms} quartos • ${property.bathrooms} banheiros • ${property.sqft} ft²</p>
                </div>
                <div class="modal-feature">
                    <h4 style="color: #1e293b; margin-bottom: 0.5rem;">📅 Ano</h4>
                    <p style="color: #64748b;">${property.yearBuilt}</p>
                </div>
            </div>
            
            <div class="modal-features">
                <h4 style="color: #1e293b; margin-bottom: 1rem;">✨ Características</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${property.features.map(feature => `<span style="background: #f1f5f9; color: #475569; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${feature}</span>`).join('')}
                </div>
            </div>
            
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <button class="btn-primary" onclick="contactAgent(${property.id})">
                    <i class="fas fa-phone"></i> Falar com Corretor
                </button>
                <button class="btn-secondary" onclick="scheduleVisit(${property.id})">
                    <i class="fas fa-calendar"></i> Agendar Visita
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Adicionar event listener para o botão de fechar após criar o conteúdo
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
}

// Contatar corretor
function contactAgent(propertyId) {
    alert(`Entrando em contato com o corretor para o imóvel ${propertyId}`);
}

// Agendar visita
function scheduleVisit(propertyId) {
    alert(`Agendando visita para o imóvel ${propertyId}`);
}

// Controles de visualização
function changeViewMode(viewMode) {
    currentView = viewMode;
    
    // Atualizar botões
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${viewMode}"]`).classList.add('active');
    
    // Aplicar visualização
    applyViewMode();
}

// Controles do mapa
function toggleFullscreen() {
    if (!mapInitialized) return;
    
    const mapContainer = document.getElementById('map');
    if (!document.fullscreenElement) {
        mapContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function goToMyLocation() {
    if (!mapInitialized) return;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            map.flyTo({
                center: [position.coords.longitude, position.coords.latitude],
                zoom: 15,
                duration: 2000
            });
        });
    }
}

// Loading
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Navegação entre ações (Comprar, Alugar, Vender)
function changeAction(newAction) {
    currentAction = newAction;
    
    // Atualizar navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-action="${newAction}"]`).classList.add('active');
    
    // Atualizar interface
    updateInterfaceForAction(newAction);
    
    // Aplicar filtros
    searchProperties();
}

// Atualizar interface baseado na ação
function updateInterfaceForAction(action) {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const listingsTitle = document.getElementById('listings-title');
    
    switch(action) {
        case 'buy':
            heroTitle.textContent = 'Encontre sua casa dos sonhos';
            heroSubtitle.textContent = 'Milhares de imóveis exclusivos para compra em Los Angeles e região';
            listingsTitle.textContent = 'Imóveis para Comprar em Los Angeles';
            break;
        case 'rent':
            heroTitle.textContent = 'Alugue sua próxima casa';
            heroSubtitle.textContent = 'Apartamentos e casas para aluguel em Los Angeles e região';
            listingsTitle.textContent = 'Imóveis para Alugar em Los Angeles';
            break;
        case 'sell':
            heroTitle.textContent = 'Venda seu imóvel';
            heroSubtitle.textContent = 'Conectamos você com compradores qualificados em Los Angeles';
            listingsTitle.textContent = 'Imóveis para Venda em Los Angeles';
            break;
    }
}

// Manipular ação do imóvel (comprar, alugar, vender)
function handlePropertyAction(action, propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    switch(action) {
        case 'buy':
            alert(`Iniciando processo de compra para: ${property.title}\nPreço: ${property.price}\nEntre em contato com nosso corretor!`);
            break;
        case 'rent':
            alert(`Iniciando processo de aluguel para: ${property.title}\nPreço: ${property.price}/mês\nEntre em contato com nosso corretor!`);
            break;
        case 'sell':
            alert(`Iniciando processo de venda para: ${property.title}\nPreço: ${property.price}\nNossa equipe entrará em contato!`);
            break;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    showLoading();
    
    // Inicializar mapa (pode falhar sem chave válida)
    initMap();
    
    // Sempre mostrar os imóveis, independente do mapa
    displayProperties(filteredProperties);
    updateResultsCount();
    
    // Esconder loading após um tempo
    setTimeout(hideLoading, 1000);

    // Event listeners para navegação
    document.querySelectorAll('.nav-link[data-action]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const action = link.dataset.action;
            changeAction(action);
        });
    });

    // Event listeners para busca
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('input', searchProperties);

    // Event listeners para filtros
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', searchProperties);
    });

    // Event listener para botão de busca
    const searchBtn = document.querySelector('#search-btn');
    searchBtn.addEventListener('click', searchProperties);

    // Event listeners para controles de visualização
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeViewMode(button.dataset.view);
        });
    });

    // Event listener para ordenação
    const sortSelect = document.querySelector('#sort-select');
    sortSelect.addEventListener('change', (e) => {
        sortProperties(e.target.value);
    });

    // Event listeners para controles do mapa
    const fullscreenBtn = document.querySelector('#fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    const locationBtn = document.querySelector('#location-btn');
    if (locationBtn) {
        locationBtn.addEventListener('click', goToMyLocation);
    }

    // Modal
    const modal = document.getElementById('property-modal');
    const closeBtn = document.getElementById('modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Adicionar tecla ESC para fechar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Busca em tempo real
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(searchProperties, 300);
    });
    
    // Inicializar com ação padrão (comprar)
    changeAction('buy');
});

// Exportar funções para uso global
window.propertyManager = {
    addNewProperty: (propertyData) => {
        properties.push(propertyData);
        if (mapInitialized) {
            addPropertiesToMap();
        }
        displayProperties(filteredProperties);
        updateResultsCount();
    },
    removeProperty: (propertyId) => {
        const index = properties.findIndex(p => p.id === propertyId);
        if (index > -1) {
            properties.splice(index, 1);
            
            // Remover marcador do mapa
            if (mapInitialized) {
                const markerData = markers.find(m => m.property.id === propertyId);
                if (markerData) {
                    markerData.marker.remove();
                    markers = markers.filter(m => m.property.id !== propertyId);
                }
            }
            
            displayProperties(filteredProperties);
            updateResultsCount();
        }
    },
    updateProperty: (propertyId, updates) => {
        const property = properties.find(p => p.id === propertyId);
        if (property) {
            Object.assign(property, updates);
            
            // Atualizar marcador no mapa
            if (mapInitialized) {
                const markerData = markers.find(m => m.property.id === propertyId);
                if (markerData) {
                    markerData.marker.remove();
                    addPropertiesToMap();
                }
            }
            
            displayProperties(filteredProperties);
        }
    },
    searchProperties,
    showPropertyDetails,
    changeViewMode,
    changeAction,
    handlePropertyAction
};
