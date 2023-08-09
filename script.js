const wordsArray = ["110 145 154 154 157", "48 65 6C 6C 6F", " 72 101 108 108 111", "வணக்கம்", "Hello"];
const element = document.getElementsByClassName("w-banner")[0];
let currentIndex = 0;
let count=0;
let maxcount=4;
function updateText() {
  element.innerHTML = wordsArray[currentIndex];
  currentIndex = (currentIndex + 1) % wordsArray.length;
  if(count>=maxcount){
    clearInterval(interval);
  }
  count+=1;
}

const interval = setInterval(updateText, 1000);
