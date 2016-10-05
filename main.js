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
    }
)

function swap(array, index_a, index_b) {
  var a = array[index_a];
  var b = array[index_b];

  array[index_a] = b;
  array[index_b] = a;
}
