document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra trạng thái đăng nhập
    if (localStorage.getItem("userLoggedIn") !== "true") {
        alert("Bạn cần đăng nhập để truy cập trang này!");
        window.location.href = "login.html";
        return;
    }

    const currentUsername = localStorage.getItem("username");
    if (!currentUsername) {
        alert("Không tìm thấy thông tin người dùng!");
        window.location.href = "login.html";
        return;
    }

    // Lấy danh sách users từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.username === currentUsername);

    if (!currentUser) {
        alert("Không tìm thấy tài khoản của bạn!");
        return;
    }

    // Hiển thị thông tin hiện tại lên giao diện
    document.getElementById("infoName").textContent = currentUser.username;
    document.getElementById("infoEmail").textContent = currentUser.email;
    document.getElementById("introText").value = currentUser.intro || "";
    document.getElementById("profileImage").src = currentUser.profileImage

    // --- Cập nhật Giới thiệu ---
    document.getElementById("saveIntroBtn").addEventListener("click", function () {
        const newIntro = document.getElementById("introText").value.trim();
        currentUser.intro = newIntro;
        localStorage.setItem("users", JSON.stringify(users)); // Lưu danh sách users đã cập nhật
        alert("Giới thiệu đã được lưu!");
    });

    // --- Cập nhật Ảnh Hồ Sơ ---
    const profileImage = document.getElementById("profileImage");
    const uploadImage = document.getElementById("uploadImage");
    const saveImageBtn = document.getElementById("saveImageBtn");
    const editImageBtn = document.getElementById("editImageBtn");

    editImageBtn.addEventListener("click", function () {
        uploadImage.style.display = "block";
        saveImageBtn.style.display = "block";
        editImageBtn.style.display = "none";
    });

    saveImageBtn.addEventListener("click", function () {
        const file = uploadImage.files[0];
        if (!file) {
            alert("Vui lòng chọn ảnh!");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const dataURL = event.target.result;
            currentUser.profileImage = dataURL;
            localStorage.setItem("users", JSON.stringify(users)); // Lưu danh sách users đã cập nhật
            profileImage.src = dataURL;
            alert("Ảnh hồ sơ đã được cập nhật!");

            uploadImage.style.display = "none";
            saveImageBtn.style.display = "none";
            editImageBtn.style.display = "block";
        };
        reader.readAsDataURL(file);
    });

    // --- Cập nhật Email ---
    document.getElementById("updateEmailForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const newEmail = document.getElementById("newEmail").value.trim();

        // Kiểm tra email hợp lệ
        if (!newEmail.includes("@")) {
            alert("Email không hợp lệ! Vui lòng nhập email hợp lệ.");
            return;
        }

        // Cập nhật email mới
        currentUser.email = newEmail;
        localStorage.setItem("users", JSON.stringify(users)); // Lưu danh sách users đã cập nhật
        document.getElementById("infoEmail").textContent = newEmail;
        document.getElementById("newEmail").value = ""; // Xóa nội dung input sau khi cập nhật
        localStorage.setItem("email", newEmail);
        alert("Email đã được cập nhật thành công!");
    });

    // --- Cập nhật Mật khẩu ---
    document.getElementById("updatePasswordForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const oldPassword = document.getElementById("oldPassword").value.trim();
        const newPassword = document.getElementById("newPassword").value.trim();

        // Kiểm tra mật khẩu hiện tại
        if (oldPassword !== currentUser.password) {
            alert("Mật khẩu hiện tại không đúng!");
            return;
        }

        // Kiểm tra mật khẩu mới
        if (newPassword.length < 6) {
            alert("Mật khẩu mới phải có ít nhất 6 ký tự!");
            return;
        }

        // Cập nhật mật khẩu mới
        currentUser.password = newPassword;
        localStorage.setItem("users", JSON.stringify(users)); // Lưu danh sách users đã cập nhật
        document.getElementById("oldPassword").value = "";
        document.getElementById("newPassword").value = "";
        alert("Mật khẩu đã được cập nhật thành công!");
    });

    // --- Đăng xuất (Không xóa ảnh hồ sơ & intro) ---
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("userLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        alert("Bạn đã đăng xuất!");
        window.location.href = "login.html";
    });
});
function updateOrderHistory() {
    const orderList = document.getElementById("orderList");
    const currentUsername = localStorage.getItem("username");
    if (!orderList || !currentUsername) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.username === currentUsername);

    orderList.innerHTML = "";

    if (currentUser.orders && currentUser.orders.length > 0) {
        currentUser.orders.forEach((order, orderIndex) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>Mã đơn:</strong> ${order.id} - <strong>Ngày:</strong> ${order.date} ${order.time} - <strong>Tổng:</strong> ${order.total}`;

            const gameList = document.createElement("ul");
            order.items.forEach((game, i) => {
                const gameItem = document.createElement("li");
                gameItem.textContent = `#Trò chơi ${i + 1} - ${game.name} - ${game.price.toLocaleString('vi-VN')} VNĐ`;
                gameList.appendChild(gameItem);
            });

            listItem.appendChild(gameList);
            orderList.appendChild(listItem);
        });
    } else {
        orderList.innerHTML = "<li>Chưa có đơn hàng.</li>";
    }
}

updateOrderHistory(); // Hiển thị lịch sử đơn hàng khi tải trang
