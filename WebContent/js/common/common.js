var com = {
		/**
	     * 日期排序
	     * @param itemStr
	     * @param ASC
	     * @returns {Function}
	     */
	    dateSort:function (itemStr,ASC) {
	         if(ASC == undefined){
	                ASC = true;
	            }
	        return function (a, b) {
	          var aDate = new Date(a[1]);
	          var bDate = new Date(b[1]);
	          if(ASC){
	              return aDate-bDate;
	            }else{
	                  return bDate-aDate;
	            }
	        
	        };
	    },
	    currentDate : function() {
        	var date = new Date();
            var str = "";
            str += date.getFullYear() + '-';
            str += date.getMonth() + 1 + '-';
            str += date.getDate() ;
            return str;
        },
        /**
         * 获取当前时间
         * @returns {String}
         */
        currentTime : function() {
            var date = new Date();
            var str = "";
            str += date.getFullYear() + '-';
            str += date.getMonth() + 1 + '-';
            str += date.getDate() + " ";
            str += date.getHours() + ':';
            str += date.getMinutes() + ':';
            str += date.getSeconds();
            return str;
        },
        /**
         * 转化时间 str-->date
         * @param timestr
         * @returns
         */
        time : function(timestr) {
            var d="";
            if(timestr){
                var retval = new Date(Date.parse(timestr.replace(/-/g, "/")));
                d = Date.parse(retval);
            }
            return d;
        },
        /**
         * 正则check
         * @param o jq控件
         * @param key 类型
         * @param updateTips 返回方法
         * @returns {Boolean}
         */
        checkRegexp:function ( o, key,updateTips ) {
            o.val($.trim(o.val()));
            var n;
            var regexp;
            switch (key) {
            case 1:
                //汉字 字母 数字
                regexp = /^[\w\u4e00-\u9fa5]+$/;
                n = "字串必须由汉字,字母,或数字组成";
                break;
            case 2:
                //经度
                regexp = /^(-?((180)|(((1[0-7]\d)|(\d{1,2}))(\.\d+)?)))$/g;
                n = "请输入正确的经度";
                break;
            case 3:
                //纬度
                regexp = /^(-?((90)|((([0-8]\d)|(\d{1}))(\.\d+)?)))$/g;
                n = "请输入正确的纬度";
                break;
            case 4:
                //桩号
                regexp = /^[a-zA-Z]\d+\.\d+$/;
                n = "请输入正确的桩号";
                break;
            case 5:
                regexp = /^[0-9]*$/;
                n = "请输入数字";
                break;
            default:
                break;
            }
            if ( !( regexp.test( o.val() ) ) ) {
                o.addClass( "ui-state-error" );
                o.on("focus",function(event ){
                     o.removeClass( "ui-state-error");
                     o.unbind(event);
                });
                if(updateTips){
                    updateTips( n );
                 }
                return false;
            } else {
            return true;
            }
        },
        
        validator: {
            required: {
                type: "v_required", 
                errorMsg: "字段不能为空", 
                func: function(obj){
                    if(obj.val() == null || obj.val() == undefined)
                        return true;
                    return obj.val().trim().length == 0 ? true : false;}
            },
            mobilePhone:{
                type: "v_mobilePhone", 
                regex: /^1\d{10}$/, 
                errorMsg: "请输入正确手机号."
            },
            phone:{
                type: "v_phone", 
                regex: /^\d{10,12}$/, 
                errorMsg: "请输入正确电话号."
            },
            number: {
                type: "v_number", 
                regex: /^[0-9]*$/, 
                errorMsg: "请输入整数."
            },
            float: {
                type: "v_float", 
                regex: /^(\d)+(\.)?(\d)*$/, 
                errorMsg: "请输入整数或小数."
            },
            name: {
                type: "v_name", 
                regex: /^[\w\u4e00-\u9fa5-_.@]+$/, 
                errorMsg: "内容可以由汉字, 字母, 数字, '-', '_', '.', '@'组成."
            },
            longitude: {
                type: "v_longitude", 
                regex: /^(-?((180)|(((1[0-7]\d)|(\d{1,2}))(\.\d+)?)))$/gi, 
                errorMsg: "请输入正确的经度."
            },
            latitude: {
                type: "v_latitude", 
                regex: /^(-?((90)|((([0-8]\d)|(\d{1}))(\.\d+)?)))$/gi, 
                errorMsg: "请输入正确的纬度."
            }, 
            stack: {
                type: "v_stack", 
                regex: /^(\d)+(\.)?(\d)*$/, 
                errorMsg: "请输入正确的桩号."
            },
            date:{
                type: "v_date",
                regex: /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))(\s(20|21|22|23|[0-1]?\d):[0-5]?\d(:[0-5]?\d)?)?$/,
                errorMsg: "请输入正确格式的日期.(YYYY-MM-DD hh:mm:ss)"
            },
            eventType:{
                type: "v_eventType",
                errorMsg: "请至少选择一种事件类型.", 
                func: function(obj){
                    var flg = true;
                    $("input", obj).each(function(){
                        if($(this).prop("checked")){
                            flg = false;
                        }
                    });
                    return flg;
                }
            },
            eventStake:{
                type: "v_eventStake",
                errorMsg: "请至少选择一种桩号",
                func: function(){
                    var flg = true;
                    $("input[type='checkbox']").each(function(){
                        if($(this).prop("checked")){
                            flg = false;
                        }
                    });
                    return flg;
                }
            },
            v_stakeCompare:{
                type: "v_stakeCompare",
                errorMsg: "起始桩号不能大于结束桩号",
                func: function(obj){
                    var flg = false;
                    var direction = $("input[type='checkbox']", obj).val();
                    var $startStake = $(".startStake", obj);
                    var $endStake = $(".endStake", obj);
                    if($startStake.val() != "" && $endStake.val() != ""){
                        if(Number($startStake.val()) > Number($endStake.val())){
                            flg = true;
                            if(parseInt(direction))
                                this.errorMsg = "下行路段起始桩号不能小于结束桩号";
                            else
                                this.errorMsg = "上行路段起始桩号不能大于结束桩号";
                        }
                    }
                    return flg;
                }
            },
            defaltRequired:{
                type: "v_defaltRequired",
                errorMsg: "字段不能为空",
                func: function(obj){
                    if(obj.val() == null || obj.val() == undefined){
                        return true;
                    }
                    if(obj.val() == obj[0].defaultValue){
                        return true;
                    }
                    return obj.val().trim().length == 0 ? true : false;
                }
            },
            monitortype:{
                type : "v_monitortype",
                errorMsg: "至少选择一个预警条件",
                func: function(obj){
                    var flg = true;
                    $("input", obj).each(function(){
                        if($(this).prop("checked")){
                            flg = false;
                        }
                    });
                    return flg;
                }
            },
            informPer:{
                type : "v_informPer",
                errorMsg: "至少选择一位通知人员",
                func: function(obj){
                    var flg = true;
                    $("input", obj).each(function(){
                        if($(this).prop("checked")){
                            flg = false;
                        }
                    });
                    return flg;
                }
            },
            maxLength:{
                type:"v_length",
                errorMsg:"输入的最大长度不能大于",
                func: function(obj){
                    var value = obj.val();
                    var length = 0;
                    for(var i=0;i<value.length;i++){
                        var len = value.charCodeAt(i);
                        if(len>=0&&len<=128)
                            length+=1;
                        else
                            length+=2;
                    }
                    var maxLength = parseInt(obj.attr("maxLength"));
                    if(maxLength < length){
                        this.errorMsg = this.errorMsg + maxLength;
                        return true;
                    }else
                        return false;
                }
            }
        }
};