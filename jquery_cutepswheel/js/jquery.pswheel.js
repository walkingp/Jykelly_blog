/*
 * jQuery.pswheel 
 * an input control's input enhance jQuery plugin
 * walkingp (c) All right reserved
 * htttp://walkingp.com/cutepswheel
 * 2012-3-2
 */
(function($) {
    $.fn.pswheel = function(options) {
        var defaults = {
            interval: 1, //间隔
            floatInterval: 0.1, //小数点的间隔
            min: undefined, //最小数值
            max: undefined//最大数值
        };
        var options = $.extend(defaults, options);
        var orientArray = []; //存储原始的数值
        var intervalPointerArray = []; //存储小数点长度，格式化小数
        //初始化
        function Initial(obj, pointer) {
            var $this = $(obj);
            var pointerLen = 0;
            if (options.interval.toString().indexOf('.') >= 0) {
                pointerLen = parseInt(options.interval.toString().length) - parseInt(options.interval.toString().indexOf('.')) - 1;
            }
            intervalPointerArray.push(pointerLen);
            var initialVal = ParseValue($this.val());
            if (initialVal) {
                orientArray.push(initialVal);
            } else {
                orientArray.push(0);
            }
            //绑定滚动事件
            if ($.browser.mozilla) {//兼容firefox
                $this.bind('DOMMouseScroll', function(e) {
                    //防止冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.detail > 0) {//下滚
                        Process('up', $this, pointer);
                    } else {
                        Process('down', $this, pointer);
                    }
                });
            } else {
                $this.bind('mousewheel', function(e) {
                    //防止冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.wheelDelta > 0) {//下滚
                        Process('up', $this, pointer);
                    } else {
                        Process('down', $this, pointer);
                    }
                });
            }
            //绑定双击事件
            $this.bind('dblclick', function() {
                var val = orientArray[pointer];
                $this.val(val);
            });
        }
        //是否小数
        function IsFloat(str) {
            var reg = /^([1-9](\d)+|0)\.\d+/gi;
            if (reg.test(str)) {
                return true;
            }
            return false;
        }
        //返回数值（int）
        function ParseValue(str) {
            if (IsFloat(str)) {
                return parseFloat(str);
            }
            return parseInt(str);
        }
        //事件
        function Process(direct, obj, pointer) {
            var $obj = $(obj);
            $obj.focus();
            var val = parseFloat($obj.val());
            switch (direct) {
                case 'up':
                    if (options.max) {
                        if (val >= options.max) {
                            break;
                        }
                    }
                    val += options.interval;
                    break;
                case 'down':
                    if (!!!options.min) {
                        if (val <= options.min) {
                            break;
                        }
                    }
                    val -= options.interval;
                    break;
            }
            val = val.toFixed(intervalPointerArray[pointer]);
            $obj.val(val).select();
        }
        var options = $.extend(defaults, options);
        //注册事件
        this.each(function(i) {
            var $this = $(this);
            var val = $this.val();
            if (IsFloat(val) && !options.interval) {
                options.interval = options.floatInterval;
            }
            Initial($this, i);
        });
    };
})(jQuery);