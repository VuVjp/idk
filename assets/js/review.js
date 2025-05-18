document.addEventListener("DOMContentLoaded", function () {
    const oldReviewsContainer = document.getElementById("oldReviewsContainer");
    const newReviewsContainer = document.getElementById("newReviewsContainer");
    const reviewInput = document.getElementById("reviewInput");
    const submitReviewBtn = document.getElementById("submitReviewBtn");

    const productId = new URLSearchParams(window.location.search).get("id");
    const username = localStorage.getItem("username") || "Người dùng ẩn danh";
    const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";

    // Hiển thị đánh giá cũ từ danh sách sản phẩm
    function loadOldReviews() {
        const product = products[productId];
        if (!product || !product.reviews) {
            oldReviewsContainer.innerHTML = "<p>Không có đánh giá trước đây.</p>";
            return;
        }

        oldReviewsContainer.innerHTML = product.reviews.map(r => `<p> ${r}</p>`).join("");
    }

    // Hiển thị đánh giá mới từ localStorage
    function loadNewReviews() {
        const reviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
        newReviewsContainer.innerHTML = reviews.length > 0
            ? reviews.map(r => `<p><strong>${r.user}:</strong> ${r.text}</p>`).join("")
            : "<p></p>";
    }

    loadOldReviews();
    loadNewReviews();

    // Lưu đánh giá mới
    submitReviewBtn.addEventListener("click", function () {
        const reviewText = reviewInput.value.trim();
        if (!reviewText) {
            alert("Vui lòng đăng nhập đánh giá!");
            window.location.href = "login.html";
            return;
        }

        const reviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
        reviews.push({ user: username, text: reviewText });
        localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));

        reviewInput.value = "";
        loadNewReviews(); // Cập nhật danh sách đánh giá mới
    });
});
