function getCartItems() {
  return JSON.parse(localStorage.getItem("modernDigiCart")) || [];
}

function saveCartItems(cart) {
  localStorage.setItem("modernDigiCart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCartItems();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-badge");

  badges.forEach((badge) => {
    badge.textContent = totalCount;
  });
}

updateCartBadge();
document.addEventListener("click", function (event) {
  // 1. Add to Cart Button Clicks
  const addCartBtn = event.target.closest(".add-to-cart-btn");
  if (addCartBtn) {
    event.preventDefault();

    const card = addCartBtn.closest(".card");
    if (card) {
      const name =
        card.querySelector(".card-title")?.textContent.trim() || "Tech Product";
    
      const priceElement = card.querySelector(".product-price") || card.querySelector(".mb-3 .fw-bold.text-dark");
      const priceText = priceElement ? priceTextContent = priceElement.textContent.trim() : "$0.00";
      
      const image = card.querySelector("img")?.src || "";
      const price =
        parseFloat(priceText.replace("$", "").replace(",", "")) || 0;

      let cart = getCartItems();

      const existingItem = cart.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          name: name,
          price: price,
          image: image,
          quantity: 1,
        });
      }

      saveCartItems(cart);
      alert(`"${name}" has been added to your cart!`);
    }
    return;
  }

  // 2. Quantity Increase (+) in cart.html
  if (
    event.target.classList.contains("increase-qty") ||
    event.target.closest(".increase-qty")
  ) {
    const btn = event.target.closest(".increase-qty");
    const index = btn.dataset.index;
    let cart = getCartItems();

    if (cart[index]) {
      cart[index].quantity += 1;
      saveCartItems(cart);
      renderCartPage();
    }
    return;
  }

  // 3. Quantity Decrease (-) in cart.html
  if (
    event.target.classList.contains("decrease-qty") ||
    event.target.closest(".decrease-qty")
  ) {
    const btn = event.target.closest(".decrease-qty");
    const index = btn.dataset.index;
    let cart = getCartItems();

    if (cart[index]) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      saveCartItems(cart);
      renderCartPage();
    }
    return;
  }

  // 4. Remove Item in cart.html
  if (
    event.target.classList.contains("remove-item") ||
    event.target.closest(".remove-item")
  ) {
    const btn = event.target.closest(".remove-item");
    const index = btn.dataset.index;
    let cart = getCartItems();

    if (cart[index]) {
      cart.splice(index, 1);
      saveCartItems(cart);
      renderCartPage();
    }
    return;
  }
});
function renderCartPage() {
  const cartTableBody = document.getElementById("cart-table-body");
  const cartSummaryContainer = document.getElementById("cart-summary");

  if (!cartTableBody) return;

  let cart = getCartItems();

  if (cart.length === 0) {
    cartTableBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5 text-secondary">
                    <i class="bi bi-cart-x display-3 mb-3 d-block"></i>
                    <h5>Your shopping cart is empty</h5>
                    <p class="small">Explore our products and add items to your cart.</p>
                    <a href="products.html" class="btn btn-primary rounded-pill px-4 mt-2">Shop Now</a>
                </td>
            </tr>
        `;
    if (cartSummaryContainer) cartSummaryContainer.style.display = "none";
    return;
  }

  if (cartSummaryContainer) cartSummaryContainer.style.display = "block";

  let subtotal = 0;
  cartTableBody.innerHTML = cart
    .map((item, index) => {
      let itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      return `
            <tr>
                <td class="align-middle">
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: contain;" class="border rounded p-1">
                        <div>
                            <h6 class="fw-bold text-dark mb-0">${item.name}</h6>
                        </div>
                    </div>
                </td>
                <td class="align-middle fw-semibold">$${item.price.toFixed(2)}</td>
                <td class="align-middle">
                    <div class="input-group input-group-sm" style="width: 100px;">
                        <button class="btn btn-outline-secondary decrease-qty" data-index="${index}">-</button>
                        <input type="text" class="form-control text-center bg-white" value="${item.quantity}" readonly>
                        <button class="btn btn-outline-secondary increase-qty" data-index="${index}">+</button>
                    </div>
                </td>
                <td class="align-middle fw-bold text-primary">$${itemTotal.toFixed(2)}</td>
                <td class="align-middle">
                    <button class="btn btn-outline-danger btn-sm remove-item" data-index="${index}" title="Remove item">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    })
    .join("");

  const subtotalEl = document.getElementById("cart-subtotal");
  const shippingEl = document.getElementById("cart-shipping");
  const totalEl = document.getElementById("cart-total");

  let shipping = subtotal > 99 || subtotal === 0 ? 0 : 10;
  let grandTotal = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl)
    shippingEl.textContent =
      shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

