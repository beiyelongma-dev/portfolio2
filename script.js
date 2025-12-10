// 動画とローディング
const video = document.getElementById("heroVideo");
const loadingScreen = document.getElementById("loading-screen");

const title = document.getElementById("main-title");
const subTitle = document.getElementById("sub-title");

// 動画が再生できる状態になったら LOADING を消す
if (video) {
    video.addEventListener("canplaythrough", () => {
        loadingScreen.classList.add("fade-out");
    });

    // 指定時刻でタイトルをフェードイン
    video.addEventListener("timeupdate", () => {
        if (video.currentTime >= 2.2) {
            title.classList.remove("title-hidden");
            title.classList.add("title-visible");

            subTitle.classList.remove("title-hidden");
            subTitle.classList.add("title-visible");
        }
    });
}

// WORKS スライダー
const swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 40,
    grabCursor: true,

    speed: 700,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // 少し映画っぽくしたいときの効果（好みに応じて切り替え）
    effect: "slide",
});
