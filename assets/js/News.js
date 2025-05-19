const ITEMS_PER_PAGE = 9;
let currentFilter = "all";
let searchKeyword = "";
let currentPage = 1;

const news = [
  {
    id: 1,
    title: "Sự kiện mùa hè giảm giá 70%",
    description: "Tham gia sự kiện lớn nhất năm với ưu đãi cực sốc!",
    img: "https://via.placeholder.com/600x300.png?text=News+1",
    date: "2025-05-19",
    filterClass: ["event", "promotion"]
  },
  {
    id: 2,
    title: "Ra mắt game mới cực hot",
    description: "Trải nghiệm tựa game hành động nhập vai siêu hấp dẫn!",
    img: "https://via.placeholder.com/600x300.png?text=News+2",
    date: "2025-05-18",
    filterClass: ["release"]
  },
  {
    id: 3,
    title: "Sự kiện đua top nhận thưởng",
    description: "Leo bảng xếp hạng và nhận phần quà cực chất!",
    img: "https://via.placeholder.com/600x300.png?text=News+3",
    date: "2025-05-17",
    filterClass: ["event"]
  }
];

function renderNews() {
  const container = document.getElementById("news-list");
  if (!container) return;
  container.classList.remove("show");

  setTimeout(() => {
    let filteredNews = currentFilter === "all"
      ? [...news]
      : news.filter(n => Array.isArray(n.filterClass) && n.filterClass.includes(currentFilter));

    if (searchKeyword.trim()) {
      filteredNews = filteredNews.filter(n => n.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    }

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    currentPage = Math.min(currentPage, totalPages || 1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    container.innerHTML = "";

    if (pageNews.length === 0) {
      container.innerHTML = '<p class="text-center text-muted">Không tìm thấy tin tức.</p>';
    }

    pageNews.forEach(n => {
      const col = document.createElement("div");
      col.className = `col-lg-4 col-md-6 mb-4 news-item ${n.filterClass.join(" ")}`;
      col.innerHTML = `
        <div class="card h-100 shadow-sm rounded-4 overflow-hidden">
          <img src="${n.img}" alt="${n.title}" class="card-img-top rounded-top-4" style="cursor: pointer;" />
          <div class="card-body d-flex flex-column">
            <div class="text-muted mb-2">${new Date(n.date).toLocaleDateString()}</div>
            <h5 class="card-title">${n.title}</h5>
            <p class="card-text flex-grow-1">${n.description}</p>
            <a href="news-detail.html?id=${n.id}" class="btn btn-outline-primary mt-auto rounded-pill">Xem chi tiết</a>
          </div>
        </div>
      `;
      col.querySelector(".card-img-top").addEventListener("click", () => {
        window.location.href = `news-detail.html?id=${n.id}`;
      });
      container.appendChild(col);
    });

    container.classList.add("show");
    renderPagination(totalPages);
  }, 200);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  if (totalPages <= 1) return;

  const createPageButton = (content, isDisabled, isActive, onClick) => {
    const li = document.createElement("li");
    li.className = `page-item ${isDisabled ? "disabled" : ""} ${isActive ? "active" : ""}`;
    li.innerHTML = `
      <a class="page-link rounded-circle d-flex align-items-center justify-content-center"
         style="width: 40px; height: 40px;" href="#">${content}</a>`;
    if (!isDisabled) li.onclick = onClick;
    return li;
  };

  pagination.appendChild(createPageButton('<<', currentPage === 1, false, e => {
    e.preventDefault();
    currentPage = 1;
    renderNews();
  }));
  pagination.appendChild(createPageButton('<', currentPage === 1, false, e => {
    e.preventDefault();
    currentPage--;
    renderNews();
  }));

  const maxVisible = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(startPage + maxVisible - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pagination.appendChild(createPageButton(i, false, currentPage === i, e => {
      e.preventDefault();
      currentPage = i;
      renderNews();
    }));
  }

  pagination.appendChild(createPageButton('>', currentPage === totalPages, false, e => {
    e.preventDefault();
    currentPage++;
    renderNews();
  }));
  pagination.appendChild(createPageButton('>>', currentPage === totalPages, false, e => {
    e.preventDefault();
    currentPage = totalPages;
    renderNews();
  }));
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchKeyword = e.target.value;
      currentPage = 1;
      renderNews();
    });
  }
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const filter = btn.dataset.filter;
      if (filter !== currentFilter) {
        currentFilter = filter;
        currentPage = 1;
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderNews();
      }
    });
  });
}

window.onload = () => {
  setupSearch();
  setupFilterButtons();
  renderNews();
};