renderCartPage();

const allProducts = [
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
    badge: "-15%",
    badgeClass: "bg-primary",
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
    badge: "-15%",
    badgeClass: "bg-primary",
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
    badge: "-15%",
    badgeClass: "bg-primary",
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
  {
    name: "Apple MacBook Air 15",
    brand: "Apple",
    category: "laptops",
    price: "$1,299.00",
    oldPrice: "$1,399.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYT6patQEA24Q6uqzDZJbB3IndETN7BcJ3Lkc5nRRug&s=10",
    rating: "4.9",
    reviews: "(210)",
    badge: "-7%",
    badgeClass: "bg-primary",
  },
  {
    name: "HP Pavilion 15",
    brand: "HP",
    category: "laptops",
    price: "$599.00",
    oldPrice: "$679.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMWcTP_2n_xAg_oWjSDXVgIweDvav0R54PhT8V7i7Ag&s=10",
    rating: "4.5",
    reviews: "(55)",
    badge: "-11%",
    badgeClass: "bg-primary",
  },
  {
    name: "HP Envy x360",
    brand: "HP",
    category: "laptops",
    price: "$849.00",
    oldPrice: "$949.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GWmYOZWkue11Qqjq_Chba8my1AJ1_ecp5RtMjpuBuA&s=10",
    rating: "4.7",
    reviews: "(92)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "HP Omen 16",
    brand: "HP",
    category: "gaming",
    price: "$1,299.00",
    oldPrice: "$1,449.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9R9EG-O7sQr7M5XDz8RR-TKI1NiQncfFS1SulYNKURQ&s=10",
    rating: "4.8",
    reviews: "(110)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    category: "gaming",
    price: "$1,499.00",
    oldPrice: "$1,699.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtRpdrjSxnnCZ4ApbilxTn6aK39-KSFKwm671S-otvQ&s=10",
    rating: "4.9",
    reviews: "(68)",
    badge: "-12%",
    badgeClass: "bg-primary",
  },
  {
    name: "MSI Titan 18 HX",
    brand: "MSI",
    category: "gaming",
    price: "$3,299.00",
    oldPrice: "$3,599.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_-JxxpXVhVqa3AEiu96SH4LlzZIXKFer-IevnsbNQg&s=10",
    rating: "5.0",
    reviews: "(24)",
    badge: "Elite",
    badgeClass: "bg-danger text-white",
  },
  {
    name: "Dell UltraSharp 27 Monitor",
    brand: "Dell",
    category: "monitors",
    price: "$449.00",
    oldPrice: "$499.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoc2_9hJWN0CXHvPS4_SqPEILmPcMzZwEoVrIMQ53WA&s=10",
    rating: "4.8",
    reviews: "(95)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "LG UltraGear 32 Monitor",
    brand: "LG",
    category: "monitors",
    price: "$379.00",
    oldPrice: "$429.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1v2gefm6kWFJ5oYySit-0P5P_6hA9R6hqMYhipiNwbg&s=10",
    rating: "4.7",
    reviews: "(112)",
    badge: "-11%",
    badgeClass: "bg-primary",
  },
  {
    name: "Samsung Odyssey G7",
    brand: "Samsung",
    category: "monitors",
    price: "$599.00",
    oldPrice: "$699.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDGF_-n5U4fA7N8Xrqzs4yDJrYqwskw8PIHT2q3BHIg&s=10",
    rating: "4.9",
    reviews: "(160)",
    badge: "-14%",
    badgeClass: "bg-primary",
  },
  {
    name: "Mechanical RGB Gaming Keyboard",
    brand: "Logitech",
    category: "accessories",
    price: "$129.00",
    oldPrice: "$149.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8-MirDaXW1hGHOZlqB3jwxejcSKHV-pzUi55ArOaww&s",
    rating: "4.8",
    reviews: "(310)",
    badge: "-13%",
    badgeClass: "bg-primary",
  },
  {
    name: "Wireless Ergonomic Mouse",
    brand: "Razer",
    category: "accessories",
    price: "$79.00",
    oldPrice: "$99.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhp4op8UFOPWWkWBEB4enJGC4JO5RDRzeZyvw0cZ1BQ&s=10",
    rating: "4.6",
    reviews: "(215)",
    badge: "-20%",
    badgeClass: "bg-primary",
  },
  {
    name: "Noise-Cancelling Wireless Headset",
    brand: "Sony",
    category: "accessories",
    price: "$299.00",
    oldPrice: "$349.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQv6sCSGjrND-CobcOCoT8cbC_RGghXgyQ-LAEL3DHFg&s=10",
    rating: "4.9",
    reviews: "(420)",
    badge: "-14%",
    badgeClass: "bg-primary",
  },
  {
    name: "HD Webcam 1080p Pro",
    brand: "Logitech",
    category: "accessories",
    price: "$69.00",
    oldPrice: "$89.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PD7GQ03ZMFZCSrGM7PRajynJen7ipJ5-mVFv_R-xvg&s=10",
    rating: "4.5",
    reviews: "(88)",
    badge: "-22%",
    badgeClass: "bg-primary",
  },
  {
    name: "Lenovo ThinkCentre Desktop",
    brand: "Lenovo",
    category: "desktop",
    price: "$799.00",
    oldPrice: "$899.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Z4ccBGMYCC-T3pi8QFG_GpYBYJCDHruWUuVERKDIrQ&s=10",
    rating: "4.6",
    reviews: "(40)",
    badge: "-11%",
    badgeClass: "bg-primary",
  },
  {
    name: "HP ProDesk Desktop PC",
    brand: "HP",
    category: "desktop",
    price: "$749.00",
    oldPrice: "$829.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ioG2vk7k2OK7ZK9X-KF1P7S8hhMKk6mQP6lVGf8edA&s=10",
    rating: "4.5",
    reviews: "(35)",
    badge: "-9%",
    badgeClass: "bg-primary",
  },
  {
    name: "Dell OptiPlex Business Desktop",
    brand: "Dell",
    category: "desktop",
    price: "$829.00",
    oldPrice: "$919.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4b26DS7AGvA6qsgRhwj56Dy7Wd1ksSp1ATXtW9Umng&s=10",
    rating: "4.7",
    reviews: "(52)",
    badge: "-10%",
    badgeClass: "bg-primary",
  },
  {
    name: "Apple Mac mini M4",
    brand: "Apple",
    category: "desktop",
    price: "$599.00",
    oldPrice: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuHFI94fIKGaxDWCMrplDDUrKTtO8sDl5GqCffJ7zTg&s=10",
    rating: "4.9",
    reviews: "(180)",
    badge: "New",
    badgeClass: "bg-success text-white",
  },
  {
    name: "USB-C Multi-Port Hub",
    brand: "Anker",
    category: "accessories",
    price: "$39.00",
    oldPrice: "$49.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLVaDQMS8RZrt4f8Kp6Znn-H_5SBRzY6kWb0nohOb2Q&s=10",
    rating: "4.8",
    reviews: "(530)",
    badge: "-20%",
    badgeClass: "bg-primary",
  },
  {
    name: "External SSD 1TB NVMe",
    brand: "Samsung",
    category: "accessories",
    price: "$99.00",
    oldPrice: "$129.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2TO1oh-GNAppIOmeXsgTb7BSfhxgM_RuBf599dTqYQ&s=10",
    rating: "4.9",
    reviews: "(340)",
    badge: "-23%",
    badgeClass: "bg-primary",
  },
  {
    name: "Laptop Cooling Pad Stand",
    brand: "CoolerMaster",
    category: "accessories",
    price: "$35.00",
    oldPrice: "$45.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUEbIVwK28-4Utu9yTUH5p_xXaH8GGG5Gt6ccPBQvgA&s",
    rating: "4.4",
    reviews: "(120)",
    badge: "-22%",
    badgeClass: "bg-primary",
  },
  {
    name: "Gaming Mouse Pad XL",
    brand: "SteelSeries",
    category: "accessories",
    price: "$25.00",
    oldPrice: "$35.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmJf5CAoKaSwBOPkFaCnbk3DYliidvaNRmnYLvHUK8w&s=10",
    rating: "4.8",
    reviews: "(280)",
    badge: "-28%",
    badgeClass: "bg-primary",
  },
];

