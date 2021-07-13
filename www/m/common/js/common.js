//gnb모바일 왼쪽에서 나오게, 높이 잡아주기, bg누르면 gnb사라지게
$(document).ready(function(){
    $(".menu_icon").click(function(){
      $(".menu_icon").hide();
        let documentHeight = $(document).height();
        let windowHeight = $(window).height();
        $('.menu_bg').css('height',documentHeight);
        $("#gnb").css('height',windowHeight);
        $('.menu_bg').show();
        $("#gnb").animate({left:"0", opacity: "1"},"slow");
    });
    $(".close_btn, .menu_bg").click(function(){
      $(".menu_icon").show();
        $('.menu_bg').hide();
        $("#gnb").animate({left:"-100%", opacity: "0"},"fast");
    });
});

//gnb에서 원뎁스 누르면 2뎁스 나오게
$(document).ready(function(){
  $("#gnb .depth").click(function(){
    $('.sub_menu').hide();
    $(this).next(".sub_menu").slideDown('slow');
  });
});

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