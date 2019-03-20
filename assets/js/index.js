$(function(){
	// 弹框初始化
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//
	var timer = setInterval(function(){
			doItPerSecond();
		},60000);


	function doItPerSecond() {
		var sess = "<?php $_SESSION['id']?>";
		if(sess != "null"||sess!="")
		{
			$.ajax({
				url : "{:U('portal/public/reset')}",

				dataType : "TEXT",
				success : function (data) {}
			});
		}else{
			return true;
		}
	}

	// show des
	function show_des(){
		var bar_a = document.getElementById('bar_a');
		var bar_b = document.getElementById('bar_b');
		if(bar_a.style.display == "block"){
			bar_a.style.display = "none";
		}else{
			bar_a.style.display = "block";
			bar_b.style.display = "none";
		}
	}

	// layui init
	layui.use(['carousel', 'form'], function(){
		var carousel = layui.carousel
				,form = layui.form;

		//图片轮播
		carousel.render({
			elem: '#test10'
			,width: '95%'
			,height: '200px'
			,interval: 5000
		});

		//监听开关
		form.on('switch(autoplay)', function(){
			ins3.reload({
				autoplay: this.checked
			});
		});

		//其它示例
		$('.demoTest .layui-btn').on('click', function(){
			var othis = $(this), type = othis.data('type');
			active[type] ? active[type].call(this, othis) : '';
		});
	});
		// 用户登录注册
	commonFn.checkEmail("user");
	commonFn.checkEmail("in_user");

	$("#pw2").on("blur", function(){
		var pw1 = $("#pw1").val();
		var	pw2 = $("#pw2").val();

		if(commonFn.isEmpty(pw1) || commonFn.isEmpty(pw2)){
			layer.msg("密码不能为空");
		}
		else if(commonFn.isEqual(pw1, pw2)) {
			$("#submit").disabled = false;
		}
		else{
			layer.msg("两次密码不一致");
			$("#submit").disabled = true;
		}
	});
});