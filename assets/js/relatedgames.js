// ----------------------
// DS SẢN PHẨM MẪU
// ----------------------
const products = {
  "1": {
    name: "Call of Duty®: Modern Warfare® II",
    priceOld: 150000,
    priceNew: 100000,
    image: "assets/images/single-game.jpg",
    description: `Game bắn súng hành động`,
    genre: ["Hành động", "Đồng đội", "1 người chơi"],
    tags: ["Chiến tranh", "Chiến đấu", "Hoàng gia"],
    id: "COD MMII",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "2": {
    name: "Assassin's Creed® Valhalla",
    priceOld: 30,
    priceNew: 25,
    image: "assets/images/assassins-creed.jpg",
    description: `Trải nghiệm thế giới Viking tuyệt đẹp.
Valhalla mang lại lối chơi nhập vai hấp dẫn cùng với cốt truyện phong phú.`,
    genre: ["Phiêu lưu", "Thế giới mở"],
    tags: ["Viking", "Cốt truyện", "Chiến đấu"],
    id: "ACV",
    reviews: [
      "Cốt truyện Valhalla rất cuốn hút!",
      "Gameplay sáng tạo, không bị lặp lại.",
      "Cảnh quan đẹp, rất đáng chơi."
    ]
  },
  "3": {
    name: "Game Hành Động Mẫu",
    priceOld: 80000,
    priceNew: 60000,
    image: "assets/images/sample-game.jpg",
    description: `Một game hành động mẫu`,
    genre: ["Hành động", "Bắn súng"],
    tags: ["Action", "Shooter"],
    id: "GAME3",
    reviews: [
      "<b>User1</b>: Hay lắm!",
      "<b>User2</b>: Đồ họa tốt!"
    ]
  },
  "4": {
    name: "Game Hành Động Khác",
    priceOld: 90000,
    priceNew: 70000,
    image: "assets/images/sample-game2.jpg",
    description: `Một game thuộc thể loại hành động`,
    genre: ["Hành động", "Đồng đội"],
    tags: ["Action", "Multiplayer"],
    id: "GAME4",
    reviews: [
      "Thách thức và lôi cuốn!",
      "Cảm giác đa chiều."
    ]
  }
};

// ----------------------
// HÀM LẤY THAM SỐ TỪ URL
// ----------------------
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ----------------------------------------------------
// HIỂN THỊ CHI TIẾT SẢN PHẨM (product-detail page)
// ----------------------------------------------------
function renderProductDetail() {
  const productKey = getQueryParam("id"); // Lấy tham số "id" từ URL (ví dụ: "1", "2", …)
  const product = products[productKey];

  if (!product) {
    document.body.innerHTML = "<h2 class='text-center mt-5'>Sản phẩm không tồn tại.</h2>";
    return;
  }

  // Header
  document.querySelector("h3").innerText = product.name;
  document.querySelector(".breadcrumb").innerHTML = `<a href="index.html">Home</a> > <a href="shop.html">Shop</a> > ${product.name}`;

  // Hình ảnh sản phẩm
  const img = document.querySelector(".left-image img");
  img.src = product.image;
  img.alt = product.name;

  // Tiêu đề và giá sản phẩm
  document.querySelector(".col-lg-6.align-self-center h4").innerText = product.name;
  document.querySelector(".price").innerHTML = `<em>${product.priceOld}</em> ${product.priceNew}`;

  // Mô tả sản phẩm (xử lý xuống dòng nếu có)
  const descHTML = product.description
    .split('\n')
    .map(line => `<p>${line}</p>`)
    .join('');
  document.querySelector("#description").innerHTML = descHTML;

  // Hiển thị chi tiết sản phẩm (Game ID, Thể loại, Thẻ liên quan)
  const ul = document.querySelector(".col-lg-6.align-self-center ul");
  ul.innerHTML = `
    <li><span>Game ID:</span> ${product.id}</li>
    <li><span>Thể loại:</span> ${product.genre.map(g => `<a href="#">${g}</a>`).join(", ")}</li>
    <li><span>Thẻ liên quan:</span> ${product.tags.map(t => `<a href="#">${t}</a>`).join(", ")}</li>
  `;

  // Hiển thị reviews
  const reviewContainer = document.querySelector("#reviews");
  reviewContainer.innerHTML = product.reviews.map(r => `<p>${r}</p>`).join("");
}

// --------------------------------------------------
// THÊM SẢN PHẨM VÀO GIỎ HÀNG (trong product-detail)
// --------------------------------------------------
function addToCart() {
  const productKey = getQueryParam("id");
  const product = products[productKey];

  if (!product) {
    alert("Sản phẩm không tồn tại!");
    return;
  }

  const quantityInput = document.querySelector("#qty input");
  const quantity = parseInt(quantityInput.value.trim(), 10) || 1;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.priceNew,
      image: product.image,
      quantity: quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
}

// --------------------------------------------------
// HIỂN THỊ GAME LIÊN QUAN
// --------------------------------------------------
function renderRelatedGames() {
  const currentKey = getQueryParam("id");
  const currentProduct = products[currentKey];
  if (!currentProduct) return;

  const relatedGames = Object.entries(products).filter(([key, product]) => {
      if (key === currentKey) return false;
      if (!product.genre || !currentProduct.genre) return false;
      return product.genre.some(genre => currentProduct.genre.includes(genre));
  }).map(([key, product]) => product);

  const gamesToShow = relatedGames.slice(0, 4);
  const relatedContainer = document.getElementById("related-games");
  let html = "";
  gamesToShow.forEach(product => {
    html += `
      <div class="col-md-3 related-game-card">
        <div class="card">
          <a href="product-details.html?id=${getProductKeyByProduct(product)}">
            <img class="card-img-top" src="${product.image}" alt="${product.name}">
          </a>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Giá: ${product.priceNew.toLocaleString()} đ</p>
          </div>
        </div>
      </div>
    `;
  });
  if (gamesToShow.length === 0) {
    html = "<p class='text-center'>Không có game liên quan.</p>";
  }
  relatedContainer.innerHTML = html;
}

function getProductKeyByProduct(product) {
  for (let key in products) {
    if (products.hasOwnProperty(key) && products[key].id === product.id) {
      return key;
    }
  }
  return "";
}

// --------------------------------------------------
// KHỞI TẠO KHI TÀI LIỆU ĐÃ LOAD XONG
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("qty")) {
    renderProductDetail();
    document.getElementById("qty").addEventListener("submit", function (event) {
      event.preventDefault();
      addToCart();
    });
  }
  renderRelatedGames();
});