const itemsPerPage = 12;
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = (urlParams.get("search") || "").toLowerCase().trim();
const categoryQuery = (urlParams.get("category") || "").toLowerCase().trim();
const brandQuery = (urlParams.get("brand") || "").toLowerCase().trim();
let currentPage = parseInt(urlParams.get("page")) || 1;

const activeBrand = brandQuery;
const brandButtons = document.querySelectorAll(".brand-btn");
brandButtons.forEach((btn) => {
  const btnBrand = (btn.getAttribute("data-brand") || "").toLowerCase().trim();
  if (btnBrand === activeBrand) {
    btn.classList.remove("btn-outline-dark");
    btn.classList.add("btn-dark", "active");
  } else {
    btn.classList.remove("btn-dark", "active");
    btn.classList.add("btn-outline-dark");
  }
});

const filteredProducts = allProducts.filter((p) => {
  const matchesSearch =
    searchQuery === "" ||
    p.name.toLowerCase().includes(searchQuery) ||
    p.brand.toLowerCase().includes(searchQuery);
  const matchesCategory =
    categoryQuery === "" || p.category.toLowerCase() === categoryQuery;
  const matchesBrand =
    brandQuery === "" || p.brand.toLowerCase() === brandQuery;
  return matchesSearch && matchesCategory && matchesBrand;
});

