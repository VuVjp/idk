document.getElementById("signInForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn form gửi đi mặc định

    // Lấy thông tin người dùng từ form
    const username = document.getElementById("inputUsername").value.trim();
    const password = document.getElementById("inputPassword").value.trim();

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra xem tài khoản có tồn tại không
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("email", foundUser.email);

        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // Chuyển về trang chính
    } else {
        alert("Tên người dùng hoặc mật khẩu không đúng!");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("userLoggedIn") === "true") {
        alert("Bạn đã đăng nhập, không thể truy cập trang này!");
        window.location.href = "index.html"; // Chuyển về trang chính
    }
});