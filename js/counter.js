// 수량컨트롤러
const add = document.querySelector('.increment');
const remove = document.querySelector('.decrement');
const int = document.querySelector('.count');
let integer = 1;

// 합계금액
const price = document.querySelector('.price');
const totalPrice = document.querySelector('.total_price');
const controller = document.querySelector('.controller_wrap');

window.onload = function () {
  add.addEventListener('click', function () {
    integer += 1;
    int.innerHTML = integer;
    //구매 수량
    Number(int);
    //1개당 가격
    // Number(price);
    var lastprice = parseInt(price);
    totalPrice.innerHTML= int * price;


    console.log(typeof int);
  });

  remove.addEventListener('click', function () {
    if (integer == 1) {
      remove.setAttribute("disable", "disable")
    } else {
      integer -= 1;
      int.innerHTML = integer;
    }
  });

};

//합계금액


//수량에 변화가 생긴다면, 수량과 금액을 더하세요.
function sum() {
  if (controller.click  == true) {
    console.log(aa);
    totalPrice.innerHTML= (int * price)+`원`;
  }
}