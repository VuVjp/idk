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
  const productKey = getQueryParam("id"); // Lấy tham số "id" từ URL (ví dụ: "1" hoặc "2")
  const product = products[productKey];

  if (!product) {
    document.body.innerHTML =
      "<h2 class='text-center mt-5'>Sản phẩm không tồn tại.</h2>";
    return;
  }

  // Header
  document.querySelector("h3").innerText = product.name;
  document.querySelector(".breadcrumb").innerHTML = `<a href="index.html">Home</a>  >  <a href="shop.html">Shop</a>  >  ${product.name}`;

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
    <li><span>Thẻ liên quan:</span> ${product.tags.map(t => `<a href="#">${t}</a>`).join(", ")}</li>`;

  // Hiển thị reviews
  const reviewContainer = document.querySelector("#reviews");
  reviewContainer.innerHTML = product.reviews.map(r => `<p>${r}</p>`).join("");
}

// --------------------------------------------------
// THÊM SẢN PHẨM VÀO GIỎ HÀNG (trong product-detail)
// --------------------------------------------------
function addToCart() {
  const productKey = getQueryParam("id"); // Lấy ID sản phẩm từ URL ("1" hoặc "2")
  const product = products[productKey];

  if (!product) {
    alert("Sản phẩm không tồn tại!");
    return;
  }

  // Lấy số lượng từ input trong form (nên dùng <input type="number" ...> nếu có thể)
  const quantityInput = document.querySelector("#qty input");
  const quantity = parseInt(quantityInput.value.trim(), 10) || 1;

  // Lấy giỏ hàng từ localStorage (nếu chưa có thì trả về mảng rỗng)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra xem sản phẩm đã có trong giỏ chưa theo product.id
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += quantity; // Cộng dồn số lượng
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.priceNew,
      image: product.image,
      quantity: quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật giỏ hàng vào localStorage
  alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
}

// ---------------------------------------------
// HIỆN THỊ PRODUCT DETAIL VÀ XỬ LÝ "THÊM VÀO GIỎ"
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Nếu trang đang là product-detail (có form id "qty")
  if (document.getElementById("qty")) {
    renderProductDetail();
    document.getElementById("qty").addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn reload trang
      addToCart();
    });
  }
});

// --------------------------------------------------
// HIỂN THỊ GIỎ HÀNG (cart page)
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra đăng nhập: Nếu chưa đăng nhập thì chuyển hướng về trang login
  if (document.getElementById("cart-items")) {
    if (localStorage.getItem("userLoggedIn") !== "true") {
      alert("Bạn cần đăng nhập để xem giỏ hàng!");
      window.location.href = "login.html";
      return;
    }
    renderCart();
  }
});

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
      <div class="col-lg-3 col-md-6">
        <div class="item">
          <div class="thumb">
            <img src="${item.image}" alt="${item.name}">
            <div class="down-content">
              <h4>${item.name}</h4>
              <span class="category">Giá: ${item.price.toLocaleString()} đ</span>
              <p>Số lượng: ${item.quantity}</p>
              <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Xóa</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = totalPrice.toLocaleString() + " đ";
}

// Hàm xóa sản phẩm khỏi giỏ hàng và cập nhật lại localStorage
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Đưa hàm removeItem vào phạm vi toàn cục để có thể gọi từ HTML
window.removeItem = removeItem;
