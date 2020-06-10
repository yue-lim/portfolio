// $(function(){
// 껍데기 body영역 맨끝에 넣었으니까 굳이 없어도 됨
// })

var winWidth;

$(window).scroll(function(){
   var sct = $(this).scrollTop();
   if (sct > 40) {
      $('#header').addClass('red')
      $('.logo a img').attr("src", "img/logo.png")
   } else {
      $('#header').removeClass('red')
      $('.logo a img').attr("src", "img/logo_white.png")
   }
})

//header menu 이벤트
$('#header .menu >li >a').on("mouseover focus", function(){
   $(this).parent().addClass("on")
   $(this).parent().siblings().removeClass("on")
   $(this).next().stop().show()
})

//1210이하 submenu이벤트 
$('.menu >li >span').on("click", function(){
   $(this).siblings().removeClass("on")
   $(this).toggleClass("on")
   $(this).parent().find('.submenu').stop().slideToggle()
   $(this).parent().siblings().find('.submenu').slideUp()
})

$('#header .menu >li').on("mouseleave" , function(){
   $(this).find('.submenu').stop().hide()
   $(this).removeClass("on")
})

//햄버거버튼 시작
$(".openMenu").on("click", function(){
   $(this).parents(".header_nav").find(".closeBtn").show()
   $(this).siblings(".menu").show().css({width:500, right:"0px"})
})

//클로즈버튼 시작
$('.closeBtn').on("click", function(){
   $(this).hide()
   $(this).parent().find('.menu').hide().css({right:"-500px"})
})


//slide 슬라이드 이동
$('.slides').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   dots: true,
   prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
   nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})

//plpa 버튼 변환 if문
// $('.slide_box .plpa').on("click", function(){
//    if($(this).find('i').hasClass('fa-pause')){
//       $('.slides').slick('.slickPause')
//       $(this).find('i').removeClass('fa-pause').addClass('fa-play')
//    } else {
//       $('.slides').slick('.slickPlay')
//       $(this).find('i').removeClass('fa-play').addClass('fa-pause')
//    }
// })

//plpa 버튼 toggle문
$('.plpa').toggle(
   function(){
      $('.slides').slick('slickPause')
      $(this).find("i").removeClass("fa-pause").addClass("fa-play")
   },
   function(){
      $('.slides').slick('slickPlay')
      $(this).find("i").removeClass("fa-play").addClass("fa-pause")
   }
) 

//노베이스 테스트 슬릭 시작
//load했을 때 사이즈 측정한다음 함수부르고
$(window).load(function(){
   winWidth = $(this).width()
   winResize()
})

//resize했을 때도 사이즈 측정한다음 함수부름
$(window).resize(function(){
   winWidth = $(this).width()
   winResize()
})

//함수 이름 정한다음에 함수선언!
function winResize(){
    if (winWidth > 799) {
   $('.col2 .test_imgBox').slick({
      autoplay:true,
      autoplaySpeed: 3000,
      dots: true,
      draggable: true,
      arrows: false,
      fade: true,
      speed:800,
   })
} else {//슬릭이벤트 해제는 unslick!
   $('.col2 .test_imgBox').slick('unslick')
}
}



//강의 맛보기 슬릭 시작
$('.priv .priviewBox').slick({
   autoplay: true, 
   autoplaySpeed: 2000, 
   dots: false, 
   speed: 600, 
   centerMode: true,
   centerPadding:'50px', 
   slidesToShow: 1, 
   slidesToScroll:1, 
   pauseOnHover: true, 
   pauseOnDotsHover: true, 
   pauseOnFocus: false, 
   cssEase: 'linear', 
   draggable: true, 
   fade: false, 
   arrows: true, 
   prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
   nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})

$('.priviewBox img').on("click", function(){
   $('.popupBox').addClass('on')
   $('.popupBox .playbox iframe').attr("src",  $(this).attr('data-src'))
   var col3top = $('.col3').offset().top
   $('.playbox').css({
      top: col3top-280
   })
})

$('.popupBox button').on("click", function(){
   $('.popupBox').removeClass('on')
   //유투브동영상은 꺼도 소리가 나오니까 src주소도 벗겨줘야함!!
   $('.popupBox .playbox iframe').attr("src", "")
})

$('.rev .reviewBox').slick({
   autoplay: false,
   dots: false,
   draggable: true,
   arrows: false,
   centerMode: true,
   centerPadding:'0px', 
   slidesToShow: 3, 
   slidesToScroll:1
})






