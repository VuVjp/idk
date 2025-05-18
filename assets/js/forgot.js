document.getElementById("forgotPasswordForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn form gửi đi mặc định

    // Lấy thông tin từ form
    const username = document.getElementById("inputUsername").value.trim();
    const email = document.getElementById("inputEmail").value.trim();

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra xem người dùng có tồn tại không
    const foundUser = users.find(user => user.username === username && user.email === email);

    if (foundUser) {
        alert(`Mật khẩu của bạn là: ${foundUser.password}`); // Hiển thị mật khẩu (giả lập)
    } else {
        alert("Tên người dùng hoặc email không đúng!");
    }
});

/* chặn người dùng sau khi đã đăng nhập */
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("userLoggedIn") === "true") {
        alert("Bạn đã đăng nhập, không thể truy cập trang này!");
        window.location.href = "index.html"; // Chuyển về trang chính
    }
});