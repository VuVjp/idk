document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra đăng nhập
    if (localStorage.getItem("userLoggedIn") !== "true") {
        alert("Bạn cần đăng nhập để xem giỏ hàng!");
        window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
        return;
    }

    // Hiển thị thông tin giỏ hàng nếu đã đăng nhập
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