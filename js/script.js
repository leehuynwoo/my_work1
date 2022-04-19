// main slider
$(function () {
  var swiper1 = new Swiper(".banner__main", {
    slidesPerView: 1,
    spaceBetween: 30,
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
    slidesPerView: 4,
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

// 수량컨트롤러
const add = document.querySelector('.increment');
const remove = document.querySelector('.decrement');
const int = document.querySelector('.count');
let integer = 1;

add.addEventListener('click', function () {
  integer += 1;
  int.innerHTML = integer;
});

remove.addEventListener('click', function () {
  if (integer == 1) {
    remove.setAttribute("disable", "disable")
  } else {
    integer -= 1;
    int.innerHTML = integer;
  }
});


// 스크롤 이벤트
const scrollMenu = document.querySelector('.deep_info_wrap')
const scrollMenuFloatting = document.querySelector('.detail_floatingn_wrap')
scrollMenu.addEventListener('click', scrollEvent);
scrollMenuFloatting.addEventListener('click', scrollEvent);

function scrollEvent() {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  };
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "center"
  })
};

// 신상 마우스 호버효과
// $(document).ready(function () {
//   $('.swiper-slide').hover(function () {
//     $(this).children('.hover_wrap').addClass('onHover');
//   });

// });

// $(document).ready(function() {
//   $('.swiper-slide').on('hover',
//   function() {
//       $(this > '.hover_wrap').toggleClass('onHover');
//   });
// });

// $(document).ready(function()
//   {
//     $('.swiper-slide').hover(
//       function(){ 
//         $(this).children(".hover_wrap").addClass("onHover"); //Add an active class to the anchor
//       },
//       function() {
//         $(this).children(".hover_wrap").removeClass("onHover"); //Remove an active class to the anchor
//       }
//    )
//  });

// // 호버박스의 크기는 이미지의 크기와 같다
// $(document).ready(function () {

//   var imgH=('.product_img').innerHeight();
//   console.log(imgH);
// };

const img=document.querySelector('.product_img');
const imgH=img.clientHeight();
console.log(imgH);
