(function(window, undefined) {
	var $$ = (function() {
		var $$ = function() {
			
		}

		var toString = Object.prototype.toString;
		var slice = Array.prototype.slice;
		//这里需要定义一些其他变量，通过自定义匿名函数返回$$，减少与外部的耦合
		$$.prototype = {
			constructor: $$,
			//通过id获取DOM对象
			id: function(id) {
				return document.getElementById(id);
			},
			//通过tagName获取DOM对象
			tag: function(tagNmae) {
				return document.getElementsByTagName(tagName);
			},
			//获取与设置css属性
			css: function(obj, key, value) {
				if(arguments.length == 2) {//获取
					return obj.currentStyle ? obj.currentStyle[key] : getComputedStyle(obj, false)[key];
				}else if(arguments.length == 3) {//设置
					return obj.style[key] = value;
				}else {
					return false;
				}
			},
			//可视区高度
			wHeight: function() {
				if(document.compatMode == "BackCompat") {//渲染方式
				     return document.body.clientHeight;
				}else {	//"CSS1compat"
				     return document.documentElement.clientHeight;
				}
			},
			//可视区宽度
			wWidth: function() {
				if(document.compatMode == "BackCompat") {
				     return document.body.clientWidth;
				}else {
				     return document.documentElement.clientWidth;
				}
			},
			//获取滚动条垂直位置
			scrollTop: function(element) {
				return element ? element.scrollTop : document.documentElement.scrollTop || document.body.scrollTop;
			},
			//获取滚动条水平位置
			scrollLeft: function(element) {
				return element ? element.scrollLeft : document.documentElement.scrollLeft || document.body.scrollLeft;
			},  
			//获取元素的宽度
			offsetWidth: function(element) {
				return element.offsetWidth;
			},
			//获取元素的高度
			offsetHeight: function(element) {
				return element.offsetHeight;
			},
			//事件绑定
			addHandler: function(elememnt, type, handler) {
				if(element.addEventHandler) {
					element.addEventHandler(type, handler, false);
				}else if (element.attachEvent) {
					element.attachEvent("on" + type, handler);
				}else {
					element["on" + type] = handler;
				}
			},
			//解除事件绑定
			removeHandler: function(element, type, handler) {
				if(element.removeEventHandler) {
					element.removeEventHandler(type, handler, false);
				}else if(element.datachEvent) {
					element.datachEvent("on" + type, handler);
				}else {
					element["on" + type] = handler;
				}
			},
			getEvent: function(event) {
				return event || window.event;
			},
			getTarget: function(event) {
				return event.target || event.scrElement;
			},
			//阻止默认事件
			preventDefault: function(event) {
				event.preventDefault ? event.preventDefault() : event.returnValue = false;
			},
			//阻止事件冒泡
			stopPropagation: function(event) {
				event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
			},
			//获取鼠标按键值
			getButton: function(event) {
				if(document.implementation.hasFeature("MouseEvents", "2.0")) {
					return event.button;
				}else {
					switch(event.button) {
						case 0:
						case 1:
						case 3:
						case 5:
						case 7: return 0;
						case 2:
						case 6: return 2;
						case 4: return 1;
					}
				}
			},
			//获取按键编码
			getCharCode: function(event) {
				return typeof event.charCode == "number" ? event.charCode : event.keyCode;
			},
			//获取滚轮位置
			getWheelDate: function(event) {
				return event.wheelDate ? (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDate : event.wheelDate) : - event.detail * 40;
			},
			//扩展对象
			extend: function() {
				var target = arguments[0] || {};
				var arrs = slice.call(arguments, 1);
				var len = arrs.length;
				for(var i = 0; i < len; i++) {
					var arr = arrs[i];
					for(var name in arr) {
						target[name] = arr[name];
					}
				}
				return target;
			},
			//克隆对象
			clone: function() {
				var args = slice.call(arguments);
				return this.extend.apply(null, [{}].concat(args));
			},
			//判断obj对象的类型
			type: function(obj) {
				return toString.call(obj).slice(8, -1);
			},
			//判断obj是否为数字
			isNumber: function(obj) {
				return !isNaN(parsentFloat(obj)) && isFinite(obj);
			},
			//判断obj是否为空对象
			isEmptyObject: function(obj) {
				for(var name in obj) {
					return false;
				}
				return true;
			}
		}
		return new $$();
	})();
	window.$$ = $$;

})(window);