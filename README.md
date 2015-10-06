# postxml-remove
[![npm version][npm-image]][npm-url]

> [PostXML] plugin that remove elements by query selectors.

## Installation
`npm i postxml-remove --save-dev`

## Usage
[Postxml]

## Options

### selector
*Query selector for removing*<br>
Type: `String`<br>
Default: `''`

## Example

### Input
```html
<body>
	<div class="remove"></div>
</body>
```

### Options
```js
{
	selector: 'div.remove'
}
```

### Output
```html
<body>
</body>
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-remove
[npm-image]: http://img.shields.io/npm/v/postxml-remove.svg?style=flat-square
