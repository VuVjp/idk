
// DS TIN TỨC MẪU
// ----------------------
const newsData = {
  "1": {
    title: "Sự kiện mở bán lớn nhất năm!",
    image: "assets/images/news-1.jpg",
    content: `MaetsVN tổ chức đợt mở bán siêu hấp dẫn với hàng loạt ưu đãi và quà tặng. <br><br>Đừng bỏ lỡ cơ hội sở hữu game yêu thích với giá cực tốt!`
  },
  "2": {
    title: "Game HOT vừa ra mắt: HELL DIVERS 2",
    image: "assets/images/news-2.jpg",
    content: `HELLDIVERS 2 đã chính thức lên kệ! Trò chơi mang đến trải nghiệm co-op đỉnh cao, đồ họa sắc nét và gameplay lôi cuốn. <br><br>Hãy trải nghiệm ngay hôm nay!`
  }
};

// ----------------------
// LẤY THAM SỐ TỪ URL
// ----------------------
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ----------------------
// HIỂN THỊ CHI TIẾT TIN TỨC
// ----------------------
function renderNewsDetail() {
  const newsId = getQueryParam("id");
  const news = newsData[newsId];

  if (!news) {
    document.getElementById("news-content").innerHTML = "<p>Không tìm thấy tin tức.</p>";
    return;
  }

  document.getElementById("news-title").innerText = news.title;
  document.getElementById("breadcrumb-title").innerText = news.title;
  document.getElementById("news-image").src = news.image;
  document.getElementById("news-image").alt = news.title;
  document.getElementById("news-content").innerHTML = `<p>${news.content}</p>`;
}

// ----------------------
// THỰC THI
// ----------------------
document.addEventListener("DOMContentLoaded", renderNewsDetail);