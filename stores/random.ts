import { createEvent, createStore } from "effector";

export const $number = createStore<number>(0);

export const randomNum = createEvent();

export const incrementCounter = createEvent();

export const decrementCounter = createEvent();

$number
  .on(incrementCounter, (state) => state + 1)
  .on(decrementCounter, (state) => state - 1)
  .on(randomNum, (state) => Math.floor(Math.random() * (100 - 1) + 1));