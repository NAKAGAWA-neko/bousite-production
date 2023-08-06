// 記録的短時間大雨情報
const rainRecordStChartConfig = {
  type: "bar",
  data: {
    labels: ["2013", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [
      {
        label: "",
        data: [77, 53, 38, 58, 109, 123, 96, 109, 64, 161, 11],
        backgroundColor: ["rgba(232, 195, 52, 0.7)"],
        borderColor: ["rgba(232, 195, 52, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        filter: function (item) {
          return item.raw !== 0; // '0'のデータポイントではツールチップを表示しない
        },
        callbacks: {
          title: function (context) {
            return context[0].label + "年";
          },
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "回";
            }
            return label;
          },
        },
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

// 大雨特別警報年別
const rainSpWarningYeChartConfig = {
  type: "bar",
  data: {
    labels: ["2013", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [
      {
        label: "",
        data: [89, 148, 137, 45, 64, 270, 497, 103, 78, 45, 17],
        backgroundColor: ["rgba(232, 195, 52, 0.7)"],
        borderColor: ["rgba(232, 195, 52, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        filter: function (item) {
          return item.raw !== 0; // '0'のデータポイントではツールチップを表示しない
        },
        callbacks: {
          title: function (context) {
            return context[0].label + "年";
          },
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "回";
            }
            return label;
          },
        },
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

// 以下、他のグラフの設定は同様にしてください。

// 初期チャートの生成

document.addEventListener("DOMContentLoaded", () => {
  const rainRecordStChart = new Chart("rainRecordStChart", rainRecordStChartConfig);
  const rainSpWarningYeChart = new Chart("rainSpWarningYeChart", rainSpWarningYeChartConfig);
  // 他のチャートの生成も同様に行ってください。
});

// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", () => {
  // チャートを再描画する処理
  // ...
});
