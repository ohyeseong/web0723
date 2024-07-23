$(document).ready(function(){
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().fadeIn("fast");
    }, function(){
        $(".sub").stop().fadeOut("fast");
    })

    // var n = 0;
    // setInterval(function(){
    //     if(n == 2){
    //         n = 0;
    //     }else{
    //         n ++;
    //     }

    //     $(".left_move").animate({"left":n * (-800) + "px"}, 500)
    // }, 3000)

    setInterval(function(){
        $(".left_move").animate({"left":"-800px"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({"left":"0"});
        })
    }, 3000)

    $(".p_click").click(function(){
        $(".pop").slideDown();
    })

    $(".close").click(function(){
        $(".pop").slideUp();
    })
})// fin