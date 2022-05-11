$(document).ready(function () {
    // deep info 메뉴 탭에 마우스를 올리면 
    $('.deep_info_wrap').mouseover(function () {
        //첫번째 메뉴에 걸린 active가 사라진다.
        $('.deep_info_wrap > div.active').removeClass('active');
    });
    $('.deep_info_wrap').mouseleave(function () {
        //첫번째 메뉴에 걸린 active가 나타난다
        $('.deep_info_wrap > div:first-child').addClass('active');
    });
});