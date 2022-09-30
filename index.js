// Import stylesheets
import './style.css';

const minToSec = (min) => min * 60;

const aZaroven = (b1, b2) => b1 && b2;

function obsah(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return -1;
  return a * b;
}

console.log(aZaroven(true, true));
console.log(aZaroven(false, true));
console.log(obsah(5, 10));
console.log(obsah('abc', 10));
