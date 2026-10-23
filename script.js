const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

const products = [
  {
    name: 'Shampoo Nutritivo',
    category: 'Shampoo',
    description: 'Fortalece y da brillo al cabello con fórmula nutritiva.',
    price: 1800,
    image: '01.jpeg'
  },
  {
    name: 'Acondicionador Suave',
    category: 'Acondicionador',
    description: 'Deja el cabello sedoso, manejable y con brillo natural.',
    price: 1700,
    image: '02.jpeg'
  },
  {
    name: 'Tratamiento Reparador',
    category: 'Tratamiento',
    description: 'Repara puntas y mejora la resistencia del cabello.',
    price: 2200,
    image: '03.jpeg'
  },
  {
    name: 'Crema Capilar',
    category: 'Crema',
    description: 'Ideal para controlar el frizz y dar volumen sin residuos.',
    price: 1900,
    image: '04.jpeg'
  },
  {
    name: 'Serum Gloss',
    category: 'Serum',
    description: 'Aporta brillo intenso y un acabado elegante.',
    price: 2400,
    image: '05.jpeg'
  },
  {
    name: 'Spray Protector',
    category: 'Spray',
    description: 'Protege del calor y del ambiente durante todo el día.',
    price: 2100,
    image: '06.jpeg'
  },
  {
    name: 'Mascarilla Hidratante',
    category: 'Mascarilla',
    description: 'Hidrata profundamente y restaura la suavidad.',
    price: 2600,
    image: '07.jpeg'
  },
  {
    name: 'Tónico Capilar',
    category: 'Tónico',
    description: 'Ayuda a estimular y equilibrar el cuero cabelludo.',
    price: 1600,
    image: '08.jpeg'
  },
  {
    name: 'Gel Definidor',
    category: 'Gel',
    description: 'Define ondas y rizos con un acabado natural.',
    price: 1800,
    image: '09.jpeg'
  },
  {
    name: 'Aceite Nutritivo',
    category: 'Aceite',
    description: 'Aporta nutrición y brillo sin generar pesadez.',
    price: 2300,
    image: '10.jpeg'
  },
  {
    name: 'Shampoo Anticaída',
    category: 'Shampoo',
    description: 'Cuida el cuero cabelludo y ayuda a fortalecer el cabello.',
    price: 2000,
    image: '11.jpeg'
  },
  {
    name: 'Acondicionador Volumen',
    category: 'Acondicionador',
    description: 'Da volumen y sensación de limpieza inmediata.',
    price: 1750,
    image: '12.jpeg'
  },
  {
    name: 'Kit Reparación',
    category: 'Kit',
    description: 'Combo completo para cabellos dañados y secos.',
    price: 3200,
    image: '13.jpeg'
  },
  {
    name: 'Bálsamo Intensivo',
    category: 'Balsamo',
    description: 'Hidrata, alisa y cuida la fibra capilar.',
    price: 2100,
    image: '14.jpeg'
  },
  {
    name: 'Mousse Modelador',
    category: 'Mousse',
    description: 'Da textura y volumen para peinados con movimiento.',
    price: 1900,
    image: '15.jpeg'
  },
  {
    name: 'Shampoo Seca',
    category: 'Shampoo',
    description: 'Ideal para limpiar sin resecar demasiado el cuero cabelludo.',
    price: 1850,
    image: '16.jpeg'
  },
  {
    name: 'Acondicionador Brillo',
    category: 'Acondicionador',
    description: 'Potencia el brillo y suaviza el cabello con facilidad.',
    price: 1700,
    image: '17.jpeg'
  },
  {
    name: 'Laca Fija',
    category: 'Laca',
    description: 'Mantén el peinado intacto durante horas.',
    price: 1600,
    image: '18.jpeg'
  },
  {
    name: 'Shampoo Color',
    category: 'Shampoo',
    description: 'Cuida el color y prolonga la duración del tono.',
    price: 2100,
    image: '19.jpeg'
  },
  {
    name: 'Mascarilla Nutritiva',
    category: 'Mascarilla',
    description: 'Suaviza y repara la fibra capilar con profunda hidratación.',
    price: 2400,
    image: '20.jpeg'
  },
  {
    name: 'Aceite de Coco',
    category: 'Aceite',
    description: 'Nutre la fibra y ayuda a controlar el frizz.',
    price: 2200,
    image: '21.jpeg'
  },
  {
    name: 'Shampoo Cuidado Diario',
    category: 'Shampoo',
    description: 'Limpia con suavidad y mantiene el cabello saludable.',
    price: 1750,
    image: '22.jpeg'
  },
  {
    name: 'Acondicionador Reparador',
    category: 'Acondicionador',
    description: 'Reconstruye el cabello dañado con cada uso.',
    price: 1900,
    image: '23.jpeg'
  },
  {
    name: 'Crema Definidora',
    category: 'Crema',
    description: 'Define mechones y mejora la textura sin rigidez.',
    price: 1950,
    image: '24.jpeg'
  },
  {
    name: 'Sérum Antifrizz',
    category: 'Serum',
    description: 'Controla el frizz y aporta suavidad durante todo el día.',
    price: 2100,
    image: '25.jpeg'
  },
  {
    name: 'Shampoo Revitalizante',
    category: 'Shampoo',
    description: 'Renueva la vitalidad del cabello opaco.',
    price: 2000,
    image: '26.jpeg'
  },
  {
    name: 'Acondicionador Luxe',
    category: 'Acondicionador',
    description: 'Brillo, suavidad y sensación premium para cada lavado.',
    price: 2300,
    image: '27.jpeg'
  },
  {
    name: 'Mascarilla de Oro',
    category: 'Mascarilla',
    description: 'Tratamiento premium para cabellos secos y sin vida.',
    price: 2800,
    image: '28.jpeg'
  },
  {
    name: 'Spray Texturizante',
    category: 'Spray',
    description: 'Da forma, textura y volumen con bajo peso.',
    price: 1800,
    image: '29.jpeg'
  },
  {
    name: 'Shampoo Hidratante',
    category: 'Shampoo',
    description: 'Hidrata y guarda la humedad del cabello.',
    price: 2050,
    image: '30.jpeg'
  },
  {
    name: 'Acondicionador Suelto',
    category: 'Acondicionador',
    description: 'Ideal para cabellos finos y con poco cuerpo.',
    price: 1650,
    image: '31.jpeg'
  },
  {
    name: 'Tónico Balance',
    category: 'Tónico',
    description: 'Ayuda a equilibrar la piel cabelluda y mantenerla sana.',
    price: 1750,
    image: '32.jpeg'
  },
  {
    name: 'Aceite Reparador',
    category: 'Aceite',
    description: 'Aporta nutrición profunda y reduce el daño visible.',
    price: 2500,
    image: '33.jpeg'
  },
  {
    name: 'Gel de Brillo',
    category: 'Gel',
    description: 'Deja un acabado brillante y controlado en cada look.',
    price: 1700,
    image: '34.jpeg'
  },
  {
    name: 'Kit Premium',
    category: 'Kit',
    description: 'Combo completo para una rutina profesional en casa.',
    price: 3500,
    image: '35.jpeg'
  }
];

const categories = ['all', ...new Set(products.map((product) => product.category))];

function fillCategories() {
  if (!categoryFilter) return;

  categoryFilter.innerHTML = categories
    .map((category) => {
      const label = category === 'all' ? 'Todas' : category;
      return `<option value="${category}">${label}</option>`;
    })
    .join('');
}

function renderProducts() {
  if (!productGrid) return;

  const searchText = searchInput && searchInput.value ? searchInput.value.trim().toLowerCase() : '';
  const selectedCategory = categoryFilter ? categoryFilter.value : 'all';

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        No encontramos productos con ese filtro o búsqueda.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-image" />
          <div class="product-content">
            <span class="product-tag">${product.category}</span>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div class="product-footer">
              <span class="price">$${product.price}</span>
              <a
                class="whatsapp-product"
                href="https://api.whatsapp.com/send?phone=3517692619&text=${encodeURIComponent(
                  `Hola, quiero consultar el producto ${product.name}`
                )}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

fillCategories();
renderProducts();

if (searchInput) {
  searchInput.addEventListener('input', renderProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener('change', renderProducts);
}
