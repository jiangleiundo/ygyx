var layer;
layui.use('layer', function(){
    layer = layui.layer;
});

/**
 * {common} 公共方法
 * {author} jack
 */
var commonFn = {
    /**
     * 屏幕宽度
     * @returns {number} 返回三种屏类型代号
     */
    screenWidth: function(){
        var type = 0;
        var screen = $(window).width();

        if(screen >= 1920) {type = 3}
        else if(screen < 1920 && screen >= 1280) {type = 2}
        else {type = 1}

        return type;
    },
    /**
     *验证邮箱是否正确
     * @param id 当前表单id
     */
    checkEmail : function(id){
        $("#"+id).on("blur", function(){

            var user =  $("#"+id).val(); //取邮箱账号

            if(commonFn.isEmpty(user)){
                layer.msg("请填写邮箱地址");
            }else{
                if(commonFn.regCheckEmail(user)){
                    $.ajax({
                        url : "https://www.yinggui.tv/portal/public/email",
                        data : {user_login: user},
                        type : "post",
                        dataType : "json",
                        success : function (data) {
                            if(data == 0){
                                layer.msg("该邮箱可以使用");
                            }else{
                                layer.msg("该邮箱已存在");
                            }
                        }
                    });
                }else{
                    layer.msg("邮箱格式不正确");
                }
            }
        });
    },

    /**
     * 验证邮箱是否合法
     * @param val
     */
    regCheckEmail : function(val){
        var r = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(r.test(val)){
            return true;
        }else{
            return false;
        }
    },

    /**
     * 是否为空
     * @param s 需要判断的字符串
     */
    isEmpty : function(s){
        var i = false;

        try{
            if(s == "" || s == null || s == undefined || s == "''" || s =='""'){
                i = true;
            }else{
                i = false;
            }
        }catch(e){i = false;}

        return i;
    },

    /**
     * 判断两个值是否相等
     */
    isEqual : function(val1, val2){
        var equal = false;

        try{
            if(val1.toString() == val2.toString()){
                equal = true;
            }
        }catch(e){
            equal = false;
        }
        return equal;
    }
}
