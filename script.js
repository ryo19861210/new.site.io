let winHeight,winScroll,scrollPos;
$(window).on('load scroll',function(){
	winScroll = $(window).scrollTop();
	winHeight = $(window).height();
	scrollPos = winHeight * 0.9 + winScroll;
	$(".slidein").each(function(){
		if($(this).offset().top <= scrollPos){
			$(this).addClass("show");
		}else{
			$(this).removeClass("show");
		}
	});
});

$(function(){
  $('.slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 7000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 3, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});

$(window).on('load', function() {
  $(function () {
      $(".main_slide").slick({
          autoplay: true, // 自動再生ON
          fade: true, // フェードON
          dots: false, // ドットOFF
          arrows: false, // 矢印OFF
          speed: 4000, // スライド、フェードアニメーションの速度2000ミリ秒
          autoplaySpeed: 3500, // 自動再生速度4000ミリ秒
          pauseOnFocus: false, // フォーカスで一時停止OFF
          pauseOnHover: false, // マウスホバーで一時停止OFF
      });
  });
});

$(document).ready(function() {
  // ハンバーガーメニューのボタンがクリックされたとき
  $('#js-hamburger').on('click', function() {
    // ナビゲーションメニューの表示状態をトグル
    $('#js-nav').toggleClass('active');
    
    // ハンバーガーメニューのスタイルを変更
    $(this).toggleClass('active');
  });
});
$(document).ready(function() {
  // 入力フィールドとテキストエリアをターゲットにする
  $('input, textarea').on('input', function() {
    if ($(this).val() === '') {
      // 入力がない場合は背景色を設定
      $(this).css('background-color', '#3333331e');
    } else {
      // 入力がある場合は背景色を透明に
      $(this).css('background-color', 'transparent');
    }
  });
});

$(window).on('load scroll', function () {
  winScroll = $(window).scrollTop();
  winHeight = $(window).height();
  scrollPos = winHeight * 0.9 + winScroll;

  $(".slidein").each(function () {
    if ($(this).offset().top <= scrollPos) {
      $(this).addClass("show");

      // 右からスライドインするカードに対応
      if ($(this).hasClass("right")) {
        $(this).removeClass("slide_right"); // 初期位置のクラスを削除
      }
    } else {
      $(this).removeClass("show");

      // スライドアウト時に初期位置に戻す
      if ($(this).hasClass("right")) {
        $(this).addClass("slide_right");
      }
    }
  });
});

// 画面に出現させる関数
function showOnScroll() {
  const elements = document.querySelectorAll('.right2');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 要素が画面内に入った時
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('show');
    }
  });
}

// ページのスクロール時に関数を呼び出し
window.addEventListener('scroll', showOnScroll);

// 初期表示（ページロード時にも適用）
showOnScroll();
