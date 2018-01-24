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
var panels = [];

var panel;
var root = document.getElementsByClassName('root')[0];
for (var i = 0; i < PANELS_COUNT; ++i) {
  panel = generatePanel();
  panels.push(panel);
  root.appendChild(panel);
}


