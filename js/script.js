// 购物车功能
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartCount();
    alert(`${item} added to cart!`);
}

function viewCart() {
    alert(`Cart: ${cart.join(', ') || 'Empty'}`);
}

function updateCartCount() {
    document.getElementById('cart-count").textContent = cart.length;
}

// 联系表单
function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    localStorage.setItem("contactName", name);
    alert("Form submitted!");
}

// 定制订单
function saveCustomOrder() {
    const plantType = document.getElementById("plant-type").value;
    sessionStorage.setItem("customPlant", plantType);
    alert("Design saved!");
}