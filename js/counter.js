// 수량컨트롤러
const add = document.querySelector('.increment');
const remove = document.querySelector('.decrement');
const int = document.querySelector('.count');
let integer = 1;

// 합계금액
// const price = document.querySelector('.price');

// 질문! 
// <p id="price" class="price" type="text" name="amout" value="25600">25600</p> <p>원</p>

const priceValue11 = document.getElementById('price').getAttribute('value') // 질문 1=> 데이터가 value가 안 나오고 undefined로 찍히는 이유가 뭘까요 ㅠ..?
let bb = Number(price); // 질문 2 => number로 감싼 후 console.log 찍어도 Nan로 나오나요? typeof로 찍으면 Number로 나옴
console.log('질문1은' + priceValue11 + '입니다'); // 질문1은undefined입니다
console.log('질문1의 타입은' + typeof priceValue11 + '입니다'); // 질문1의 타입은undefined입니다
console.log('질문 2 bb는' + bb + '입니다'); // 질문 2 bb는NaN입니다
console.log('질문 2 bb의 타입은' + typeof bb + '입니다') //질문 2 bb의 타입은number입니다


const priceValue = document.getElementById('price').getAttribute('value');
const totalPrice = document.querySelector('.total_price');
const controller = document.querySelector('.controller_wrap');

window.onload = function () {
  add.addEventListener('click', function () {
    integer += 1;
    int.innerHTML = integer;


    //구매 수량
    let aa = Number(integer);
    //1개당 가격
  
    let cc = Number(priceValue);
    totalPrice.innerHTML = aa * priceValue;

    console.log(aa);
    console.log(typeof aa);;
  });

  remove.addEventListener('click', function () {
    if (integer == 1) {
      remove.setAttribute("disable", "disable")
    } else {
      integer -= 1;
      int.innerHTML = integer;
      //구매 수량
      let aa = Number(integer);
      totalPrice.innerHTML = aa * priceValue;
    }
  });

};