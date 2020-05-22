// $(function(){
// 껍데기 body영역 맨끝에 넣었으니까 굳이 없어도 됨
// })

$('#header .menu >li').on("click", function(){
   $(this).addClass("on")
   $(this).siblings().removeClass("on")
   $(this).find('.submenu').stop().toggle(400)
})