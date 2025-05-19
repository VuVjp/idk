document.addEventListener("DOMContentLoaded", () => {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const newsId = getQueryParam("id") || "default-article";
  const oldCommentsContainer = document.getElementById("oldCommentsContainer");
  const commentFormContainer = document.getElementById("commentForm");

  const storageKey = `comments_for_${newsId}`;
  const likeStorageKey = `likes_for_${newsId}`;

  const userLoggedIn = localStorage.getItem("userLoggedIn") === "true";
  const username = localStorage.getItem("username") || "Người dùng";
  let comments = JSON.parse(localStorage.getItem(storageKey)) || [];
  let likes = JSON.parse(localStorage.getItem(likeStorageKey)) || {};
  let commentsToShow = 3;
  const inputUserAvatar = document.getElementById("inputUserAvatar");

  function updateInputUserAvatar() {
    const avatar = localStorage.getItem(`profileImage_${username}`) || "./assets/images/user.jpg";
    if (inputUserAvatar) {
      inputUserAvatar.src = avatar;
    }
  }

  updateInputUserAvatar();

  function escapeHTML(text) {
    return text.replace(/[&<>"]/g, (match) => {
      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      return map[match];
    });
  }

  // Chuyển comment cũ sang định dạng mới nếu cần
  comments = comments.map(c => {
    // Nếu comment chưa có avatar (comment cũ), bổ sung avatar dựa trên username comment
    if ("username" in c && "text" in c && "time" in c && !("avatar" in c)) {
      return {
        u: c.username,
        t: c.text,
        tm: c.time,
        avatar: localStorage.getItem(`profileImage_${c.username}`) || "./assets/images/user.jpg"
      };
    }
    return c;
  });

  try {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  } catch (e) {
    console.warn("Không thể lưu lại comments đã chuyển đổi.");
  }

  function renderCommentCount() {
    const validComments = comments.filter(c => c.u && c.t && c.tm);
    const count = validComments.length;
    const existingCountElem = document.getElementById("commentCountHeader");
    if (existingCountElem) {
      existingCountElem.textContent = `${count} Bình luận`;
    } else {
      const countElem = document.createElement("h6");
      countElem.id = "commentCountHeader";
      countElem.className = "mb-3";
      countElem.textContent = `${count} Bình luận`;
      oldCommentsContainer.parentNode.insertBefore(countElem, oldCommentsContainer);
    }
  }

  function renderComments() {
    renderCommentCount();

    const validComments = comments.filter(c => c.u && c.t && c.tm);

    if (validComments.length === 0) {
      oldCommentsContainer.innerHTML = `<p class="text-muted">Chưa có bình luận nào.</p>`;
      return;
    }

    const visibleComments = validComments.slice(0, commentsToShow);

    const html = visibleComments.map((c) => {
      const commentId = c.id || c.tm;
      const likeData = likes[commentId] || {};
      const userAction = likeData[username];
      const likeCount = Object.values(likeData).filter(v => v === "like").length;
      const dislikeCount = Object.values(likeData).filter(v => v === "dislike").length;

      // Lấy avatar đã lưu trong comment, fallback mới lấy từ localStorage
      const avatar = c.avatar || localStorage.getItem(`profileImage_${c.u}`) || "./assets/images/user.jpg";

      return `
        <div class="comment-item d-flex mb-3">
          <img src="${escapeHTML(avatar)}" alt="avatar" class="rounded-circle me-3" style="width:40px; height:40px; object-fit:cover;">
          <div style="flex-grow:1;">
            <div><strong>${escapeHTML(c.u)}</strong> <small class="text-muted">${new Date(c.tm).toLocaleString()}</small></div>
            <div class="mb-2">${escapeHTML(c.t)}</div>
            <div>
              <button type="button" class="btn btn-sm btn-outline-primary me-2 like-btn ${userAction === 'like' ? 'active fw-bold' : ''}" data-id="${commentId}" data-action="like">
                👍 <span class="like-count">${likeCount}</span>
              </button>
              <button type="button" class="btn btn-sm btn-outline-danger dislike-btn ${userAction === 'dislike' ? 'active fw-bold' : ''}" data-id="${commentId}" data-action="dislike">
                👎 <span class="dislike-count">${dislikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    oldCommentsContainer.innerHTML = html;

    if (commentsToShow < validComments.length) {
      const loadMoreBtn = document.createElement("button");
      loadMoreBtn.textContent = "Xem thêm";
      loadMoreBtn.className = "btn btn-outline-secondary mt-2";
      loadMoreBtn.addEventListener("click", () => {
        commentsToShow += 3;
        renderComments();
      });
      oldCommentsContainer.appendChild(loadMoreBtn);
    }

    oldCommentsContainer.querySelectorAll(".like-btn, .dislike-btn").forEach(button => {
      button.addEventListener("click", () => {
        if (!userLoggedIn) {
          alert("Bạn cần đăng nhập mới có thể like/dislike bình luận.");
          return;
        }

        const commentId = button.getAttribute("data-id");
        const action = button.getAttribute("data-action");

        if (!likes[commentId]) likes[commentId] = {};

        if (likes[commentId][username] === action) {
          delete likes[commentId][username];
        } else {
          likes[commentId][username] = action;
        }

        localStorage.setItem(likeStorageKey, JSON.stringify(likes));
        renderComments();
      });
    });
  }

  const submitBtn = document.getElementById("submitCommentBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!userLoggedIn) {
        alert("Bạn cần đăng nhập mới có thể bình luận.");
        return;
      }

      const commentInput = document.getElementById("commentInput");
      if (!commentInput) {
        alert("Không tìm thấy ô nhập bình luận.");
        return;
      }

      const text = commentInput.value.trim();
      if (!text) {
        alert("Vui lòng nhập bình luận trước khi gửi.");
        return;
      }

      const avatar = localStorage.getItem(`profileImage_${username}`) || "./assets/images/user.jpg";

      comments.unshift({
        u: username,
        t: text,
        tm: Date.now(),
        avatar: avatar
      });

      if (comments.length > 10) {
        comments = comments.slice(0, 10);
      }

      try {
        localStorage.setItem(storageKey, JSON.stringify(comments));
      } catch (e) {
        console.warn("Không thể lưu vì vượt quá dung lượng localStorage.");
        alert("Không thể lưu bình luận mới vì vượt quá giới hạn bộ nhớ.");
      }

      commentInput.value = "";
      commentsToShow = 3;
      renderComments();
    });
  }

  renderComments();
});
