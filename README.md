# HTML render

HTMLElement render method with incremental DOM update

## Include

The following adds a `render` method to HTMLElement.

~~~javascript
require('html-render');
~~~

## Use

~~~javascript
var app = document.body.querySelector('app-root');

app.render( html );
app.render( newHtml );
~~~

This updates the DOM efficiently by rendering only the difference.

## Based on

[Incremental DOM](https://github.com/google/incremental-dom)

[html-parse-stringify](https://github.com/henrikjoreteg/html-parse-stringify)

[html2IDOM](https://github.com/ericponto/html2IDOM) (light version)
