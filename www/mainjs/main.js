//슬라이드 v1 
// $(document).ready(function(){
//     start();
//     var imgs = 3;
//     var now = 0;
//     function start(){
//         $(".slide_imgs>li").eq(0).siblings().css({"margin-left":"2000px"});
//         $(".slide_imgs>li").eq(1).css({"margin-left":"1720px"});
//         $(".slide_imgs>li").eq(3).css({"margin-left":"-1720px"});
//         setInterval(function(){slide();},2000);
//     }
//     function slide(){
//         now = now == imgs ? 0 : now +=1;
//         $(".slide_imgs>li").eq(now-1).css({"margin-left":"-1720px"});
//         $(".slide_imgs>li").eq(now).css({"margin-left":"0px"});
//         $(".slide_imgs>li").eq(now+1).css({"margin-left":"1720px"});
//         if((now+1)==4){
//             $(".slide_imgs>li").eq(0).css({"margin-left":"1720px"});
//         }
//     }
// });
$(document).ready(function(){
    
    var position = 0 ; 
    var movesize = 1720 ; //가져온 이미지의 너비
    var timeonoff;
    var imageCount=4;  //이미지 개수 *** 
    var cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
    var direct=1;  //1씩 증가(+1)/감소(-1) 
    $(".slide_imgs").after($(".slide_imgs").clone());
    

    timeonoff = setInterval(function(){
        position -= movesize ; 
        $('.slide_gallery').stop().animate({'left':position},0,function(){
            if(position == -6880){ //이미지 전체의 너비
                $('slide_gallery').css('left',position);
                position = 1720;
            }
        });
    },3000);

    $(".btn").click(function(){
        clearInterval(timeonoff);//인터벌 했던기능 스탑하는것
        var tar = $(event.target);//this는 target만큼 정확하지않음. 내가 클릭한대상.(엘리먼트.태그를 불러옴.)
        if(tar.is(".rgt_btn")){
            position -= movesize;
            $('.slide_gallery').stop().animate({'left':position},'fast',function(){
                if(position == -6880){
                    $('.slide_gallery').css('left',0);
                    position = 0;
                }
            });
        }
            else{
                if(position == 0){
                    $(".slide_gallery").css('left',-6880);
                    position = -6880; //중요.  시작할때(position이 0일때) 첫번째그림 왼쪽에 4번째 그림이 와야해서 넣어줬음. 
                }
                position += movesize;
                $(".slide_gallery").stop().animate({'left':position},"fast");
            }
        });


        //     $('.mbutton').click(function(event){  //각각의 버튼을 클릭한다면...
        
        //       var $target=$(event.target); //$target == this =>실제 클릭한 버튼
        //       clearInterval(timeonoff);   //타이머를 중지!!
        
        //       for(var i=1;i<=imageCount;i++){
        //           $('.btn'+i).css({'background':'url(../images/bnt.png)','background-size':'cover'}); //모든 버튼 불끈다
        //       }
        
        //       if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
        //              $('.slide_gallery').animate({left:0}, 'slow');
        //                   cnt=1;
        //                   direct=1;
        //       }else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
        //              $('.slide_gallery').animate({left:-1720}, 'slow');
        //                   cnt=2;
        //       }else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
        //              $('.slide_gallery').animate({left:-3540}, 'slow');
        //                   cnt=3;
        //                   direct=-1;
        //       }else if($target.is('.btn4')){ //세번째 버튼을 클릭했다면...
        //         $('.slide_gallery').animate({left:-5160}, 'slow');
        //              cnt=4;
        //              direct=-2;
        //  }
        //       $('.btn'+cnt).css({'background':'url(../images/bnt_on.png)','background-size':'cover'}); //클릭한 버튼의 불켜
        //       timeonoff= setInterval( moveg , 3000);  //타이머의 재 동작
        //     });
        //     //겔러리에 오버/아웃시 타이머의 동작/중지 기능 구현
        //        $('.slide_gallery').hover(function(){
        //             clearInterval(timeonoff);   //타이머를 중지
        //         },function(){
        //             timeonoff= setInterval( moveg , 3000);  //타이머의 재 동작
        //         });
            
        //   });
        });
