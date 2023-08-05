"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var $ = jquery_1.default;
window.onload = function () {
  // --- 台風被害と進路図のコード ---
  var typhoonItems = document.querySelectorAll(".typhoon-item");
  var _loop_1 = function (i) {
    var typhoonButton = typhoonItems[i].querySelector(".changebtn-ty");
    var table = typhoonItems[i].querySelector(".typhoon-change-1-1");
    var img = typhoonItems[i].querySelector(".typhoon-change-1-2");
    if (typhoonButton && table && img) {
      // button, table, imgが存在することを確認
      // console.log(typhoonButton);
      table.style.display = "block";
      img.style.display = "none";
      typhoonButton.addEventListener("click", function () {
        if (table.style.display === "block") {
          table.style.display = "none";
          img.style.display = "block";
          typhoonButton.textContent = "被害詳細";
        } else {
          table.style.display = "block";
          img.style.display = "none";
          typhoonButton.textContent = "進路図";
        }
        console.log("Button was clicked");
      });
    } else {
      console.error("Button, table or img not found");
    }
  };
  for (var i = 0; i < typhoonItems.length; i++) {
    _loop_1(i);
  }
  // --- 大雨特別警報の年別回数のコード ---
  var element = document.querySelector(".content-change-1");
  if (element) {
    element.style.display = "block";
  }
  element = document.querySelector(".content-change-2");
  if (element) {
    element.style.display = "none";
  }
  var changeButton = document.querySelector(".changebtn");
  if (changeButton) {
    changeButton.addEventListener("click", function () {
      var contentChange1 = document.querySelector(".content-change-1");
      var contentChange2 = document.querySelector(".content-change-2");
      if (contentChange1 && contentChange2) {
        if (contentChange1.style.display === "block") {
          contentChange1.style.display = "none";
          contentChange2.style.display = "block";
          changeButton.textContent = "年別";
        } else {
          contentChange1.style.display = "block";
          contentChange2.style.display = "none";
          changeButton.textContent = "月別";
        }
      }
    });
  }
  // 局地的大雨、1時間の降水量の表示切り替え
  var contentLHRChange1 = document.querySelector(".localheavyr-1");
  var contentLHRChange2 = document.querySelector(".localheavyr-2");
  var contentLHRChange3 = document.querySelector(".localheavyr-3");
  // 初期表示設定
  contentLHRChange1.style.display = "block";
  contentLHRChange2.style.display = "none";
  contentLHRChange3.style.display = "none";
  var changeLHRButton = document.querySelector(".lhr-c-btn");
  if (changeLHRButton) {
    changeLHRButton.addEventListener("click", function () {
      if (contentLHRChange1 && contentLHRChange2 && contentLHRChange3) {
        if (contentLHRChange1.style.display === "block") {
          // 1つ目のチャートを非表示、2つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "block";
          contentLHRChange3.style.display = "none";
          changeLHRButton.textContent = "100mm";
        } else if (contentLHRChange2.style.display === "block") {
          // 2つ目のチャートを非表示、3つ目のチャートを表示
          contentLHRChange1.style.display = "none";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "block";
          changeLHRButton.textContent = "50mm";
        } else {
          // 3つ目のチャートを非表示、1つ目のチャートを表示
          contentLHRChange1.style.display = "block";
          contentLHRChange2.style.display = "none";
          contentLHRChange3.style.display = "none";
          changeLHRButton.textContent = "80mm";
        }
      }
    });
  }
  // --- アコーディオンのコード ---
  $(".typhoon-item-title").on("click", function () {
    var findElm = $(this).next(".typhoon-item-box");
    $(findElm).slideToggle();
    if ($(this).hasClass("close")) {
      $(this).removeClass("close");
    } else {
      $(this).addClass("close");
    }
  });
  $(".open").each(function (_, element) {
    var Title = $(element).children(".typhoon-item-title");
    $(Title).addClass("close");
    var Box = $(element).children(".typhoon-item-box");
    $(Box).slideDown(500);
  });
};
