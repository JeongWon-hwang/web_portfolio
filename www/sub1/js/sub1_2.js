$(document).ready(function(){
    $('.tap_menu .tab_con1').show();

    $(".tap_menu li").click(function(){
        var ind = $(this).index();

        $(".tap_menu li>a").removeClass();
        $('a',this).addClass('current'); 
        $('.tap_menu .tab').hide(); 
        $('.tab_con'+(ind+1)).show(); 

    });
});