import { Endpoints } from "./types";

export let testObj: Endpoints[] = [
  {
    top: { value: Number.POSITIVE_INFINITY, x: 1, y: 2 },
    mid: { value: 6, x: 1, y: 1 },
    left: { value: 4, x: 1, y: -1 },
    right: { value: Number.POSITIVE_INFINITY, x: 2, y: 1 },
    bottom: { value: 2, x: -1, y: 1 },
  },
  {
    top: { value: Number.POSITIVE_INFINITY, x: 1, y: 2 },
    mid: { value: 4, x: 1, y: 1 },
    left: { value: Number.POSITIVE_INFINITY, x: 1, y: -1 },
    right: { value: 6, x: 2, y: 1 },
    bottom: { value: 1, x: -1, y: 1 },
  },
  {
    top: { value: Number.POSITIVE_INFINITY, x: 1, y: 2 },
    mid: { value: 3, x: 1, y: 1 },
    left: { value: 4, x: 1, y: -1 },
    right: { value: Number.POSITIVE_INFINITY, x: 2, y: 1 },
    bottom: { value: 5, x: -1, y: 1 },
  },
  {
    top: { value: 3, x: 1, y: 2 },
    mid: { value: 5, x: 1, y: 1 },
    left: { value: 1, x: 1, y: -1 },
    right: { value: Number.POSITIVE_INFINITY, x: 2, y: 1 },
    bottom: { value: 4, x: -1, y: 1 },
  },
  {
    top: { value: 5, x: 1, y: 2 },
    mid: { value: 4, x: 1, y: 1 },
    left: { value: 3, x: 1, y: -1 },
    right: { value: Number.POSITIVE_INFINITY, x: 2, y: 1 },
    bottom: { value: Number.POSITIVE_INFINITY, x: -1, y: 1 },
  },
  //

  {
    top: { value: 2, x: 1, y: 2 },
    mid: { value: 30, x: 1, y: 1 },
    left: { value: Number.POSITIVE_INFINITY, x: 1, y: -1 },
    right: { value: 3, x: 2, y: 1 },
    bottom: { value: Number.POSITIVE_INFINITY, x: -1, y: 1 },
  },
  {
    top: { value: Number.POSITIVE_INFINITY, x: 2, y: 3 },
    mid: { value: 1, x: 2, y: 2 },
    left: { value: 2, x: 1, y: 2 },
    right: { value: Number.POSITIVE_INFINITY, x: 3, y: 2 },
    bottom: { value: 3, x: 2, y: 1 },
  },
];
