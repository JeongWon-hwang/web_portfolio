$(document).ready(function(){

        $(window).resize(function(){
        
        var width = window.innerWidth;
        
        if(width < 768){
        
        $('#img_change').attr('src', 'images/main_visual_img03.jpg')
        
        }
        
        else {$('#img_change').attr('src', 'images/main_visual_img.jpg');}
        
        }).resize();
        
});