document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("userLoggedIn") === "true") {
        alert("Bạn đã đăng nhập, không thể truy cập trang này!");
        window.location.href = "index.html"; 
    }
});

function registerUser() {
    const username = document.getElementById("inputUsername").value.trim();
    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("inputPassword").value.trim();
    const confirmPassword = document.getElementById("inputConfirmPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra tài khoản đã tồn tại chưa
    if (users.some(user => user.username === username)) {
        alert("Tên người dùng đã tồn tại! Vui lòng chọn tên khác.");
        return;
    }

    // Kiểm tra mật khẩu nhập lại
    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp! Vui lòng nhập lại.");
        return;
    }

    // Lưu mật khẩu trực tiếp vào localStorage (KHÔNG MÃ HÓA)
    users.push({ username, email, password, profileImage: "assets/images/User.jpg" });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Tạo tài khoản thành công!");
    window.location.href = "login.html"; 
}

// Chỉ sử dụng **một** sự kiện submit
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    registerUser();
});
