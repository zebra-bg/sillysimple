var SILLY = (function(module){
	module.DoIt = function(resourceObject) {
		resourceObject.prepend(Date() + '<br />');
	};

	return module;
}(SILLY || {}));
