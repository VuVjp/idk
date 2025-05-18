document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (localStorage.getItem("userLoggedIn") !== "true") {
        alert("Bạn cần đăng nhập để truy cập trang này!");
        window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
        return;
    }

    // Lấy dữ liệu người dùng từ localStorage
    const username = localStorage.getItem("username") || "Người dùng";
    const email = localStorage.getItem("email") || "Chưa có email";
    const introText = localStorage.getItem("intro") || ""; 

    document.getElementById("infoName").textContent = username;
    document.getElementById("infoEmail").textContent = email;
    document.getElementById("introText").value = introText;

    // Lưu giới thiệu cá nhân
    document.getElementById("saveIntroBtn").addEventListener("click", function () {
        const newIntro = document.getElementById("introText").value.trim();
        localStorage.setItem("intro", newIntro);
        alert("Giới thiệu đã được lưu!");
    });

    // Quản lý ảnh hồ sơ riêng theo username
    const profileImage = document.getElementById("profileImage");
    const uploadImage = document.getElementById("uploadImage");
    const saveImageBtn = document.getElementById("saveImageBtn");
    const editImageBtn = document.getElementById("editImageBtn");

    const savedImage = localStorage.getItem(`profileImage_${username}`);
    if (savedImage) {
        profileImage.src = savedImage;
    }

    editImageBtn.addEventListener("click", function () {
        uploadImage.style.display = "block";
        saveImageBtn.style.display = "block";
        editImageBtn.style.display = "none";
    });

    saveImageBtn.addEventListener("click", function () {
        const file = uploadImage.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                localStorage.setItem(`profileImage_${username}`, event.target.result);
                profileImage.src = event.target.result;
                alert("Ảnh hồ sơ đã được cập nhật!");

                uploadImage.style.display = "none";
                saveImageBtn.style.display = "none";
                editImageBtn.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else {
            alert("Vui lòng chọn ảnh!");
        }
    });

    // Xử lý đăng xuất
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("userLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("intro");
        localStorage.removeItem(`profileImage_${username}`);
        alert("Bạn đã đăng xuất!");
        window.location.href = "login.html";
    });

    // Cập nhật Email & Mật khẩu
    const updateEmailForm = document.getElementById("updateEmailForm");
    const updatePasswordForm = document.getElementById("updatePasswordForm");
    const newEmailInput = document.getElementById("newEmail");
    const oldPasswordInput = document.getElementById("oldPassword");
    const newPasswordInput = document.getElementById("newPassword");

    document.getElementById("editEmailBtn").addEventListener("click", function () {
        updateEmailForm.style.display = "block";
        updatePasswordForm.style.display = "none";
    });

    document.getElementById("editPasswordBtn").addEventListener("click", function () {
        updatePasswordForm.style.display = "block";
        updateEmailForm.style.display = "none";
    });

    updateEmailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newEmail = newEmailInput.value.trim();
        if (!newEmail.includes("@")) {
            alert("Email không hợp lệ!");
            return;
        }
        localStorage.setItem("email", newEmail);
        alert("Email đã được cập nhật!");
    });

    updatePasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const oldPassword = oldPasswordInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const savedPassword = localStorage.getItem("userPassword");

        if (oldPassword !== savedPassword) {
            alert("Mật khẩu hiện tại không đúng!");
            return;
        }
        if (newPassword.length < 6) {
            alert("Mật khẩu mới phải có ít nhất 6 ký tự!");
            return;
        }
        localStorage.setItem("userPassword", newPassword);
        alert("Mật khẩu đã được cập nhật!");
    });
});
