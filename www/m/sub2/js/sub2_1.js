$(document).ready(function(){

    $('.tap_menu>div.sub_tab1').show();
    $('.sub_tab1 div.sub_con1').show();

    $("#first_click").click(function(){

        $(".sub_menu>ul>li>a").removeClass();
        $('#sub_first').addClass('sub_current');
        $('.sub_tab1 div.sub_con1').show();

        
    });
    $("#second_click").click(function(){
    
        $(".sub_tab2>ul>li>a").removeClass();
        $('#first_tap').addClass('sub_current');
        $(".tab").hide();
        $(".sub_con1").show();
        $(".tab_cnt_wrap>.tab2").hide();
        $(".tab_cnt_wrap>.sub_con1").show();
        $(".tap_sub_con1").show();
        
    });

    
    $(".tap_menu>ul>li").click(function(){
        var ind = $(this).index();
        $(".tap_menu>ul>li>a").removeClass(); 
        $('a',this).addClass('current'); 
        $('.tap_menu .sub_menu').hide();
        $('.sub_tab'+(ind+1)).show();
        
    });


    $(".sub_menu>ul>li").click(function(){
        var ind = $(this).index();

        $(".sub_menu>ul>li>a").removeClass();
        $('a',this).addClass('sub_current');
        $('.sub_menu .tab').hide();
        $('.sub_con'+(ind+1)).show();
        
    });
    
    $(".sub_tab2>ul>li").click(function(){
        var ind = $(this).index();

        $(".tap_sub_menu>ul>li>a").removeClass();
        $('#first_tap_sub'+(ind+1)).addClass('sub2_current');
    });

    $(".tap_sub_menu>ul>li").click(function(){
        var ind = $(this).index();

        $(".tap_sub_menu>ul>li>a").removeClass();
        $('a',this).addClass('sub2_current');
        $('.tap_sub_menu .tab2').hide();
        $('.tap_sub_menu .tab2').removeClass('sub2_current');
        $('.tap_sub_con'+(ind+1)).show(); 
        $('.tap_sub_con'+(ind+1)).addClass('sub2_current'); 
    });


});
