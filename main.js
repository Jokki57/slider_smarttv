function generatePanel() {
  var div = document.createElement('div');
  div.className = 'panel';
  var span = document.createElement('span');
  span.className = 'innerText';
  span.innerText = Math.random();
  div.appendChild(span);
  var color = 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
  div.style.backgroundColor = color;
  return div;
}

var PANELS_COUNT = 6;
var DELTA = 50;
var panels = [];

var panel;
var container = document.createElement('div');
container.className = 'container';
document.getElementsByClassName('root')[0].appendChild(container);
for (var i = 0; i < PANELS_COUNT; ++i) {
  panel = generatePanel();
  panels.push(panel);
  container.appendChild(panel);
}


window.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) { // right
    setTranslate(container, DELTA);
  } else if (event.keyCode === 37) { // left
    setTranslate(container, -DELTA);
  }
}, false);


function setTranslate(elem, delta) {
  if (elem) {
    if (elem.style.transform) {
      elem.style.transform = 'translateX(' + (getTranslateOffset(elem) + delta) + 'px)';
    } else {
      elem.style.transform = 'translateX(' + delta + 'px)'
    }
  }
}

function getTranslateOffset(elem) {
  if (elem) {
    return Number(elem.style.transform.match(/-?\d+/)[0]);
  }
}


