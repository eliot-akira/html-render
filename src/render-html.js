var iDOM = require("incremental-dom");
var parse = require("html-parse-stringify").parse;
var renderAstNode = require('./render-ast');

var renderHTML = function( el, html ) {

  if ( typeof html === 'undefined' ) return;

  // Wrap in single root element
  // Support HTML with zero, single or multiple nodes
  html = '<div>' + html + '</div>';

  try {

    iDOM.patch( el, function() {

	    var ast = parse( html );

      if ( ast[0] == null || ! Array.isArray(ast[0].children) ) return;
      // Unwrap from root element
      ast[0].children.forEach(renderAstNode);
    });

  } catch (e) {}
};

module.exports = renderHTML;