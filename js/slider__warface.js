function checkScreenSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 980) {
    // Функция для разрешения экрана до 980 пикселей
    functionForSmallScreen();
  } else {
    // Функция для разрешения экрана большего 980 пикселей
    functionForLargeScreen();
  }
}

function functionForSmallScreen() {
  // Ваша функция для маленького экрана
  var swiper = new Swiper(".swiper-container1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });
}

function functionForLargeScreen() {
  // Ваша функция для большого экрана
  var swiper = new Swiper(".swiper-container1", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });
}

// Вызываем функцию проверки разрешения экрана при загрузке страницы
window.addEventListener('load', checkScreenSize);
document.addEventListener('DOMContentLoaded', checkScreenSize);

// Вызываем функцию при изменении разрешения экрана
window.addEventListener('resize', checkScreenSize);