var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

	var processed = postxml([plugin(opts)]).process(input);

	expect(processed).to.eql(output);
};

describe('postxml-remove', function () {
	it('remove element', function () {
		test(
			'<div class="remove"></div>',
			'',
			{
				selector: '.remove'
			}
		);
	});
	it('without options', function () {
		test(
			'<div class="remove"></div>',
			'<div class="remove"></div>'
		);
	});
});
