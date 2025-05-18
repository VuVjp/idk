document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("userLoggedIn") === "true") {
        alert("Bạn đã đăng nhập, không thể truy cập trang này!");
        window.location.href = "index.html"; // Chuyển về trang chính
    }
});

function registerUser() {
    const username = document.getElementById("inputUsername").value.trim();
    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("inputPassword").value.trim();
    const confirmPassword = document.getElementById("inputConfirmPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra tài khoản đã tồn tại chưa
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert("Tên người dùng đã tồn tại! Vui lòng chọn tên khác.");
        return;
    }

    // Kiểm tra mật khẩu nhập lại
    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp! Vui lòng nhập lại.");
        return;
    }

    // Mã hóa mật khẩu trước khi lưu (giả lập)
    const hashedPassword = btoa(password); // Mã hóa bằng Base64 (có thể thay thế bằng thuật toán mạnh hơn)

    users.push({ username, email, password: hashedPassword });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Tạo tài khoản thành công!");
    window.location.href = "login.html"; // Chuyển hướng sau khi đăng ký
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    registerUser();
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            confirmPassword.classList.add("is-invalid");
            confirmFeedback.textContent = "Mật khẩu không trùng khớp!";
        } else {
            confirmPassword.classList.remove("is-invalid");
        }
    });

