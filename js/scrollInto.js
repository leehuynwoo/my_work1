
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