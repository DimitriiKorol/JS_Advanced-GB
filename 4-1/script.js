let text = document.querySelector('pre').textContent;

text = text.replace(/'\B/ig, '"').replace(/\B'/ig, '"');

document.querySelector('pre').textContent = text;
console.log(text);
