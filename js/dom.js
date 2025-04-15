/*1. Выбор элементов на страницы */
/*1.1. выбор по id */
const h1 = document.getElementById("title");
console.log(h1);
/*1.2. выбор одного элемента по селектору*/
const menu = document.querySelector(".menu");
console.log(menu);
/*1.3 выбор нескольких элементов по селектору*/
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

