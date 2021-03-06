import { colorScale } from "./colors";

export const dataLabels = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const datasets = {
  pie: {
    0: [
      { x: "A", y: 55 },
      { x: "B", y: 55 },
      { x: "C", y: 45 },
      { x: "D", y: 65 },
    ],
    1: [
      { x: "A", y: 25 },
      { x: "B", y: 50 },
      { x: "C", y: 75 },
      { x: "D", y: 100 },
    ],
    2: [
      { x: "A", y: 40 },
      { x: "B", y: 20 },
      { x: "C", y: 210 },
      { x: "D", y: 30 },
    ],
  },
  bar: {
    0: [
      { x: 1, y: 1, fill: colorScale[0] },
      { x: 2, y: 3, fill: colorScale[1] },
      { x: 3, y: 2, fill: colorScale[2] },
      { x: 4, y: 4, fill: colorScale[3] },
    ],
    1: [
      { x: 1, y: 2, fill: colorScale[0] },
      { x: 2, y: 4, fill: colorScale[1] },
      { x: 3, y: 1, fill: colorScale[2] },
      { x: 4, y: 3, fill: colorScale[3] },
    ],
    2: [
      { x: 1, y: 3, fill: colorScale[0] },
      { x: 2, y: 2, fill: colorScale[1] },
      { x: 3, y: 4, fill: colorScale[2] },
      { x: 4, y: 2, fill: colorScale[3] },
    ],
  },
  area: {
    0: [
      { x: 1, y: 2 },
      { x: 2, y: 1.5 },
      { x: 3, y: 3 },
      { x: 4, y: 2.5 },
      { x: 5, y: 4 },
    ],
    1: [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3.5 },
      { x: 4, y: 5.5 },
      { x: 5, y: 8 },
    ],
    2: [
      { x: 1, y: 4 },
      { x: 2, y: 7 },
      { x: 3, y: 9 },
      { x: 4, y: 10 },
      { x: 5, y: 10.5 },
    ],
  },
  line: {
    0: [
      { x: 0, y: 1 },
      { x: 1, y: 3 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
      { x: 5, y: 5 },
      { x: 6, y: 4 },
      { x: 7, y: 6 },
    ],
    1: [
      { x: 0, y: 0 },
      { x: 1, y: 0.5 },
      { x: 2, y: 1.5 },
      { x: 3, y: 3 },
      { x: 4, y: 5 },
      { x: 5, y: 7.5 },
      { x: 6, y: 10.5 },
      { x: 7, y: 14 },
    ],
    2: [
      { x: 0, y: Math.sin(0) },
      { x: 1, y: Math.sin(1) },
      { x: 2, y: Math.sin(2) },
      { x: 3, y: Math.sin(3) },
      { x: 4, y: Math.sin(4) },
      { x: 5, y: Math.sin(5) },
      { x: 6, y: Math.sin(6) },
      { x: 7, y: Math.sin(7) },
    ],
  },
  scatter: {
    0: [
      { x: 1, y: 3, symbol: "triangleDown", fill: colorScale[0] },
      { x: 1.5, y: 2, symbol: "plus", fill: colorScale[1] },
      { x: 2, y: 4, symbol: "star", fill: colorScale[2] },
      { x: 2.5, y: 2.5, symbol: "square", fill: colorScale[3] },
      { x: 3, y: 3.5, symbol: "circle", fill: colorScale[0] },
      { x: 3.5, y: 1.5, symbol: "triangleUp", fill: colorScale[1] },
      { x: 4, y: 3, symbol: "diamond", fill: colorScale[2] },
    ],
    1: [
      { x: 1, y: 1, symbol: "triangleDown", fill: colorScale[0] },
      { x: 1.5, y: 3, symbol: "plus", fill: colorScale[1] },
      { x: 2, y: 2, symbol: "star", fill: colorScale[2] },
      { x: 2.5, y: 2.5, symbol: "square", fill: colorScale[3] },
      { x: 3, y: 4, symbol: "circle", fill: colorScale[0] },
      { x: 3.5, y: 3, symbol: "triangleUp", fill: colorScale[1] },
      { x: 4, y: 5, symbol: "diamond", fill: colorScale[2] },
    ],
    2: [
      { x: 1, y: 5, symbol: "triangleDown", fill: colorScale[0] },
      { x: 1.5, y: 3.5, symbol: "plus", fill: colorScale[1] },
      { x: 2, y: 4, symbol: "star", fill: colorScale[2] },
      { x: 2.5, y: 1.5, symbol: "square", fill: colorScale[3] },
      { x: 3, y: 2, symbol: "circle", fill: colorScale[0] },
      { x: 3.5, y: 2.5, symbol: "triangleUp", fill: colorScale[1] },
      { x: 4, y: 1, symbol: "diamond", fill: colorScale[2] },
    ],
  },
  candlestick: {
    0: [
      { x: 1, open: 5, close: 10, high: 15, low: 0 },
      { x: 2, open: 15, close: 10, high: 20, low: 5 },
      { x: 3, open: 15, close: 20, high: 25, low: 10 },
      { x: 4, open: 20, close: 25, high: 30, low: 15 },
      { x: 5, open: 30, close: 25, high: 35, low: 20 },
    ],
    1: [
      { x: 1, open: 10, close: 15, high: 20, low: 5 },
      { x: 2, open: 10, close: 5, high: 15, low: 0 },
      { x: 3, open: 25, close: 30, high: 35, low: 20 },
      { x: 4, open: 10, close: 15, high: 20, low: 5 },
      { x: 5, open: 20, close: 15, high: 25, low: 10 },
    ],
    2: [
      { x: 1, open: 20, close: 25, high: 30, low: 0 },
      { x: 2, open: 40, close: 5, high: 60, low: -10 },
      { x: 3, open: 25, close: 45, high: 45, low: 10 },
      { x: 4, open: 5, close: 25, high: 40, low: 5 },
      { x: 5, open: 30, close: 15, high: 55, low: -5 },
    ],
  },
};
