// 스크롤 내리면 헤더 배경색 변경
$(document).ready(function(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() >50) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });
});

 // top버튼
$(document).ready(function(){
    $(".top_btn").click(function(){
        $('html,body').stop().animate({"scrollTop":0},1400);
    });
    $(window).on("scroll",function(){
        let scroll = $(window).scrollTop();
        if(scroll>=100){
            $(".top_btn").fadeIn('slow');
        }else{
            $(".top_btn").fadeOut('slow');
        }
    });
});
//일정 해상도 아래로 내려가면 배경 변경
$(document).ready(function(){

    $(window).resize(function(){
    
    var width = window.innerWidth;
    
    if(width < 768){
    
    $('#img_change').attr('src', 'images/main_visual_img03.jpg')
    
    }
    
    else {$('#img_change').attr('src', 'images/main_visual_img.jpg');}
    
    }).resize();
    
});