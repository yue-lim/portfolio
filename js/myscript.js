// $(function(){
// 껍데기 body영역 맨끝에 넣었으니까 굳이 없어도 됨
// })

//header menu 이벤트
$('#header .menu >li >a').on("mouseover focus", function(){
   $(this).parent().addClass("on")
   $(this).parent().siblings().removeClass("on")
   $(this).next().stop().show()
})

$('#header .menu >li').on("mouseleave" , function(){
   $(this).find('.submenu').stop().hide()
   $(this).removeClass("on")
})

$(".openMenu").on("click", function(){
   $(this).parents(".header_nav").find(".closeBtn").show()
   $(this).siblings(".menu").show().animate({width: "45%"}, 500, "easeInOutCubic")
})





