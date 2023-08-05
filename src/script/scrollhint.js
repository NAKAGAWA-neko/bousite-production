"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scroll_hint_1 = require("scroll-hint");
require("scroll-hint/css/scroll-hint.css");
// ScrollHint
window.onload = function () {
    new scroll_hint_1.default(".img_scroll", {
        scrollHintIconAppendClass: "scroll-hint-icon-white",
        suggestiveShadow: true,
        i18n: {
            scrollable: "スクロールできます", //表示されるテキストを変更
        },
    });
};
