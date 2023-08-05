"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("chart.js/auto");
// 震度1以上の揺れを観測した回数
var jisinChartConfig = {
    type: "bar",
    data: {
        labels: [
            "1919",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
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
                label: "震度1",
                data: [
                    380, 493, 461, 542, 1181, 946, 778, 635, 1278, 534, 537, 979, 841, 532, 664, 472, 548,
                    443, 485, 963, 557, 503, 446, 441, 1868, 806, 709, 568, 642, 1106, 520, 710, 705, 783,
                    621, 559, 506, 487, 431, 398, 410, 413, 568, 1043, 447, 633, 6499, 48492, 2578, 1601, 828,
                    821, 462, 547, 591, 606, 462, 355, 446, 687, 369, 516, 327, 475, 737, 732, 422, 716, 438,
                    510, 648, 426, 891, 1102, 1014, 490, 1198, 731, 1188, 999, 641, 12207, 1013, 821, 1344,
                    1316, 1056, 862, 1351, 1216, 1068, 883, 6475, 2009, 1524, 1328, 1174, 4018, 1324, 1379,
                    1015, 1138, 1584, 1282, 669, 158173,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0.7)"],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度2",
                data: [
                    47, 59, 48, 67, 143, 124, 132, 95, 208, 139, 122, 177, 213, 134, 155, 108, 127, 128, 131,
                    221, 160, 145, 197, 201, 360, 250, 246, 230, 268, 229, 201, 199, 209, 266, 226, 199, 184,
                    208, 228, 207, 204, 198, 263, 636, 232, 328, 1091, 3980, 313, 477, 273, 332, 252, 262,
                    312, 235, 197, 172, 199, 289, 147, 215, 131, 222, 291, 357, 193, 367, 215, 241, 277, 223,
                    307, 620, 441, 213, 585, 336, 434, 374, 278, 3975, 352, 309, 573, 619, 485, 340, 520, 483,
                    399, 294, 2863, 816, 612, 535, 474, 1776, 519, 544, 391, 412, 605, 475, 285,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0.7)"],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度3",
                data: [
                    33, 46, 26, 23, 73, 58, 53, 30, 64, 56, 41, 67, 62, 42, 51, 40, 50, 38, 49, 96, 59, 57,
                    55, 69, 126, 78, 67, 67, 75, 54, 59, 40, 56, 51, 55, 52, 61, 61, 68, 69, 59, 56, 70, 207,
                    76, 82, 174, 422, 94, 145, 86, 94, 77, 115, 76, 78, 54, 72, 60, 108, 65, 66, 50, 65, 92,
                    143, 54, 123, 70, 79, 109, 86, 104, 206, 108, 87, 167, 66, 129, 118, 81, 1133, 110, 95,
                    191, 217, 122, 113, 170, 163, 124, 99, 976, 232, 187, 134, 149, 601, 142, 178, 118, 119,
                    181, 156, 81,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0.7)"],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度4",
                data: [
                    3, 5, 3, 6, 15, 8, 10, 7, 14, 9, 8, 21, 15, 5, 6, 4, 5, 5, 14, 6, 10, 10, 8, 14, 20, 15,
                    14, 6, 4, 3, 3, 5, 5, 9, 3, 7, 7, 12, 6, 3, 8, 12, 20, 62, 9, 18, 28, 52, 18, 23, 9, 7,
                    10, 15, 13, 12, 12, 5, 11, 31, 7, 13, 11, 9, 22, 35, 11, 34, 12, 11, 10, 16, 27, 44, 29,
                    23, 50, 23, 30, 27, 20, 312, 28, 24, 63, 77, 38, 25, 48, 34, 36, 32, 253, 65, 52, 46, 34,
                    159, 32, 67, 31, 38, 44, 36, 21,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0.7)"],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度5",
                data: [
                    0, 1, 1, 3, 20, 2, 4, 3, 6, 9, 5, 13, 6, 1, 3, 0, 2, 3, 3, 6, 3, 1, 1, 1, 2, 1, 2, 2, 1,
                    0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 1, 15, 1, 1, 0, 10, 1, 7, 1, 4, 1, 1, 3, 2, 1, 0,
                    0, 3, 0, 1, 1, 0, 2, 1, 1, 4, 8, 0, 1, 0, 0, 8, 4, 1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203,
                ],
                backgroundColor: ["rgba(255,115, 0, 0.7)"],
                borderColor: ["rgba(255, 115, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度5弱",
                data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 1, 3, 30, 5, 4, 2, 12, 4, 3, 4,
                    6, 3, 5, 45, 12, 5, 7, 5, 18, 4, 7, 6, 6, 4, 7, 5,
                ],
                backgroundColor: ["rgba(255,115, 0, 0.7)"],
                borderColor: ["rgba(255, 115, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度5強",
                data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 8, 3, 0, 0, 11, 5, 0, 2, 0,
                    0, 0, 17, 4, 6, 1, 5, 5, 4, 2, 0, 1, 5, 6, 2,
                ],
                backgroundColor: ["rgba(255,115, 0, 0.7)"],
                borderColor: ["rgba(255, 115, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度6",
                data: [
                    0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                backgroundColor: ["rgba(255,115, 0, 0.7)"],
                borderColor: ["rgba(255, 115, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度6弱",
                data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 2, 1,
                    0, 0, 4, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 1,
                ],
                backgroundColor: ["rgba(255,115, 0, 0.7)"],
                borderColor: ["rgba(255, 115, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度6強",
                data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 6, 1, 0, 5, 2, 2, 0, 1, 1,
                    1, 0, 4, 0, 1, 1, 0, 6, 0, 1, 2, 0, 0, 1, 0,
                ],
                backgroundColor: ["rgba(255,115, 0, 0.7)"],
                borderColor: ["rgba(255, 115, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "震度7",
                data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0,
                ],
                backgroundColor: ["rgba(255, 0, 0, 0.7)"],
                borderColor: ["rgba(255, 0, 0, 1)"],
                borderWidth: 1,
            },
            {
                label: "不明",
                data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 557, 2, 3, 15, 0,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
                    beforeBody: function (context) {
                        var total = context.reduce(function (accumulator, currentValue) { return accumulator + currentValue.parsed.y; }, 0);
                        return "合計: " + total;
                    },
                    afterBody: function (context) {
                        if (context[0].label === "11") {
                            return "\n3月11日に東日本大震災が発生";
                        }
                        else if (context[0].label === "66") {
                            return "\n65年から長野県で\n松代群発地震が発生";
                        }
                        else if (context[0].label === "2000") {
                            return "\n伊豆諸島で群発地震が発生";
                        }
                        else if (context[0].label === "16") {
                            return "\n4月に熊本地震が発生";
                        }
                        else {
                            return "";
                        }
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
                max: 50000,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
};
// 都道府県別 震度4以上の揺れを観測した回数
var eqdistrictChartConfig = {
    type: "bar",
    data: {
        labels: [
            "茨城県",
            "北海道",
            "福島県",
            "宮城県",
            "岩手県",
            "栃木県",
            "千葉県",
            "熊本県",
            "長野県",
            "鹿児島県",
            "埼玉県",
            "新潟県",
            "静岡県",
            "青森県",
            "神奈川県",
            "沖縄県",
            "東京都",
            "宮崎県",
            "群馬県",
            "山梨県",
            "大分県",
            "鳥取県",
            "山形県",
            "和歌山県",
            "秋田県",
            "兵庫県",
            "石川県",
            "三重県",
            "長崎県",
            "岐阜県",
            "京都府",
            "広島県",
            "香川県",
            "愛知県",
            "福井県",
            "高知県",
            "愛媛県",
            "奈良県",
            "山口県",
            "島根県",
            "福岡県",
            "徳島県",
            "大阪府",
            "滋賀県",
            "岡山県",
            "富山県",
            "佐賀県",
        ],
        datasets: [
            {
                label: "",
                data: [
                    392, 373, 366, 280, 250, 243, 233, 223, 187, 164, 162, 161, 157, 151, 119, 112, 97, 83,
                    76, 75, 69, 67, 64, 61, 59, 59, 57, 47, 46, 43, 40, 40, 39, 38, 36, 36, 33, 30, 30, 29,
                    28, 26, 25, 24, 19, 15, 14,
                ],
                backgroundColor: ["rgba(232, 195, 52, 0.7)"],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                bodyFont: {
                    weight: "bold", // テキストを太字に設定
                },
                callbacks: {
                    label: function (context) {
                        var label = context.dataset.label || "";
                        if (label) {
                            label += ": ";
                        }
                        if (context.raw !== null) {
                            label += context.raw + "回";
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            y: {
                grid: {
                    display: false, // 横軸のグリッド（縦線たち）を非表示
                },
            },
        },
    },
};
// 緊急地震速報を発令した回数
var jisinLineChartConfig = {
    type: "line",
    data: {
        labels: [
            "2008",
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
                data: [9, 3, 5, 97, 16, 9, 6, 7, 31, 7, 16, 8, 17, 11, 15, 15],
                borderColor: ["rgba(232, 195, 52, 1)"],
                borderWidth: 2,
                pointRadius: 3,
                pointHoverBorderWidth: 4,
                pointBackgroundColor: ["rgba(232, 195, 52, 1)"],
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
                    afterBody: function (context) {
                        if (context[0].label === "2008") {
                            return "\n最初の速報は\n4月28日2時32分ごろ、\n沖縄県宮古島近海で\nマグニチュード5.2(速報値)の地震";
                        }
                        else {
                            return "";
                        }
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
                    display: false, // 横軸のグリッド（縦線たち）を非表示
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
};
// 世界でM7以上の地震が起こった回数
var jisinWorldM7ChartConfig = {
    type: "bar",
    data: {
        labels: [
            "1919",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
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
                label: "",
                data: [
                    11, 7, 8, 6, 15, 8, 10, 9, 12, 18, 14, 4, 17, 7, 8, 12, 13, 9, 9, 23, 14, 8, 11, 13, 17,
                    12, 7, 12, 15, 13, 12, 13, 8, 6, 9, 6, 9, 5, 19, 7, 6, 13, 11, 9, 17, 9, 15, 8, 10, 20,
                    14, 15, 15, 16, 9, 11, 13, 14, 11, 12, 8, 6, 10, 8, 14, 14, 15, 11, 13, 11, 8, 18, 17, 13,
                    12, 13, 20, 15, 16, 12, 18, 15, 15, 13, 15, 16, 11, 11, 18, 12, 17, 24, 20, 16, 19, 12,
                    19, 16, 7, 17, 10, 9, 19, 11, 14,
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
                    // afterBody: function (context) {
                    //   if (context[0].label === "60") {
                    //     return "\n5月23日にチリでMw9.5の地震が発生。\n1900年以降で一番大きな地震";
                    //   } else {
                    //     return "";
                    //   }
                    // },
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
// ---------------------------------
var jisinChart = null;
var eqdistrictChart = null;
var jisinLineChart = null;
var jisinWorldM7Chart = null;
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
// 初期チャートの生成
jisinChart = generateChart(jisinChartConfig, "jisinChart");
eqdistrictChart = generateChart(eqdistrictChartConfig, "eqdistrict");
jisinLineChart = generateLineChart(jisinLineChartConfig, "jisinLineChart");
jisinWorldM7Chart = generateChart(jisinWorldM7ChartConfig, "jisinWorldM7Chart");
// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", function () {
    if (jisinChart) {
        jisinChart.destroy();
        jisinChart = generateChart(jisinChartConfig, "jisinChart");
    }
    if (eqdistrictChart) {
        eqdistrictChart.destroy();
        eqdistrictChart = generateChart(eqdistrictChartConfig, "eqdistrict");
    }
    if (jisinLineChart) {
        jisinLineChart.destroy();
        jisinLineChart = generateLineChart(jisinLineChartConfig, "jisinLineChart");
    }
    if (jisinWorldM7Chart) {
        jisinWorldM7Chart.destroy();
        jisinWorldM7Chart = generateChart(jisinWorldM7ChartConfig, "jisinWorldM7Chart");
    }
});
