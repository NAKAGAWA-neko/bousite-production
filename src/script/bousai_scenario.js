document.addEventListener("DOMContentLoaded", function () {
    // 全てのフレックスアイテムを取得し、JavaScript配列に変換
    var items = Array.prototype.slice.call(document.querySelectorAll(".scenario-group"));
    // 1行あたりのアイテム数を取得する関数
    var getItemsPerRow = function () {
        if (window.innerWidth < 599) {
            return 2; // モバイルでは2つ
        }
        else {
            return 3; // デスクトップでは3つ
        }
    };
    // 各アイテムにクリックイベントを追加
    items.forEach(function (item, index) {
        item.addEventListener("click", function () {
            // 既に表示されているextra-contentがあれば非表示にする
            var existingExtraContent = document.querySelector(".scenario_text:not(.scenariohidden)");
            if (existingExtraContent) {
                if (existingExtraContent.id === "scenario-" + item.id) {
                    // 同じアイテムをクリックした場合は閉じる
                    existingExtraContent.classList.add("scenariohidden");
                    return;
                }
                else {
                    existingExtraContent.classList.add("scenariohidden");
                }
            }
            // クリックしたアイテムに対応するextra-contentを取得し表示する
            var extraContent = document.querySelector("#scenario-" + item.id);
            if (extraContent) {
                extraContent.classList.remove("scenariohidden");
                // extra-contentを適切な位置に移動
                var itemsPerRow = getItemsPerRow(); // 1行あたりのアイテム数を取得
                var nextRowFirstItem = items[(Math.floor(index / itemsPerRow) + 1) * itemsPerRow];
                if (nextRowFirstItem) {
                    nextRowFirstItem.before(extraContent); // 次の行の最初のアイテムの前にextra-contentを挿入
                }
                else {
                    // 次の行がなければ、最後のアイテムの後に挿入
                    items[items.length - 1].after(extraContent);
                }
            }
        });
    });
    // 閉じるボタンにイベントリスナーを追加
    var closeButtons = Array.prototype.slice.call(document.querySelectorAll(".fukidashi-close-btn"));
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 追加
            // 閉じるボタンの親要素（extra-content）を非表示にする
            // 閉じるボタンの親要素（extra-content）がnullでないことを確認してから非表示にする
            var parent = button.closest(".scenario_text"); // 親要素を適切に取得
            if (parent) {
                parent.classList.add("scenariohidden");
            }
        });
    });
});
