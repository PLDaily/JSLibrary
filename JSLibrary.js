(function(window, undefined) {
	var $$ = (function() {
		var $$ = function() {
			
		}

		//这里需要定义一些其他变量，通过自定义匿名函数返回，减少与外部的耦合
		$$.prototype = {
			constructor: $$,
			id: function(id) {
				return 111;
			}
		}

		return new $$();
	})();
	window.$$ = $$;

})(window);