"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("chart.js/auto");
// 記録的短時間大雨情報
var rainRecordStChartConfig = {
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
var rainSpWarningYeChartConfig = {
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
// 大雨特別警報月別
var rainSpWarningMoChartConfig = {
    type: "bar",
    data: {
        labels: ["7月", "8月", "9月", "10月"],
        datasets: [
            {
                label: "",
                data: [544, 178, 299, 472],
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
// -----発生数と日本に上陸した数----------------------------
var typhoonNumLandChartConfig = {
    type: "bar",
    data: {
        labels: [
            "1951",
            "52",
            "53",
            "54",
            "55",
            "56",
            "57",
            "58",
            "59",
            "60",
            "61",
            "62",
            "63",
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
            "70",
            "71",
            "72",
            "73",
            "74",
            "75",
            "76",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "2000",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
        ],
        datasets: [
            {
                label: "上陸回数",
                type: "line",
                data: [
                    2, 3, 2, 5, 4, 3, 1, 4, 4, 4, 3, 5, 2, 2, 5, 5, 3, 3, 2, 3, 4, 3, 1, 3, 2, 2, 1, 4, 3, 1,
                    3, 4, 2, 0, 3, 0, 1, 2, 5, 6, 3, 3, 6, 3, 1, 2, 4, 4, 2, 0, 2, 3, 2, 10, 3, 2, 3, 0, 1, 2,
                    3, 2, 2, 4, 4, 6, 4, 5, 5, 0, 3, 3, 0,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0)"],
                borderColor: ["rgba(50,50,150, 1)"],
                borderWidth: 2,
                pointRadius: 1,
                pointHoverBorderWidth: 3,
                pointBackgroundColor: ["rgba(50,50,150, 1)"],
                yAxisID: "landfallsChart",
            },
            {
                label: "発生回数",
                type: "bar",
                data: [
                    21, 27, 23, 21, 28, 23, 22, 31, 23, 27, 29, 30, 24, 34, 32, 35, 39, 27, 19, 26, 36, 31,
                    21, 32, 21, 25, 21, 30, 24, 24, 29, 25, 23, 27, 27, 29, 23, 31, 32, 29, 29, 31, 28, 36,
                    23, 26, 28, 16, 22, 23, 26, 26, 21, 29, 23, 23, 24, 22, 22, 14, 21, 25, 31, 23, 27, 26,
                    27, 29, 29, 23, 22, 25, 4,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0.5)"],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 1,
                yAxisID: "numberChart",
            },
        ],
    },
    options: {
        plugins: {
            tooltip: {
                mode: "index",
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
            numberChart: {
                type: "linear",
                position: "left",
                grid: {
                    display: false, // これでnumberChartのy軸のグリッド線も非表示になります
                },
            },
            landfallsChart: {
                type: "linear",
                position: "right",
                max: 12,
                grid: {
                    display: false, // これでnumberChartのy軸のグリッド線も非表示になります
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
};
// 局地的大雨、1時間の降水量50m-----------------------
var localHeavyR50ChartConfig = {
    type: "bar",
    data: {
        labels: [
            "1976",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "2000",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
        ],
        datasets: [
            {
                label: "",
                data: [
                    286, 220, 189, 293, 203, 182, 299, 241, 143, 204, 134, 245, 326, 247, 383, 203, 146, 333,
                    171, 206, 123, 230, 430, 357, 318, 268, 225, 236, 463, 252, 309, 252, 330, 220, 272, 358,
                    367, 308, 309, 269, 334, 327, 350, 377, 345, 279, 382,
                ],
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
// 局地的大雨、1時間の降水量80m-----------------------
var localHeavyR80ChartConfig = {
    type: "bar",
    data: {
        labels: [
            "1976",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "2000",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
        ],
        datasets: [
            {
                label: "",
                data: [
                    25, 21, 8, 15, 12, 8, 20, 13, 7, 10, 11, 20, 38, 19, 15, 16, 8, 15, 8, 12, 14, 12, 36, 41,
                    12, 28, 15, 20, 31, 11, 29, 18, 24, 15, 21, 28, 20, 32, 21, 26, 27, 21, 20, 27, 35, 13,
                    30,
                ],
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
// 局地的大雨、1時間の降水量100m-----------------------
var localHeavyR100ChartConfig = {
    type: "bar",
    data: {
        labels: [
            "1976",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "2000",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
        ],
        datasets: [
            {
                label: "",
                data: [
                    0, 6, 1, 2, 1, 0, 6, 4, 0, 2, 1, 2, 9, 5, 1, 2, 0, 0, 0, 1, 3, 3, 5, 9, 7, 7, 2, 5, 7, 2,
                    6, 0, 4, 3, 2, 7, 3, 8, 2, 5, 5, 3, 5, 4, 5, 2, 5,
                ],
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
// -----
// -----
// -------その他設定-------------------
var rainRecordStChart = null;
var rainSpWarningYeChart = null;
var rainSpWarningMoChart = null;
var typhoonNumLandChart = null;
var localHeavyR50Chart = null;
var localHeavyR80Chart = null;
var localHeavyR100Chart = null;
// チャートを生成するための関数
var generateChart = function (config, canvasId) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new Error("Cannot find a canvas element with id ".concat(canvasId));
    }
    var chart = new auto_1.default(canvas, config);
    return chart;
};
var generateLineChart = function (config, canvasId) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new Error("Cannot find a canvas element with id ".concat(canvasId));
    }
    var chart = new auto_1.default(canvas, config);
    return chart;
};
// 初期チャートの生成;
rainRecordStChart = generateChart(rainRecordStChartConfig, "rainRecordStChart");
rainSpWarningYeChart = generateChart(rainSpWarningYeChartConfig, "rainSpWarningYeChart");
rainSpWarningMoChart = generateChart(rainSpWarningMoChartConfig, "rainSpWarningMoChart");
typhoonNumLandChart = generateLineChart(typhoonNumLandChartConfig, "typhoonNumLandChart");
localHeavyR50Chart = generateChart(localHeavyR50ChartConfig, "localHeavyR50Chart");
localHeavyR80Chart = generateChart(localHeavyR80ChartConfig, "localHeavyR80Chart");
localHeavyR100Chart = generateChart(localHeavyR100ChartConfig, "localHeavyR100Chart");
// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", function () {
    if (rainRecordStChart) {
        rainRecordStChart.destroy();
        rainRecordStChart = generateChart(rainRecordStChartConfig, "rainRecordStChart");
    }
    if (rainSpWarningYeChart) {
        rainSpWarningYeChart.destroy();
        rainSpWarningYeChart = generateChart(rainSpWarningYeChartConfig, "rainSpWarningYeChart");
    }
    if (rainSpWarningMoChart) {
        rainSpWarningMoChart.destroy();
        rainSpWarningMoChart = generateChart(rainSpWarningMoChartConfig, "rainSpWarningMoChart");
    }
    if (typhoonNumLandChart) {
        typhoonNumLandChart.destroy();
        typhoonNumLandChart = generateLineChart(typhoonNumLandChartConfig, "typhoonNumLandChart");
    }
    if (localHeavyR50Chart) {
        localHeavyR50Chart.destroy();
        localHeavyR50Chart = generateChart(localHeavyR50ChartConfig, "localHeavyR50Chart");
    }
    if (localHeavyR80Chart) {
        localHeavyR80Chart.destroy();
        localHeavyR80Chart = generateChart(localHeavyR80ChartConfig, "localHeavyR80Chart");
    }
    if (localHeavyR100Chart) {
        localHeavyR100Chart.destroy();
        localHeavyR100Chart = generateChart(localHeavyR100ChartConfig, "localHeavyR100Chart");
    }
});
console.log(auto_1.default.version);
