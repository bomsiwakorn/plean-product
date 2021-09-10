// hambergermenu

const showMenu = document.getElementById('showmenu');

function openNavMenu() {
  showMenu.classList.add('togglemenu');
  document.querySelector('body').style.overflow = 'hidden';
}

function closeNavMenu() {
  showMenu.classList.remove('togglemenu');
}

// active select product

function showGalleryModal(index) {
  const galleryModal = document.querySelector('.gallery-plean-modal');
  const bgModal = document.querySelector('.bg-gallery-modal');
  const html = document.querySelector('html');
  galleryModal.classList.toggle('gallery-plean-modal-show');
  bgModal.classList.toggle('bg-gallery-modal-show');
  html.classList.toggle('html-gallery-modal-show');

  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    allowTouchMove: false,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    initialSlide: index,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
