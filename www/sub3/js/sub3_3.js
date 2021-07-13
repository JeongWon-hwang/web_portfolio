$(document).ready(function(){

    $('.tap_menu>div.sub_tab1').show();

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
    
});