// 수량컨트롤러
const add = document.querySelector('.increment');
const remove = document.querySelector('.decrement');
const int = document.querySelector('.count');
let integer = 1;

window.onload = function () {
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
};