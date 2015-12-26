var renderHTML = require('./render-html');

window.HTMLElement.prototype.render = function( html ) {
  return renderHTML( this, html );
};