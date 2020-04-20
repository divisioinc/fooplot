// interface "constants"

export const FOOPLOT_TYPE_FUNCTION=0;
export const FOOPLOT_TYPE_POLAR=1;
export const FOOPLOT_TYPE_PARAMETRIC=2;
export const FOOPLOT_TYPE_POINTS=3;

export const FOOPLOT_MODE_MOVE=1;
export const FOOPLOT_MODE_ZOOMBOX=2;
export const FOOPLOT_MODE_INTERSECTION=3;
export const FOOPLOT_MODE_TRACE=4;

export const FOOPLOT_UNITS_PI=1;
export const FOOPLOT_UNITS_E=2;

export const FOOPLOT_MSIE=(navigator.userAgent.toLowerCase().indexOf('msie')!=-1);


// extended math functions
export const FOOPLOT_MATH = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  abs: Math.abs,
  floor: Math.floor,
  ceil: Math.ceil,
  exp: Math.exp,
  sqrt: Math.sqrt,
  max: Math.max,
  min: Math.min,
  sec: function(x) { return 1/Math.cos(x) },
  csc: function(x) { return 1/Math.sin(x) },
  cot: function(x) { return 1/Math.tan(x) },
  asec: function(x) { return Math.acos(1/x) },
  acsc: function(x) { return Math.asin(1/x) },
  acot: function(x) { return Math.atan(1/x) },
  ln: function(x) { return Math.log(x) },
  log: function(x) { return Math.log(x)/Math.log(10) },
  sinh: function(x) { return (Math.exp(x)-Math.exp(-x))/2 },
  cosh: function(x) { return (Math.exp(x)+Math.exp(-x))/2 },
  tanh: function(x) { return (Math.exp(x)-Math.exp(-x))/(Math.exp(x)+Math.exp(-x)) },
  asinh: function(x) { return Math.log(x+Math.sqrt(x*x+1)) },
  acosh: function(x) { return Math.log(x+Math.sqrt(x*x-1)) },
  atanh: function(x) { return 0.5*Math.log((1+x)/(1-x)) },
  sech: function(x) { return 2/(Math.exp(x)+Math.exp(-x)) },
  csch: function(x) { return 2/(Math.exp(x)-Math.exp(-x)) },
  coth: function(x) { return (Math.exp(x)+Math.exp(-x))/(Math.exp(x)-Math.exp(-x)) },
  asech: function(x) { return Math.log(1/x+Math.sqrt(1/x/x-1)) },
  acsch: function(x) { return Math.log(1/x+Math.sqrt(1/x/x+1)) },
  acoth: function(x) { return 0.5*Math.log((1+x)/(1-x)) },
  u: function(x) { return (x>=0) },
}