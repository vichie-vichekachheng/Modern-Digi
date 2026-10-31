const categorylist = document.getElementById('category-list');

const categories = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjOdVtZRnF7hDJiU-44ekqy-EGSOVqboPrJbyoNtTXg&s=10',
        name: 'ASUS',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJYC8Wc2F_BIHJxjaDnwJtE9lplcakAJkIH62V_rpJA&s=10',
        name: 'MSI',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ29CbnYJUPm-35WZuydktUGfXgDv2HYqSkjjoCGQ-nw&s=10',
        name: 'DELL',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtjnx6wNs9rWQfJPzbkfhMiM2BcbQltV-Eohx7c3IGg&s',
        name: 'ACER',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEsZP9HxQXeejdrKszC14l7QVG87tQD_o-w-6uEhXNg&s=10',
        name: 'LENOVO',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rGPebxj0mSFJADEOZwPOVflJxmm7b7KcOxdW1JYyGQ&s=10',
        name: 'APPLE',
    },
];

if (categorylist) {
    categorylist.innerHTML = categories.map(category => `
        <div class="col-6 col-md-4 col-lg-2">
            <a href="products.html?brand=${category.name}" class="text-decoration-none">
                <div class="brand-card-custom h-100 text-center">
                    <div class="brand-img-wrapper">
                        <img src="${category.image}" class="img-fluid" alt="${category.name}">
                    </div>
                    <div class="p-3 bg-white">
                        <h5 class="fw-bold text-dark mb-1" style="font-size: 1.1rem;">${category.name}</h5>
                        <span class="small text-primary fw-semibold">View Products <i class="bi bi-arrow-right ms-1"></i></span>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

const productList = document.getElementById('product-list');
const products = [
    {
    name: "ASUS Zenbook 14 OLED",
    brand: "ASUS",
    category: "laptops",
    price: "$1,099.00",
    oldPrice: "$1,299.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5t63Hw0DX4vlilw8KrwgEUvqKOkv7hh1DcFCMmeB-g&s=10",
    rating: "4.8",
    reviews: "(142)",
  },
  {
    name: "ASUS Vivobook 15",
    brand: "ASUS",
    category: "laptops",
    price: "$629.00",
    oldPrice: "$699.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BpyWosWGZ70yx4uUr7xU3Xbs8BAlhvbOGiaeZ9tHrQ&s=10",
    rating: "4.6",
    reviews: "(98)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "ASUS TUF Gaming A15",
    brand: "ASUS",
    category: "gaming",
    price: "$879.00",
    oldPrice: "$999.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nymFcxfn3-Cf8ebQ6Ckrbsi7oc0QapOhF8_nvweuwA&s=10",
    rating: "4.7",
    reviews: "(115)",
    badge: "-12%",
    badgeClass: "bg-primary",
  },
  {
    name: "MSI Katana 15",
    brand: "MSI",
    category: "gaming",
    price: "$1,169.00",
    oldPrice: "$1,299.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5mr_etXBLKMS7txTj_8e9cjjlXv8vjQxLg0vY7ygXQ&s=10",
    rating: "4.7",
    reviews: "(86)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "MSI Cyborg 15",
    brand: "MSI",
    category: "laptops",
    price: "$899.00",
    oldPrice: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbNpYji3Vcm1R3Rd2VFWXCnElWiXlcOoUznF90TLsNA&s=10",
    rating: "4.5",
    reviews: "(64)",
    badge: "New",
    badgeClass: "bg-info text-dark",
  },
  {
    name: "MSI Stealth 16 AI",
    brand: "MSI",
    category: "laptops",
    price: "$1,839.00",
    oldPrice: "$1,999.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrLYnLsgzHgSpFtdvoW8uq1GKjQWdYI94EfuvcQf8DA&s",
    rating: "4.8",
    reviews: "(72)",
    badge: "-8%",
    badgeClass: "bg-primary",
  },
  {
    name: "Dell XPS 13",
    brand: "Dell",
    category: "laptops",
    price: "$1,169.00",
    oldPrice: "$1,299.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWSnroKB0OlnQOAnxB6pLd5ZYEwIXN4voAZIKZ3MHXw&s=10",
    rating: "4.9",
    reviews: "(134)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "Dell Inspiron 15",
    brand: "Dell",
    category: "laptops",
    price: "$659.00",
    oldPrice: "$749.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHIQrDemU8VbsQt0r06dPTjMcXO7iUvUMpszjLANjtQ&s=10",
    rating: "4.6",
    reviews: "(91)",
    badge: "-12%",
    badgeClass: "bg-primary",
  },
  {
    name: "Dell G15 Gaming",
    brand: "Dell",
    category: "gaming",
    price: "$1,019.00",
    oldPrice: "$1,199.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgrXW33Q0vF7BnWAj_Q4CzFavOeXVN_sc8enzWGXW8A&s=10",
    rating: "4.7",
    reviews: "(103)",
  },
  {
    name: "Acer Swift Go 14",
    brand: "Acer",
    category: "laptops",
    price: "$719.00",
    oldPrice: "$799.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutHVjMxQMOlwUOXrtlufL7VCmC5cruRNYQG-bmhz4cw&s=10",
    rating: "4.7",
    reviews: "(78)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "Acer Nitro V 15",
    brand: "Acer",
    category: "gaming",
    price: "$879.00",
    oldPrice: "$999.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrT56rQHJGzRqxSUJ5uzheQl0rrIpl7T9srmPr-3CIQ&s=10",
    rating: "4.8",
    reviews: "(126)",
    badge: "-12%",
    badgeClass: "bg-primary",
  },
  {
    name: "Acer Predator Helios 16",
    brand: "Acer",
    category: "gaming",
    price: "$1,349.00",
    oldPrice: "$1,499.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPpP7lKjmsjxBdoeT2m0YDuvsetH5qHzXwGii5kVoKQ&s=10",
    rating: "4.8",
    reviews: "(89)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    category: "laptops",
    price: "$629.00",
    oldPrice: "$699.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-dMhoKwC24GjtTCgEJtWvJpc54HPx2DnyIPQRdvpzQ&s=10",
    rating: "4.6",
    reviews: "(83)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "Lenovo Legion 5 Pro",
    brand: "Lenovo",
    category: "gaming",
    price: "$1,189.00",
    oldPrice: "$1,399.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOPtBVm2KxfkU2bbLEbjvrisN0GRz-5Gi97OlkhJPng&s=10",
    rating: "4.9",
    reviews: "(147)",
  },
  {
    name: "Apple MacBook Pro 14 M4",
    brand: "Apple",
    category: "laptops",
    price: "$1,599.00",
    oldPrice: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVyy-0GgSagjvbe8w2WaD2N-HaIJmsA1Rc3LIA9NFuA&s=10",
    rating: "4.9",
    reviews: "(176)",
    badge: "Premium",
    badgeClass: "bg-warning text-dark",
  },
];

if (productList) {
    productList.innerHTML = products.map(product => `
        <div class="swiper-slide mt-5">
            <div class="card h-100 shadow-sm border-0 position-relative p-3">
                <span class="badge ${product.badgeClass} position-absolute top-0 start-0 m-3 rounded-pill px-2 py-1">
                    ${product.badge}
                </span>
               
                <div class="text-center my-3">
                    <img src="${product.image}" class="img-fluid" alt="${product.name}" style="height: 140px; object-fit: contain;">
                </div>
                <div class="card-body p-0 d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="card-title fw-bold text-dark mb-1 text-truncate">${product.name}</h6>
                        <div class="text-warning small mb-1">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <span class="text-muted ms-1">${product.reviews}</span>
                        </div>
                        <div class="mb-3">
                            <span class="fw-bold text-dark">${product.price}</span>
                            ${product.oldPrice ? `<small class="text-muted text-decoration-line-through ms-1">${product.oldPrice}</small>` : ''}
                        </div>
                    </div>
                    <button class="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 py-2 add-to-cart-btn" style="border-radius: 8px;">
                        <i class="bi bi-cart3"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

const swiper = new Swiper(".productSwiper", {
    slidesPerView: 6, 
    spaceBetween: 20,
    loop: true,      
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 6, spaceBetween: 20 }
    }
});

