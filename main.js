var frogs = ['left', 'left', 'left', 'left', 'no', 'right', 'right', 'right', 'right'];

function render(frogs) {
  var element = document.querySelector('.pond');

  frog_elements = frogs.map(function(type) {
    return '<div class="' + type + '-frog"></div>'
  }).join('\n');

  element.innerHTML = frog_elements
}

render(frogs);

$(document).delegate('.left-frog', 'click',
    function(event){
      var index = $(this).index();

      if (frogs[index + 1] === 'no') {
        swap(frogs, index, index + 1)
      }
      else if (frogs[index + 2] === 'no') {
        swap(frogs, index, index + 2)
      }

      render(frogs)
      checkGameOver();
    }
)

$(document).delegate('.right-frog', 'click',
    function(event){
      var index = $(this).index();

      if (frogs[index - 1] === 'no') {
        swap(frogs, index, index - 1)
      }
      else if (frogs[index - 2] === 'no') {
        swap(frogs, index, index - 2)
      }

      render(frogs)
      checkGameOver();
    }
)

function checkGameOver() {
  if (didWin()) {
    onWin();
  } else if (didLose()) {
    onLose();
  }
}

function didWin() {
  return deepEqual(frogs, ['right','right','right','right','no','left','left','left','left']);
}

function didLose() {
  return !!window.has_lost;
}

function onWin() {
  alert('you won!');
  refresh();
}

function onLose() {
  alert('you lost!');
  refresh();
}

function refresh() {
  frogs = ['left', 'left', 'left', 'left', 'no', 'right', 'right', 'right', 'right'];
  render(frogs)
}

function swap(array, index_a, index_b) {
  var a = array[index_a];
  var b = array[index_b];

  array[index_a] = b;
  array[index_b] = a;
}

function deepEqual(array_a, array_b) {
  if (array_a.length !== array_b.length) {
    return false;
  }
  for (var i in array_a) {
    if (array_a[i] !== array_b[i]) return false;
  }
  return true;
}
