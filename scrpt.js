const swiperWomen = new Swiper('.swiper-women', {
    direction: 'vertical',
    speed: 600,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 2,
    spaceBetween: 10,
});

const swiperMen = new Swiper('.swiper-men', {
    direction: 'vertical',
    speed: 600,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: true,
    },
    slidesPerView: 3,
    spaceBetween: 10,
});

const swiperNew = new Swiper('.swiper-new', {
    direction: 'vertical',
    speed: 600,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 2,
    spaceBetween: 10,
});

function toggleBanner() {
    const banner = document.querySelector(".banner");
    const header = document.querySelector("header");
    const bannerMiddle = document.querySelector(".banner-middle");
    const bannerRight = document.querySelector(".banner-right");
    const navMobile = document.querySelector(".nav-mobile");
    const menuIcon = document.querySelector(".menu");
    banner.classList.toggle("active");
    header.classList.toggle("active");
    bannerMiddle.classList.toggle("active");
    bannerRight.classList.toggle("active");
    if (!banner.classList.contains("active")) {
        navMobile.classList.remove("active");
        menuIcon.classList.remove("active");
    }
}

function toggleMenu() {
    const navMobile = document.querySelector(".nav-mobile");
    const menu = document.querySelector(".menu");
    navMobile.classList.toggle("active");
    menu.classList.toggle("active")
}
