document.addEventListener("DOMContentLoaded", function() {
  // Phần checkout popup
  const checkoutBtn = document.getElementById("checkoutBtn");
  const modal = document.getElementById("checkoutModal");
  const closeBtn = document.querySelector(".modal-content .close");

  // Khi nhấn nút "Thanh toán", hiển thị modal popup
  checkoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
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
    // Giả sử quá trình thanh toán được xử lý thành công (ví dụ: gọi API thanh toán)
    alert("Thanh toán thành công!");

    // Xóa giỏ hàng bằng cách đặt key "cart" thành mảng rỗng
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
  });
});
