$(document).ready(function(){
    $(".faq_list dl").click(function(){
        $(".faq_list dl").removeClass("on");
        $(this).attr("class","on");
    });
});