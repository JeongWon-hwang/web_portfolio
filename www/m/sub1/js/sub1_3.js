$(document).ready(function(){

    $('.tap_menu>div.sub_tab2').hide();
    $('.sub_tab1 div.sub_con1').show();

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
    

    $("#first_click").click(function(){
        var ind = $(this).index();

        $(".sub_menu>ul>li>a").removeClass();
        $('#sub_first').addClass('sub_current');
        $('.sub_tab1 div.tab').hide();
        $('.sub_tab1 div.sub_con1').show();
    });
    // 맵 로드 후에 하이드시키는것.
    $(document).ready(function(){
        $(window).load( function() {
            $(".sub_con2, .sub_con3").hide();
        })
    });
    
});