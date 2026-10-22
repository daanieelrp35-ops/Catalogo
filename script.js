const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

let products = [];

async function loadProducts() {
  try {
    const response = await fetch('data/catalogo.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el catálogo');
    }

    products = await response.json();
    populateCategories();
    renderProducts();
  } catch (error) {
    productGrid.innerHTML = `<div class="empty-state">${error.message}</div>`;
  }
}

function populateCategories() {
  const categories = [...new Set(products.map((product) => product.categoria))];

  categoryFilter.innerHTML = '<option value="all">Todas</option>';

  categories.forEach((categoria) => {
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria;
    categoryFilter.appendChild(option);
  });
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  return products.filter((product) => {
    const matchesSearch =
      !searchTerm ||
      product.nombre.toLowerCase().includes(searchTerm) ||
      product.descripcion.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === 'all' || product.categoria === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productGrid.innerHTML = '<div class="empty-state">No se encontraron productos.</div>';
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const message = encodeURIComponent(
        `Hola, quiero más información sobre ${product.nombre} (${product.categoria})`
      );

      return `
        <article class="product-card">
          <img class="product-image" src="${product.imagen}" alt="${product.nombre}" />
          <div class="product-content">
            <span class="product-tag">${product.categoria}</span>
            <h2>${product.nombre}</h2>
            <p>${product.descripcion}</p>
            <div class="product-footer">
              <span class="price">$${product.precio.toLocaleString('es-CO')}</span>
              <a
                class="whatsapp-product"
                href="https://api.whatsapp.com/send?phone=3517692619&text=${message}"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);

loadProducts();
