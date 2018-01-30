function generatePanel(id) {
  var div = document.createElement('div');
  div.className = 'panel id' + id;
  var span = document.createElement('span');
  span.className = 'innerText';
  span.innerText = id;
  div.appendChild(span);
  var color = 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
  div.style.backgroundColor = color;
  return div;
}

var PANELS_COUNT = 6;
var DELTA = 50;
var panels = [];
var currentPanelId = 0;

var container = document.createElement('div');
container.className = 'container';
container.addEventListener('transitionend', onTransitionEnd);
var root = document.getElementsByClassName('root')[0];
root.appendChild(container);

(function () {
  var panel;
  for (var i = 0; i < PANELS_COUNT; ++i) {
    panel = generatePanel(i);
    panels.push(panel);
    if (i < 2) {
      container.appendChild(panel);
    }
  }
})();

moveTo(currentPanelId);
window.addEventListener('keydown', function (event) {
  var newPanelId;
  if (event.keyCode === 39) { // right
    // setTranslate(container, DELTA);
    newPanelId = currentPanelId + 1;
    if (newPanelId < panels.length) {
      moveTo(newPanelId);
      currentPanelId = newPanelId;
    }
  } else if (event.keyCode === 37) { // left
    // setTranslate(container, -DELTA);
    newPanelId = currentPanelId - 1;
    if (newPanelId < panels.length) {
      moveTo(newPanelId);
      currentPanelId = newPanelId;
    }
  }
}, false);


function onTransitionEnd() {
  for (var i = 0, l = panels.length; i < l; ++i) {
    if (currentPanelId - i > 1) {
      if (panels[i].parentNode) {
        removeElem(panels[i])
      }
    }
  }
  moveTo(currentPanelId)
}

function setTranslate(elem, x) {
  if (elem) {
    elem.style.transform = 'translateX(' + x + 'px)'
    // if (elem.style.transform) {
    //   elem.style.transform = 'translateX(' + (getTranslateOffset(elem) + delta) + 'px)';
    // } else {
    //   elem.style.transform = 'translateX(' + delta + 'px)'
    // }
  }
}

function getTranslateOffset(elem) {
  if (elem) {
    return Number(elem.style.transform.match(/-?\d+/)[0]);
  }
}

function moveTo(id) {
  var panel = document.getElementsByClassName('id' + id);
  if (panel.length > 0) {
    panel = panel[0];

    for (var i = 0, l = panels.length; i < l; ++i) {
      if (i - id > 1) {
        if (panels[i].parentNode) {
          removeElem(panels[i])
        }
      } else if (!panels[i].parentNode) {
        if (i < currentPanelId) {
          container.insertBefore(panels[i], panels[id]);
        } else { // greater then currentPanelId
          container.appendChild(panels[i]);
        }
      }
    }

    // var x = getTranslateOffset(container) + panel.offsetLeft;
    var x = (root.offsetWidth - panel.offsetWidth) / 2 - panel.offsetLeft;
    setTranslate(container, x);
  }
}

function removeElem(elem) {
  if (elem && elem.parentNode) {
    elem.parentNode.removeChild(elem);
  }
}


