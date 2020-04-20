import Fooplot from './lib'
import { FOOPLOT_TYPE_FUNCTION } from './lib/constants'

function main() {
  const myPlot = new Fooplot(document.getElementById('myPlot'));
  myPlot.addPlot('sin(x)+0.5/x', FOOPLOT_TYPE_FUNCTION);
  myPlot.reDraw();
}


window.addEventListener('DOMContentLoaded', main, false)
