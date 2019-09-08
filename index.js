const keyCode = document.querySelector('.key-code');
const keyName = document.querySelector('.key-name');
const intro = document.querySelector('p');

function getKey(e) {
  intro.style.display = 'none';
  keyName.textContent = e.key;

  if (e.key === e.key.toUpperCase()) {
    keyCode.textContent = e.keyCode;
  } else {
    keyCode.textContent = e.keyCode + 32;
  }
  
  if (e.keyCode === 32) {
    keyName.textContent = 'Spacebar';
  }
}

window.addEventListener('keydown', getKey);