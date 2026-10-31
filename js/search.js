const params = new URLSearchParams(window.location.search);

const searchText = (params.get("search") || "").toLowerCase().trim();
const category = (params.get("category") || "").toLowerCase();

const products = document.querySelectorAll(".product-card");
const noResults = document.getElementById("no-results");

let count = 0;

products.forEach(function (product) {

    const name = (product.dataset.name || "").toLowerCase();
    const brand = (product.dataset.brand || "").toLowerCase();
    const productCategory = (product.dataset.category || "").toLowerCase();

    const matchesSearch =
        name.includes(searchText) ||
        brand.includes(searchText);

    const matchesCategory =
        category === "" || productCategory === category;

    if (matchesSearch && matchesCategory) {
        product.style.display = "";
        count++;
    } else {
        product.style.display = "none";
    }
});

if (noResults) {
    if (count === 0) {
        noResults.style.display = "block";
        noResults.innerHTML = `<div class="text-center py-5 text-secondary"><h5>No products found</h5><p>Try searching with different keywords or categories.</p></div>`;
    } else {
        noResults.style.display = "none";
    }
}