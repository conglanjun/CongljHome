var com = {
		/**
	     * ��������
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
         * ��ȡ��ǰʱ��
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
         * ת��ʱ�� str-->date
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
         * ����check
         * @param o jq�ؼ�
         * @param key ����
         * @param updateTips ���ط���
         * @returns {Boolean}
         */
        checkRegexp:function ( o, key,updateTips ) {
            o.val($.trim(o.val()));
            var n;
            var regexp;
            switch (key) {
            case 1:
                //���� ��ĸ ����
                regexp = /^[\w\u4e00-\u9fa5]+$/;
                n = "�ִ������ɺ���,��ĸ,���������";
                break;
            case 2:
                //����
                regexp = /^(-?((180)|(((1[0-7]\d)|(\d{1,2}))(\.\d+)?)))$/g;
                n = "��������ȷ�ľ���";
                break;
            case 3:
                //γ��
                regexp = /^(-?((90)|((([0-8]\d)|(\d{1}))(\.\d+)?)))$/g;
                n = "��������ȷ��γ��";
                break;
            case 4:
                //׮��
                regexp = /^[a-zA-Z]\d+\.\d+$/;
                n = "��������ȷ��׮��";
                break;
            case 5:
                regexp = /^[0-9]*$/;
                n = "����������";
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
                errorMsg: "�ֶβ���Ϊ��", 
                func: function(obj){
                    if(obj.val() == null || obj.val() == undefined)
                        return true;
                    return obj.val().trim().length == 0 ? true : false;}
            },
            mobilePhone:{
                type: "v_mobilePhone", 
                regex: /^1\d{10}$/, 
                errorMsg: "��������ȷ�ֻ���."
            },
            phone:{
                type: "v_phone", 
                regex: /^\d{10,12}$/, 
                errorMsg: "��������ȷ�绰��."
            },
            number: {
                type: "v_number", 
                regex: /^[0-9]*$/, 
                errorMsg: "����������."
            },
            float: {
                type: "v_float", 
                regex: /^(\d)+(\.)?(\d)*$/, 
                errorMsg: "������������С��."
            },
            name: {
                type: "v_name", 
                regex: /^[\w\u4e00-\u9fa5-_.@]+$/, 
                errorMsg: "���ݿ����ɺ���, ��ĸ, ����, '-', '_', '.', '@'���."
            },
            longitude: {
                type: "v_longitude", 
                regex: /^(-?((180)|(((1[0-7]\d)|(\d{1,2}))(\.\d+)?)))$/gi, 
                errorMsg: "��������ȷ�ľ���."
            },
            latitude: {
                type: "v_latitude", 
                regex: /^(-?((90)|((([0-8]\d)|(\d{1}))(\.\d+)?)))$/gi, 
                errorMsg: "��������ȷ��γ��."
            }, 
            stack: {
                type: "v_stack", 
                regex: /^(\d)+(\.)?(\d)*$/, 
                errorMsg: "��������ȷ��׮��."
            },
            date:{
                type: "v_date",
                regex: /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))(\s(20|21|22|23|[0-1]?\d):[0-5]?\d(:[0-5]?\d)?)?$/,
                errorMsg: "��������ȷ��ʽ������.(YYYY-MM-DD hh:mm:ss)"
            },
            eventType:{
                type: "v_eventType",
                errorMsg: "������ѡ��һ���¼�����.", 
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
                errorMsg: "������ѡ��һ��׮��",
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
                errorMsg: "��ʼ׮�Ų��ܴ��ڽ���׮��",
                func: function(obj){
                    var flg = false;
                    var direction = $("input[type='checkbox']", obj).val();
                    var $startStake = $(".startStake", obj);
                    var $endStake = $(".endStake", obj);
                    if($startStake.val() != "" && $endStake.val() != ""){
                        if(Number($startStake.val()) > Number($endStake.val())){
                            flg = true;
                            if(parseInt(direction))
                                this.errorMsg = "����·����ʼ׮�Ų���С�ڽ���׮��";
                            else
                                this.errorMsg = "����·����ʼ׮�Ų��ܴ��ڽ���׮��";
                        }
                    }
                    return flg;
                }
            },
            defaltRequired:{
                type: "v_defaltRequired",
                errorMsg: "�ֶβ���Ϊ��",
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
                errorMsg: "����ѡ��һ��Ԥ������",
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
                errorMsg: "����ѡ��һλ֪ͨ��Ա",
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
                errorMsg:"�������󳤶Ȳ��ܴ���",
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