// main slider
$(function () {
  var swiper1 = new Swiper(".banner__main", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // reco_slider 
  var swiper2 = new Swiper(".reco_slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: false,
  });

  //slider 3
  let windowSize = $(window).width();
  if (windowSize <= 480) {
    var swiper3 = new Swiper(".slider3", {
      slidesPerView: 2,
      spaceBetween: 14,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper3 = new Swiper(".slider3", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  var swiper4 = new Swiper(".product_detail_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});


$(function () {
  // 햄버거를 눌리면 사이드 메뉴가 활성화
  $('.hamburger').on('click', function () {
    $('.side_menu_contents ').addClass('active');
    $('.side_menu_bg').fadeIn();
    if ('.side_menu_contents') {

    }
  });
  //배경을 눌리면 사이드 메뉴 비활성화 
  $('.side_menu_bg').on('click', function () {
    $('.side_menu_contents').removeClass('active');
    $('.side_menu_bg').fadeOut();
  })
});



// 신상품 
$(function () {

  $('#new_arrival .swiper-slide').on('mouseover', function () {
    $(this).children('.hover_wrap').addClass('active')
  })
  $('#new_arrival .swiper-slide').on('mouseleave', function () {
    $(this).children('.hover_wrap').removeClass('active')
  })
})



// 최상단 위치로 이동하는 스크롤
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.detail_floating').fadeIn();
      $('.page_up_btn').fadeIn();
    } else {
      $('.detail_floating').fadeOut();
      $('.page_up_btn').fadeOut();
    }
  });
  $('.page_up_btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});



// 서치바 클릭
$(document).ready(function () {
  $('.icon.search').click(function () {
    $('.search_section').show();
    $('.nav').hide();
  });

  $('.icon.close_red').click(function () {
    $('.search_section').hide();
    $('.nav').show();
  });
});

// 상단 배너 
$(document).ready(function () {
  $('.top__banner img').click(function () {
    $('.top__banner').hide();
  });
});

// 장바구니 담기 텍스트 버튼
const addCartTextBtn = document.querySelector('.add_cart')
addCartTextBtn.addEventListener('click', function (e) {
  e.preventDefault()
  alert('장바구니 담기 성공!');
});

// 할인율
$(function () {

  let discount = $('.discount').text()
  let origin_price = $('.origin_price').text()

  if (discount == '') {
    $('.discount').remove()
  }
  if (origin_price == '') {
    $('.discount').remove()
  }

})