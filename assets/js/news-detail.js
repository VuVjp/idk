
// DS TIN TỨC MẪU
// ----------------------
const newsData = {
  "1": {
    title: "Sự kiện mở bán lớn nhất năm!",
    image: "assets/images/ark-survival.jpg",
    content: `MaetsVN tổ chức đợt mở bán siêu hấp dẫn với hàng loạt ưu đãi và quà tặng. <br><br>Đừng bỏ lỡ cơ hội sở hữu game yêu thích với giá cực tốt!`
  },
  "2": {
    title: "Game HOT vừa ra mắt: HELL DIVERS 2",
    image: "assets/images/assassin-creed.jpg",
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
function renderRelatedNews(currentId) {
  const relatedContainer = document.getElementById("related-news-list");
  if (!relatedContainer) return;

  relatedContainer.innerHTML = "";

  const entries = Object.entries(newsData).filter(([id]) => id !== currentId).slice(0, 3);

  entries.forEach(([id, news]) => {
    const col = document.createElement("div");
    col.className = "col-12 mb-3"; // nhỏ lại, 1 tin 1 dòng, có thể chỉnh lại class theo ý bạn

    col.innerHTML = `
      <div class="card h-100 shadow-sm rounded-4 overflow-hidden d-flex flex-row align-items-center" style="cursor:pointer;">
        <img src="${news.image}" alt="${news.title}" class="rounded-start-4" style="width: 100px; height: 70px; object-fit: cover;" />
        <div class="card-body d-flex flex-column justify-content-center ps-3 pe-2 py-2">
          <h6 class="card-title mb-2" style="font-size: 0.9rem;">${news.title}</h6>
          <a href="news-detail.html?id=${id}" class="btn btn-outline-primary btn-sm rounded-pill px-3">Xem chi tiết</a>
        </div>
      </div>
    `;

    // Thêm click vào cả card để cũng mở trang chi tiết
    col.querySelector(".card").addEventListener("click", () => {
      window.location.href = `news-detail.html?id=${id}`;
    });

    relatedContainer.appendChild(col);
  });
}


// Hàm để loại bỏ thẻ <br> trong content
function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

// ----------------------
// THỰC THI
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const newsId = getQueryParam("id");
  renderNewsDetail();
  renderRelatedNews(newsId); // <-- gọi đúng lúc
});
