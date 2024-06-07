$(document).ready(function () {
  //상단메뉴
  $('.navi > li').mouseover(function () {
    $(this).find('.subMenu').stop().slideDown(500);
  });
  $('.navi > li').mouseout(function () {
    $(this).find('.subMenu').stop().slideUp(500);
  });

  //이미지 슬라이드
  $('.imgSlide a:gt(0)').hide();

  setInterval(function () {
    $('.imgSlide a:first-child')
      .fadeOut()
      .next('a')
      .fadeIn()
      .end()
      .appendTo('.imgSlide');
  }, 3000);

  // 탭 메뉴 공지사항 갤러리
  $(function () {
    $('.tabMenu > li > a').click(function () {
      $(this).parent().addClass('active').siblings().removeClass('active');
    });
  });

  /* modal 팝업 */
  $('.notice li:first').click(function () {
    $('#modalWrap').addClass('active');
  });
  $('.btn').click(function () {
    $('#modalWrap').removeClass('active');
  });
});