const newProductList = document.getElementById('new-product-list');

const newProducts = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa57a89U9l2rs4QoF1NaoEjZlzR8uzE8yKmYrt66eZqw&s=10',
        name: 'ASUS ROG Zephyrus G16',
        badge: 'New',
        badgeClass: 'bg-success text-white',
        rating: 4.9,
        reviews: '(45)',
        price: '$1,899.00',
        oldPrice: '$2,099.00'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsMhmuC7LfV7Uqo3wNsD1kb01an_LjLM8anETXUrpFw&s=10',
        name: 'HP-Laptop-Intel-i7-1355U',
        badge: 'New',
        badgeClass: 'bg-success text-white',
        rating: 4.9,
        reviews: '(45)',
        price: '$1,899.00',
        oldPrice: '$2,099.00'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTBoL10RRcTL7qGHwLtDxXfF2j3TH9G4Nj684pD-q-Q&s=10',
        name: 'MacBook Pro 16 M4 Max',
        badge: 'New',
        badgeClass: 'bg-success text-white',
        rating: 5.0,
        reviews: '(82)',
        price: '$2,499.00',
        oldPrice: ''
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Vxz3YF00bsP8BKoiR-T5ONRRIyDS9xuNdK_Q6vDReg&s=10',
        name: 'MSI Raider GE78 HX',
        badge: 'New',
        badgeClass: 'bg-success text-white',
        rating: 4.8,
        reviews: '(31)',
        price: '$2,199.00',
        oldPrice: '$2,399.00'
    },
];

if (newProductList) {
    newProductList.innerHTML = newProducts.map(product => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm border-0 position-relative p-3">
                <span class="badge ${product.badgeClass} position-absolute top-0 start-0 m-3 rounded-pill px-2 py-1">
                    ${product.badge}
                </span>
                
                <div class="text-center my-3">
                    <img src="${product.image}" class="img-fluid" alt="${product.name}" style="height: 140px; object-fit: contain;">
                </div>
                <div class="card-body p-0 d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="card-title fw-bold text-dark mb-1 text-truncate">${product.name}</h6>
                        <div class="text-warning small mb-1">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <span class="text-muted ms-1">${product.reviews}</span>
                        </div>
                        <div class="mb-3">
                            <span class="fw-bold text-dark">${product.price}</span>
                            ${product.oldPrice ? `<small class="text-muted text-decoration-line-through ms-1">${product.oldPrice}</small>` : ''}
                        </div>
                    </div>
                    <button class="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 py-2 add-to-cart-btn" style="border-radius: 8px;">
                        <i class="bi bi-cart3"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}