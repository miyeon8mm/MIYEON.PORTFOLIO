$(function () {

  setTimeout(function () {
    $("body").addClass("active");

    setTimeout(function () {
      $("body").css("overflow", "auto");
      $("#intro_logo").remove();
    }, 2000);

  }, 1000);


  const quotes = [
    "보는 재미와 쓰는 편안함, 그 사이의 균형을 늘 고민하고 있습니다.",
    "감각은 놓치지 않되, 방향은 언제나 사용자쪽을 향할 것입니다.",
    "낯선 환경에도 빠르게 적응하고, 팀 안에 자연스럽게 녹아드는 스타일입니다.",
    "변화에 유연하게 대응하며, 실무에서도 조화롭게 협업할 수 있는 웹디자이너 겸 퍼블리셔가 되겠습니다."
  ];

  let index = 0;
  const $text = $(".text-container");

  function showQuote() {
    $text.fadeOut(500, function () {
      $text.text(quotes[index]).fadeIn(1000);
      index = (index + 1) % quotes.length;
    });
  }

  $text.text(quotes[0]).fadeIn(1000);
  index = 1;
  setInterval(showQuote, 4000);


  $("#header_list div").eq(0).click(function(){
    $("html").animate({ scrollTop: 80 }, 1000);
  });

  $("#header_list div").eq(1).click(function(){
    $("html").animate({ scrollTop: 1045 }, 1000);
  });

  $("#header_list div").eq(2).click(function(){
    $("html").animate({ scrollTop: 1880 }, 1000);
  });

  $("#header_list div").eq(3).click(function(){
    $("html").animate({ scrollTop: 2850 }, 1000);
  });


  $(window).on("scroll", function(){
    const scrollTop = $(this).scrollTop();

    if(scrollTop > 400) $("#section2").addClass("up");
    if(scrollTop > 1200) $("#work").addClass("up");
    if(scrollTop > 3120) $("#section5").addClass("up");
    if(scrollTop > 3320) $("#section6").addClass("up");
  });

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

  $(".pop-up").click(function(){
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

  $(".pop-up2").click(function(){
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

  $$(window).on("scroll", function(){
  // 2. 모바일 버전이면 아래 스크롤 이벤트를 아예 실행 안 함 (인트로 방지)
  if($(window).width() <= 768) return; 

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