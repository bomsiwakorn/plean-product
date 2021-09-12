// hambergermenu

const showMenu = document.getElementById('showmenu');

function openNavMenu() {
  showMenu.classList.add('togglemenu');
  document.querySelector('html').style.overflow = 'hidden';
}

function closeNavMenu() {
  showMenu.classList.remove('togglemenu');
  document.querySelector('html').style.overflow = 'auto';
}

// active select product

function showGalleryModal(index) {
  const iSlide = Number(index);
  const galleryModal = document.querySelector('.gallery-plean-modal');
  const bgModal = document.querySelector('.bg-gallery-modal');
  const html = document.querySelector('html');
  galleryModal.classList.toggle('gallery-plean-modal-show');
  bgModal.classList.toggle('bg-gallery-modal-show');
  html.classList.toggle('html-gallery-modal-show');

  const swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    initialSlide: iSlide,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function toggleMenuBottom() {
  const facebook = document.querySelector('.menu-bottom-facebook');
  const line = document.querySelector('.menu-bottom-line');
  const shopee = document.querySelector('.menu-bottom-shopee');
  const call = document.querySelector('.menu-bottom-call');
  const icon = document.getElementById('icon-menu-bottom');

  facebook.classList.toggle('menu-bottom-facebook-show');
  line.classList.toggle('menu-bottom-line-show');
  shopee.classList.toggle('menu-bottom-shopee-show');
  call.classList.toggle('menu-bottom-call-show');
  icon.classList.toggle('fa-times');
}
