"use strict";

let boxes = document.querySelectorAll(".boxes__box");
let newBoxes;
let prev_elem,
    next_elem;
const audio = new Audio("audio/click_sound.mp3");
const audioWin = new Audio("audio/huge_win.wav");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        prev_elem = boxes[i].previousElementSibling;
        next_elem = boxes[i].nextElementSibling;
    if (prev_elem != null) {
        boxes[i].after(prev_elem);
        newBoxes = document.querySelectorAll(".boxes__box");
    }
    else {
        boxes[i].before(next_elem);
        newBoxes = document.querySelectorAll(".boxes__box");
    }
    audio.play();
    if (newBoxes[0].classList.contains("box_a") &&
        newBoxes[1].classList.contains("box_b") &&
        newBoxes[2].classList.contains("box_c") &&
        newBoxes[3].classList.contains("box_d") &&
        newBoxes[4].classList.contains("box_e") &&
        newBoxes[5].classList.contains("box_f")) {
        audioWin.play();
    }
    });
}
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/
