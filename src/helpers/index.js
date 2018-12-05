export const duplicateComponent = (n, component ) =>
  [...Array(n).keys()].map( i => component(i) );