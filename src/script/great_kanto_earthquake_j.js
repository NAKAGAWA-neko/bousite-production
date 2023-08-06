// クリックすると画像が変わる部分の最初の色が黄色とScrollHint
window.onload = function () {
  let texts = document.querySelectorAll("#gke-fire-date p.c-pointer");
  for (let i = 0; i < texts.length; i++) {
    if (i === 0) {
      texts[i].classList.add("clicked"); // 最初のテキストに .clicked クラスを追加
    } else {
      texts[i].classList.remove("clicked"); // 他のテキストから .clicked クラスを削除
    }
  }
};
