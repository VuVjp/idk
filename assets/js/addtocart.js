document.addEventListener("DOMContentLoaded", function () {
    // Lấy giỏ hàng từ localStorage
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item, index) => {
            totalPrice += item.price * item.quantity;
            cartItemsContainer.innerHTML += `
                <div class="col-lg-3 col-md-6">
                    <div class="item">
                        <div class="thumb">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="down-content">
                                <h4>${item.name}</h4>
                                <span class="category">Giá: ${item.price.toLocaleString()} đ</span>
                                <p>Số lượng: ${item.quantity}</p>
                                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        cartTotal.textContent = totalPrice.toLocaleString() + " đ";
    }

    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    renderCart();
});

function addToCart() {
    const productId = getQueryParam("id"); // Lấy ID sản phẩm từ URL
    const product = products[productId];

    if (!product) {
        alert("Sản phẩm không tồn tại!");
        return;
    }

    // Lấy số lượng từ input
    const quantityInput = document.querySelector("#qty input");
    const quantity = parseInt(quantityInput.value.trim(), 10) || 1;

    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += quantity; // Cộng dồn số lượng
    } else {
        cart.push({ id: product.id, name: product.name, price: product.priceNew, image: product.image, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật giỏ hàng
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
}

// Gắn sự kiện khi nhấn nút "Thêm vào giỏ hàng"
document.getElementById("qty").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form reload trang
    addToCart();
});
function removeItem(index) {
  // Đọc lại dữ liệu giỏ hàng mới nhất từ localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Xóa phần tử tại vị trí index
  localStorage.setItem("cart", JSON.stringify(cart)); // Lưu lại giỏ hàng mới
  renderCart(); // Render lại giỏ hàng
}

