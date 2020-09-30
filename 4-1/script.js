let text = document.querySelector('pre').textContent;

text1 = text.replace(/'/g, '"');
console.log(text1);

text2 = text.replace(/\B'|'\B/ig, '"');
console.log(text2);
