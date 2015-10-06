module.exports = function (options) {
	
	options = options || {};
	
	return function ($) {
		$(options.selector).remove();
	};
};
