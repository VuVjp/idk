document.addEventListener("DOMContentLoaded", function () {
    // Lấy thông tin người dùng từ localStorage
    const username = localStorage.getItem("username") || "Người dùng";
    const email = localStorage.getItem("email") || "Chưa có email";
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Hiển thị thông tin trên trang
    document.getElementById("profileName").textContent = username;
    document.getElementById("profileEmail").textContent = email;
    document.getElementById("infoName").textContent = username;
    document.getElementById("infoEmail").textContent = email;

    // Hiển thị danh sách đơn hàng
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = orders.length ? orders.map(order => `<li>${order}</li>`).join("") : "<li>Chưa có đơn hàng.</li>";

    // Cập nhật email mới
    document.getElementById("updateProfileForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const newEmail = document.getElementById("newEmail").value.trim();
        if (newEmail) {
            localStorage.setItem("email", newEmail);
            document.getElementById("profileEmail").textContent = newEmail;
            document.getElementById("infoEmail").textContent = newEmail;
            alert("Email đã được cập nhật!");
        }
    });

    // Xử lý đăng xuất
   
});
document.addEventListener("DOMContentLoaded", function () {

     // Kiểm tra xem người dùng đã đăng nhập chưa
    if (localStorage.getItem("userLoggedIn") !== "true") {
        alert("Bạn cần đăng nhập để truy cập trang này!");
        window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
    }

    // Lấy dữ liệu người dùng từ localStorage
    const username = localStorage.getItem("username") || "Người dùng";
    const email = localStorage.getItem("email") || "Chưa có email";
    const introText = localStorage.getItem("intro") || ""; // Lấy giới thiệu đã lưu

    // Hiển thị dữ liệu
    document.getElementById("infoName").textContent = username;
    document.getElementById("infoEmail").textContent = email;
    document.getElementById("introText").value = introText;

    // Lưu giới thiệu khi nhấn nút
    document.getElementById("saveIntroBtn").addEventListener("click", function () {
        const newIntro = document.getElementById("introText").value.trim();
        localStorage.setItem("intro", newIntro);
        alert("Giới thiệu đã được lưu!");
    });
});


// Ảnh hồ sơ
document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("profileImage");
    const uploadImage = document.getElementById("uploadImage");
    const saveImageBtn = document.getElementById("saveImageBtn");
    const editImageBtn = document.getElementById("editImageBtn");

    // Kiểm tra ảnh đã lưu
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profileImage.src = savedImage;
    }

    // Khi nhấn "Thay đổi ảnh", hiển thị ô chọn ảnh và nút lưu
    editImageBtn.addEventListener("click", function () {
        uploadImage.style.display = "block";
        saveImageBtn.style.display = "block";
        editImageBtn.style.display = "none"; // Ẩn nút "Thay đổi ảnh"
    });

    // Xử lý khi chọn ảnh
    saveImageBtn.addEventListener("click", function () {
        const file = uploadImage.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                localStorage.setItem("profileImage", event.target.result);
                profileImage.src = event.target.result;
                alert("Ảnh hồ sơ đã được cập nhật!");

                // Ẩn lại các nút sau khi lưu ảnh
                uploadImage.style.display = "none";
                saveImageBtn.style.display = "none";
                editImageBtn.style.display = "block"; // Hiển thị lại nút "Thay đổi ảnh"
            };
            reader.readAsDataURL(file);
        } else {
            alert("Vui lòng chọn ảnh!");
        }
    });
});
 document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("userLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("orders");
        alert("Bạn đã đăng xuất!");
        window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
    });