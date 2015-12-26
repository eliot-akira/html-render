// Build IDOM for ast node
// Based on: https://github.com/ericponto/html2IDOM/blob/master/light.js

var iDOM = require('incremental-dom');

var renderAstNode = function( node ) {

	if ( node.type === 'text' ) {
		return iDOM.text( node.content );
	}

	if ( node.type !== 'tag' ) return;

	var argsArray = [ node.name, null, null ];

	// Convert attributes object into a flat array
	for (var attr in node.attrs) {
		argsArray.push( attr );
		argsArray.push( node.attrs[attr] );
	}

	if ( node.voidElement ) {
		return iDOM.elementVoid.apply( null, argsArray );
	}

	iDOM.elementOpen.apply( null, argsArray );

	node.children.forEach( renderAstNode );

	iDOM.elementClose( node.name );
}

module.exports = renderAstNode;