async function doCheckout() {
  const cart = JSON.parse(localStorage["cart"]);
  const mail = JSON.parse(localStorage["users"])[0]["email"];
  const today = Math.floor(Date.now() / 1000);

  var items = [];

  if (cart.length < 1) {
    return false;
  }

  cart.forEach(e => {
    items.push({
      "name": e["name"],
      "price": e["price"],
      "quantity": e["quantity"],
    });
  });

  const post_data = `email=${mail}&date=${today}&data=${JSON.stringify(items)}`;

  const f = await fetch("/api/checkout.php", {method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: post_data});

  if (!f.ok) {
    alert("Không thể thanh toán!");
    return;
  }

  const resp = await f.json();

  if (!resp["code"]) {
    alert(`Lỗi: ${resp["msg"]}`);
    window.location.href = "/contact.html"
  }

  return;
}

document.addEventListener("DOMContentLoaded", function() {
  // Phần checkout popup
  const checkoutBtn = document.getElementById("checkoutBtn");
  const modal = document.getElementById("checkoutModal");
  const closeBtn = document.querySelector(".modal-content .close");

  // Khi nhấn nút "Thanh toán", hiển thị modal popup
  checkoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    doCheckout();
    // Giả sử số tiền tổng được cập nhật trong #cart-total, ta cập nhật vào input amount
    const cartTotal = document.getElementById("cart-total").innerText || "0";
    document.getElementById("amount").value = cartTotal;
    modal.style.display = "block";
  });

  // Đóng modal khi nhấn vào nút "×"
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Đóng modal khi click ra ngoài vùng modal-content
  window.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Xử lý submit form thanh toán
  document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const currentUsername = localStorage.getItem("username");
    if (!currentUsername) {
      alert("Không tìm thấy tài khoản của bạn!");
      return;
    }

    // Lấy danh sách users từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.username === currentUsername);

    if (!currentUser) {
      alert("Không tìm thấy tài khoản của bạn!");
      return;
    }

    // Lấy giỏ hàng hiện tại
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems.length === 0) {
      alert("Giỏ hàng trống, không thể thanh toán!");
      return;
    }

    // Tạo lịch sử đơn hàng mới
    const newOrder = {
      id: `ORDER-${Date.now()}`, // ID đơn hàng duy nhất
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(), // Thêm thời gian giao dịch
      total: document.getElementById("amount").value,
      items: cartItems // Lưu chi tiết sản phẩm trong giỏ hàng
    };

    // Lưu đơn hàng vào danh sách orders của user
    currentUser.orders = currentUser.orders || []; // Đảm bảo có mảng orders
    currentUser.orders.push(newOrder);
    localStorage.setItem("users", JSON.stringify(users)); // Lưu danh sách users đã cập nhật

    // Xóa giỏ hàng sau khi thanh toán
    localStorage.setItem("cart", JSON.stringify([]));

    // Cập nhật lại giao diện giỏ hàng
    if (typeof renderCart === "function") {
      renderCart();
    }
    if (typeof updateCartCount === "function") {
      updateCartCount();
    }

    // Đóng modal thanh toán
    modal.style.display = "none";
    alert("Thanh toán thành công! Đơn hàng đã được lưu vào lịch sử.");
  });
});
