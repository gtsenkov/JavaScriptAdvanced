function solve() {
  let input = document.querySelector('#input').value;
  let output = document.querySelector('#output');
  const inputArr = input.split('. ');
  console.log(inputArr);

  let validSentences = [];

  for (let index = 0; index < inputArr.length; index++) {
    console.log(inputArr[index]);
    if (inputArr[index] != '' && inputArr[index] != ' ') {

      validSentences.push(inputArr[index]);

    }
  }

  console.log(validSentences);

  let paragraph = '';

  for (let index = 0; index < validSentences.length; index++) {
      paragraph += validSentences[index].trim() + '.';

    if ((index + 1) % 3 === 0 && index != 0) {
      let innerHTML = `<p>${paragraph}</p>`;
      output.insertAdjacentHTML('beforeend', innerHTML);
      paragraph = '';
    }

    if (index === validSentences.length - 1) {
      const lastParagraph = paragraph.substring(paragraph.length - 1, 0);
      let innerHTML = `<p>${lastParagraph}</p>`;
      output.insertAdjacentHTML('beforeend', innerHTML);
    }
  }
}