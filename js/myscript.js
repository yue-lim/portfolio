// $(function(){
// 껍데기 body영역 맨끝에 넣었으니까 굳이 없어도 됨
// })

$('#header .menu >li >a').on("mouseover focus", function(){
   $(this).parent().addClass("on")
   $(this).parent().siblings().removeClass("on")
   $(this).next().stop().show(400)
})

$('#header .menu >li >a').on("mouseleave" , function(){
   $(this).next().stop().hide(400)
   $(this).parent().removeClass("on")
})



