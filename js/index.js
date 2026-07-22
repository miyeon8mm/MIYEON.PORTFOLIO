$(function () {

  setTimeout(function () {
    $("body").addClass("active");

    setTimeout(function () {
      $("body").css("overflow", "auto");
      $("#intro_logo").remove();
    }, 1000);

  }, 1000);

 $(window).on("load", function () {
  const $body = $("body");
  const $intro = $("#intro_logo");
  const $section1 = $("#section1");

// section1
  setTimeout(function () {
  $body.addClass("active");

  setTimeout(function () {
    $section1.addClass("main-active");
  }, 1000);

  setTimeout(function () {
    $section1.addClass("main-out background-active");
  }, 1500);

  setTimeout(function () {
    $section1.addClass("text-active");
  }, 1800);

}, 1000);
});

  $("#header_list div").eq(0).click(function(){
  $("html").animate({
    scrollTop: $("#section1").offset().top
  }, 1000);
});

$("#header_list div").eq(1).click(function(){
  $("html").animate({
    scrollTop: $("#section2").offset().top
  }, 1000);
});

$("#header_list div").eq(2).click(function(){
  $("html").animate({
    scrollTop: $("#work").offset().top
  }, 1000);
});

$("#header_list div").eq(3).click(function(){
  $("html").animate({
    scrollTop: $("#section4").offset().top
  }, 1000);
});

$("#header_list div").eq(4).click(function(){
  $("html").animate({
    scrollTop: $("#section5").offset().top
  }, 1000);
});


  // $(window).on("scroll", function(){
  //   if($(window).width() > 768){
  //     const scrollTop = $(this).scrollTop();
  //     if(scrollTop > 400) $("#section2").addClass("up");
  //     if(scrollTop > 1200) $("#work").addClass("up");
  //     if(scrollTop > 3120) $("#section5").addClass("up");
  //     if(scrollTop > 3320) $("#section6").addClass("up");
  //     // if(scrollTop > 3320) $("#section6").addClass("up");
  //   }
    
  // });

  $(".list:nth-child(1) > span, .work_h:nth-child(1) img").click(function(){
    var sec3_top = $(window).scrollTop();
    
    $(".pop-up-02").fadeOut();
    $(".pop-up-01").fadeIn(100);
    $(".pop-up-cont").css("top", sec3_top + "px");
    $("body").addClass("stop-scroll");
  });
  $(".button").click(function(){
    $(".pop-up-01").fadeOut();
    $("body").css("overflow", "auto");
    $("body").removeClass("stop-scroll");
  })

  $(".list:nth-child(2) > span,.work_h:nth-child(2) img").click(function(){
    var sec3_top = $(window).scrollTop();

    $(".pop-up-01").fadeOut();
    $(".pop-up-02").fadeIn(100);
    $(".pop-up-02-cont").css("top", sec3_top + "px");
    $("body").addClass("stop-scroll");
  });
  $(".button").click(function(){
    $(".pop-up-02").fadeOut();
    $("body").removeClass("stop-scroll");
  })

  // section5
  $("#sec5_list > div").eq(0).click(function(){
    $("#sport").show();
    $("body").css("overflow","hidden");
  });

  $("#sec5_list > div").eq(1).click(function(){
    $("#foam").show();
    $("body").css("overflow","hidden");
  });

  $("#sec5_list > div").eq(2).click(function(){
    $("#cloth").show();
    $("body").css("overflow","hidden");
  });

  $(".banner").click(function(){
    $(this).fadeOut();
    $("body").css("overflow","auto");
  });

  // section6
  $("#sec6_list > div").eq(0).click(function(){
    $("#poster1").show();
    $("body").css("overflow","hidden");
  });

  $("#sec6_list > div").eq(1).click(function(){
    $("#poster2").show();
    $("body").css("overflow","hidden");
  });

  $("#sec6_list > div").eq(2).click(function(){
    $("#poster3").show();
    $("body").css("overflow","hidden");
  });

  $(".poster").click(function(){
    $(this).fadeOut();
    $("body").css("overflow","auto");
  });

  let mySwiper;
  setTimeout(function () {

    mySwiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 50,
      initialSlide: 1,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    setTimeout(() => {
      mySwiper.update();
    }, 300);

  }, 500);

  $(window).on("scroll", function(){
  console.log($(window).scrollTop());
 });

 $(function(){
  // 무조건 숨기고 시작 (데스크탑 기준)
  $(".swiper").hide(); 
});

let introPlayed = false;
$(window).on("scroll", function(){
  
  if(introPlayed) return;

  const scrollTop = $(window).scrollTop();
  const sectionTop = $("#section4").offset().top;
  const trigger = sectionTop - $(window).height() / 2;

  if(scrollTop > trigger){
    introPlayed = true;
    $("#work_intro").addClass("active");

    if(mySwiper){
      mySwiper.allowTouchMove = false;
    }

    setTimeout(function(){
      $("#work_intro").addClass("hide");
      $(".swiper").fadeIn(500);

      if(mySwiper){
        mySwiper.allowTouchMove = true;
      }
    }, 1000);
  }
});

$('.list').click(function(e){
  e.preventDefault();

  let index = $(this).index();

  $('.list').removeClass('active');
  $(this).addClass('active');


  $('.work_h').stop(true, true).hide();
  $('.work_h').eq(index).stop(true, true).fadeIn(300);
});

});