$(function(){
    $(".add").eq(0).click(function(){
        $(".add").eq(0).css("display","none");
        $(".inside").eq(0).css("display","block");
        $(".add").eq(1).css("display","block");
        $(".add").eq(2).css("display","block");

        $(".inside").eq(1).css("display","none")
        $(".inside").eq(2).css("display","none")
        }); $(".add").eq(1).click(function(){
        $(".add").eq(1).css("display","none");
        $(".inside").eq(1).css("display","block");
        $(".add").eq(0).css("display","block");
        $(".add").eq(2).css("display","block");
            
        $(".inside").eq(0).css("display","none");
        $(".inside").eq(2).css("display","none");
        }); $(".add").eq(2).click(function(){
            $(".add").eq(2).css("display","none");
            $(".inside").eq(2).css("display","block");
            $(".add").eq(0).css("display","block");
            $(".add").eq(1).css("display","block");

            $(".inside").eq(0).css("display","none");
            $(".inside").eq(1).css("display","none");
        }); $(".close").click(function(){
                window.history.back();
    });

    let ctw = $(".main-list-inner").width(); 
    let ctww = ctw-$(".main-img").width();
   /*  let sc = $(".section2").css("top",ctww+"px"); */

    $(window).scroll(function(){
        sc = $(window).scrollTop();
        if(ctww > sc){
            $(".main-list-inner").css("left",-sc+"px");

        }else{
            $(".main-list-inner").css("left",-ctww+"px");
            $(".main-list-inner").css("top",-(sc-ctww)+"px");
        }
    });  

    $("#section2-inner ul li:nth-child(2) a img").mouseover(function(){
        $(this).attr("src","/img/Group 6-1.png");
    });
    $("#section2-inner ul li:nth-child(3)  a  img").mouseover(function(){
        $(this).attr("src","/img/Group 5-1.png");
    });

    $("#section2-inner ul li:nth-child(2) a img").mouseout(function() {
        $(this).attr("src", "/img/Group 6.png");
    });
    $("#section2-inner ul li:nth-child(3) a img").mouseout(function() {
        $(this).attr("src", "/img/Group 5.png");
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 4200){
            $("#inner-1").addClass("up");
        }
        if($(this).scrollTop() > 4721){
            $("#inner-2").addClass("up");
        }
        if($(this).scrollTop() >5242){
            $("#inner-3").addClass("up");
        }
        if($(this).scrollTop() > 5763){
            $("#inner-4").addClass("up");
        }


    });


$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width();

    if (windowWidth <= 767) {
        // 모바일일 때
        
        if (scrollTop > 2350) {
            $("#cont1").fadeIn(500);
             $(".sec3-more").css("transform","translateY(0)");
           
        }
        if (scrollTop > 3000) {
            $("#cont2").fadeIn(500);
           
        } else {
            $("#cont2").fadeOut(500);
        }

        if (scrollTop > 3500) {
            $("#cont3").fadeIn(500);
        } else {
            $("#cont3").fadeOut(500);
        }
        
        
    } else {
        // PC일 때 (원래 기준 유지)
        if (scrollTop > 7650) {
            $("#cont2").fadeIn(500);
        } else {
            $("#cont2").fadeOut(500);
        }

        if (scrollTop > 8150) {
            $("#cont3").fadeIn(500);
        } else {
            $("#cont3").fadeOut(500);
        }
    }
});

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width();

    if (windowWidth <= 767) {
        if (scrollTop > 4350) {
            $("#up-cd1").addClass("up2");
        }
        if (scrollTop > 4665) {
            $("#up-cd2").addClass("up2");
        }
        if (scrollTop > 4980) {
            $("#up-cd3").addClass("up2");
        }
        if (scrollTop > 5295) {
            $("#up-cd4").addClass("up2");
        }

        
    }
});



});