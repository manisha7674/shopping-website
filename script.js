let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].getElementsByClassName("product-name")[0].innerText.toLowerCase();
    products[i].style.display = name.includes(input) ? "block" : "none";
  }
}
