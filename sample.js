const Fooplot = require('./lib')
const { FOOPLOT_TYPE_FUNCTION, FOOPLOT_TYPE_POLAR} = require('./lib/constants')

function main() {
  // lots more features are available, this is just a "hello world"
  // program.
  myPlot = new Fooplot(document.getElementById('myPlot'));
  myPlot.addPlot('sin(x)+0.5/x',FOOPLOT_TYPE_FUNCTION);
  myPlot.reDraw();
}


window.addEventListener('DOMContentLoaded', main, false)
