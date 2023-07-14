document.addEventListener('DOMContentLoaded', function() {
    const wordBank = document.querySelectorAll('.word');
    const selectedWords = document.querySelector('.selected-words');
    let order = 1;
  
    wordBank.forEach(function(word) {
      word.addEventListener('click', function() {
        const selectedWord = document.createElement('div');
        selectedWord.textContent = word.textContent;
        selectedWord.classList.add('word');
        selectedWord.style.order = order;
        selectedWords.appendChild(selectedWord);
        order++;
      });
    });
  }); 