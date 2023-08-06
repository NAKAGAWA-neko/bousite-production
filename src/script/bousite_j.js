// トップへ
var btn = document.getElementById("gototop-btn");
if (btn) {
  btn.addEventListener("click", function () {
    var duration = 250; // スクロールの時間（ミリ秒）
    var start = window.scrollY;
    var startTime = performance.now();

    var scroll = function () {
      var currentTime = performance.now();
      var time = Math.min(1, (currentTime - startTime) / duration);
      window.scroll(0, Math.ceil((1 - time) * start));
      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  });
}

// ハンバーガーメニュー
$(function () {
  $(".naviBtn").on("click", function () {
    $(this).toggleClass("active");
    $(".naviSp").toggleClass("active");
  });
});

//scroll_effect
var scrollAnimationElm = document.querySelectorAll(
  ".upface_op_pc_none, .upface_op, .upface, .upface_left, .upface_right"
);
var scrollAnimationFunc = function () {
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 150;
    if (
      scrollAnimationElm[i] &&
      window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
    ) {
      scrollAnimationElm[i].classList.add("on");
    }
  }
};
window.addEventListener("load", scrollAnimationFunc);
window.addEventListener("scroll", scrollAnimationFunc);
