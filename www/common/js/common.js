$(document).ready(function(){
    $("#gnb>ul>li").hover(
    function(){
        $(this).children(".sub_menu").stop().slideDown('nomal');
    },
    function(){
        $(this).children(".sub_menu").stop().slideUp('nomal');
    }
)});
// top버튼
$(document).ready(function(){
    $(".top_btn").click(function(){
        $('html,body').stop().animate({"scrollTop":0},1400);
    });
    $(window).on("scroll",function(){
        let scroll = $(window).scrollTop();
        if(scroll>=1000){
            $(".top_btn").fadeIn('slow');
        }else{
            $(".top_btn").fadeOut('slow');
        }
    });
});