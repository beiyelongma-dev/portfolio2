const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

// 動画を開く
openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    modalVideo.currentTime = 0;
    modalVideo.play();
});

// 閉じる
closeBtn.addEventListener("click", () => {
    modalVideo.pause();
    modal.classList.remove("active");
});
