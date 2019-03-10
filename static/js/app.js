$(document).ready(function(){
    var $actionBtn = $('.action__btn');
    var $iconBtn = $('.action__btn2');
   

    $iconBtn.hide();

    $actionBtn.mouseover(function(){
        $iconBtn.animate({
            bottom:'200px'
        });
        $iconBtn.show();
        
    });


    $iconBtn.click(function(){
        $iconBtn.animate({
            bottom:'80px'
        },1000,function(){
                $iconBtn.hide();
            });
    });
});

$(window).scroll(function(){
    var $footer = $('.footer');
    var position = $(window).scrollTop();
    //alert(position); 
    if(position >= 968){
        $footer.hide();
    }else{
        $footer.show();
    }
});