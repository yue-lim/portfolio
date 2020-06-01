// $(function(){
// 껍데기 body영역 맨끝에 넣었으니까 굳이 없어도 됨
// })

//header menu 이벤트
$('#header .menu >li >a').on("mouseover focus", function(){
   if (winWidth > 1210) {
   $(this).parent().addClass("on")
   $(this).parent().siblings().removeClass("on")
   $(this).next().stop().show()
   }
})

//1210이하 menu이벤트 
$('.menu >li >span').on("click", function(){
   $(this).siblings().removeClass("on")
   $(this).toggleClass("on")
   $(this).parent().find('.submenu').stop().slideToggle()
   $(this).parent().siblings().find('.submenu').slideUp()
   
})

var winWidth 
function wid() {
   winWidth = $(window).width()
}

$('#header .menu >li').on("mouseleave" , function(){
   if (winWidth > 1210) {
      $(this).find('.submenu').stop().hide()
   $(this).removeClass("on")
   }
})

//햄버거버튼 시작
$(".openMenu").on("click", function(){
   $(this).parents(".header_nav").find(".closeBtn").show()
   $(this).siblings(".menu").show().animate({width: "45%"}, 500, "easeInOutCubic")
})

//클로즈버튼 시작
$('.closeBtn').on("click", function(){
   $(this).hide()
   $(this).parent().find('.menu').hide().animate({width:"0%"}, 500, "easeInOutCubic")
})








