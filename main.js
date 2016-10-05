var frogs = ['left', 'left', 'left', 'left', 'no', 'right', 'right', 'right', 'right'];

function render(frogs) {
  var element = document.querySelector('.pond');

  frog_elements = frogs.map(function(type) {
    return '<div class="' + type + '-frog"></div>'
  }).join('\n');

  element.innerHTML = frog_elements
}

render(frogs);
