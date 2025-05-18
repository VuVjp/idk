document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra đăng nhập
    if (localStorage.getItem("userLoggedIn") !== "true") {
        alert("Bạn cần đăng nhập để xem giỏ hàng!");
        window.location.href = "login.html";
        return;
    }})