const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
if (currentPage > totalPages) currentPage = totalPages;

const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedItems = filteredProducts.slice(
  startIndex,
  startIndex + itemsPerPage,
);

const gridContainer = document.getElementById("products-grid");
const noResultsBox = document.getElementById("no-results");
const paginationContainer = document.getElementById("pagination-controls");

if (paginatedItems.length === 0) {
  if (gridContainer) gridContainer.style.display = "none";
  if (noResultsBox) noResultsBox.style.display = "block";
  if (paginationContainer) paginationContainer.style.display = "none";
} else {
  if (gridContainer) {
    gridContainer.style.display = "flex";
    if (noResultsBox) noResultsBox.style.display = "none";

    gridContainer.innerHTML = paginatedItems
      .map(
        (product) => `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm border-0 position-relative p-3 product-card" 
                     data-name="${product.name}" 
                     data-brand="${product.brand}" 
                     data-category="${product.category}">
                    
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
                                <span class="fw-bold text-dark product-price">${product.price}</span>
                                ${product.oldPrice ? `<small class="text-muted text-decoration-line-through ms-1">${product.oldPrice}</small>` : ""}
                            </div>
                        </div>
                        <div class="d-flex flex-row gap-2">
                            <a href="productdetail.html?name=${encodeURIComponent(product.name)}&brand=${encodeURIComponent(product.brand)}&price=${encodeURIComponent(product.price)}&oldPrice=${encodeURIComponent(product.oldPrice)}&image=${encodeURIComponent(product.image)}&reviews=${encodeURIComponent(product.reviews)}" class="btn btn-outline-dark w-100 py-2 " style="border-radius: 8px; font-size: 0.9rem;">
                               <i class="bi bi-eye"></i>  View Detail
                            </a>
                            <button class="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 py-2 add-to-cart-btn" style="border-radius: 8px;">
                                <i class="bi bi-cart3"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
      )
      .join("");
  }

  if (paginationContainer && filteredProducts.length > itemsPerPage) {
    let paginationHTML = `
            <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
                <a class="page-link" href="products.html?page=${currentPage - 1}${searchQuery ? "&search=" + searchQuery : ""}${categoryQuery ? "&category=" + categoryQuery : ""}${brandQuery ? "&brand=" + brandQuery : ""}">Previous</a>
            </li>
        `;

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `
                <li class="page-item ${currentPage === i ? "active" : ""}">
                    <a class="page-link" href="products.html?page=${i}${searchQuery ? "&search=" + searchQuery : ""}${categoryQuery ? "&category=" + categoryQuery : ""}${brandQuery ? "&brand=" + brandQuery : ""}">${i}</a>
                </li>
            `;
    }

    paginationHTML += `
            <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
                <a class="page-link" href="products.html?page=${currentPage + 1}${searchQuery ? "&search=" + searchQuery : ""}${categoryQuery ? "&category=" + categoryQuery : ""}${brandQuery ? "&brand=" + brandQuery : ""}">Next</a>
            </li>
        `;
    paginationContainer.innerHTML = paginationHTML;
  } else if (paginationContainer) {
    paginationContainer.innerHTML = "";
  }
}
const params = new URLSearchParams(window.location.search);
    
    const name = params.get("name") || "Tech Product";
    const brand = params.get("brand") || "Modern Digi";
    const price = params.get("price") || "$0.00";
    const oldPrice = params.get("oldPrice") || "";
    const image = params.get("image") || "";
    const reviews = params.get("reviews") || "(0)";

    document.getElementById("detail-name").textContent = name;
    document.getElementById("breadcrumb-title").textContent = name;
    document.getElementById("detail-brand").textContent = brand;
    document.getElementById("detail-price").textContent = price;
    document.getElementById("detail-reviews").textContent = reviews;
    document.getElementById("detail-img").src = image;
    document.getElementById("detail-img").alt = name;

    const oldPriceEl = document.getElementById("detail-old-price");
    if (oldPrice) {
        oldPriceEl.textContent = oldPrice;
    } else {
        oldPriceEl.style.display = "none";
    }

   
    function loadRelatedProducts() {
        
        const products = window.allProducts || []; 

        const container = document.getElementById("related-products-container");
        container.innerHTML = "";

      
        const filteredProducts = products.filter(p => p.name !== name);

        if (filteredProducts.length === 0) {
            container.innerHTML = `<p class="text-muted">No other products available.</p>`;
            return;
        }

    
        filteredProducts.forEach(product => {
            const col = document.createElement("div");
            col.className = "col";
            col.innerHTML = `
                <div class="card h-100 border-0 shadow-sm rounded-3">
                    <img src="${product.image}" class="card-img-top p-3" alt="${product.name}" style="height: 200px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-secondary mb-1 align-self-start">${product.brand}</span>
                        <h5 class="card-title fs-6 fw-bold text-dark text-truncate">${product.name}</h5>
                        <div class="mt-auto">
                            <span class="fw-bold text-dark">${product.price}</span>
                            <a href="productDetails.html?name=${encodeURIComponent(product.name)}&brand=${encodeURIComponent(product.brand)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}" class="btn btn-sm btn-outline-dark w-100 mt-2">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    }
    loadRelatedProducts();