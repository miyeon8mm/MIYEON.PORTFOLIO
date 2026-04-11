gsap.registerPlugin(ScrollTrigger);
        const stage  = document.getElementById("stage");
        const cont_02 = document.getElementById("cont_02");
        const cont_03 = document.getElementById("cont_03");
        const cont_04 = document.getElementById("cont_04");

        const peek = 100;
        const small = 0.94;
        const peekY = () => window.innerHeight - peek;
 

        function initPanels(){
          gsap.set(cont_02,{ y: peekY(), scale: small, transformOrigin:"50% 100%" });
          gsap.set(cont_03,{ y: "100%",  scale: small, transformOrigin:"50% 100%" });
          gsap.set(cont_04,{ y: "100%",  scale: small, transformOrigin:"50% 100%" });
        }

        // cont03
        let strokePlayed = false;

        function resetStroke(){
          document.querySelectorAll("#cont_03 .card-wrap")
            .forEach(card => card.classList.remove("is-draw"));
        }

        function playStroke(){
          const cards = document.querySelectorAll("#cont_03 .card-wrap");
          resetStroke(); 
          cards.forEach((card, i) => setTimeout(() => card.classList.add("is-draw"), 120 * i));
        }

        // 스크롤
        let tl; 

        function startScrollTrigger(){
          if (tl) return;

          initPanels();

          tl = gsap.timeline({
            scrollTrigger:{
              trigger:"#wrap",
              start:"top top",
              end:"bottom bottom",
              pin: stage,
              scrub: 1,
              // pin: window.innerWidth > 768 ? stage : false,
              // scrub: window.innerWidth > 768 ? 1 : false,
              anticipatePin: 1,
              invalidateOnRefresh:true,

              onRefresh: () => {
                initPanels();
                strokePlayed = false;
                resetStroke();
              },
              onUpdate: (self) => {
                if (!strokePlayed && self.progress > 0.58) { 
                  strokePlayed = true;
                  playStroke();
                }
              },

            }
          });

          tl.to(cont_02,{
              y: 0,
              scale: 1,
              duration: 1,
              ease: "none",
              onComplete: () => requestAnimationFrame(() => {
               if (typeof updateSwipers === "function") updateSwipers();
              })
            }) 
            .to(cont_03,{ y:peekY(), scale:small, duration:0.25, ease:"power1.out" })
            .to(cont_03,{ y:0,      scale:1,     duration:1,    ease:"none" })
            .to(cont_04,{ y:peekY(), scale:small, duration:0.25, ease:"power1.out" })
            .to(cont_04,{ y:0,      scale:1,     duration:1,    ease:"none" });
        }

        //새로고침
        window.addEventListener("load", () => {
          window.scrollTo(0, 0);

          strokePlayed = false;
          resetStroke();

          initPanels();

          const intro = document.querySelector("#cont_01 img.intro");
          if (!intro) {
            startScrollTrigger();
            return;
          }

          gsap.set(intro, {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 50%",
            position: "relative",
            zIndex: 9999
          });

          gsap.timeline({
            onComplete: () => {
              intro.remove();
              startScrollTrigger();
            }
          })
          .to(intro, { scale: 1.35, duration: 1.4, ease:"power2.out" })
          .to(intro, { opacity: 0, duration: 0.9, ease:"power1.out" }, 0.9);
        });


        $(".title li").click(function(){
          const idx = $(this).index();
          const target = panels[idx];

          // 탭 active
          $(".title li").removeClass("is-active");
          $(this).addClass("is-active");

          // 패널 전환
          $(".best-panel:visible").stop(true,true).fadeOut(200, function(){
            $(".best-panel").removeClass("is-active");

            $("#"+target).stop(true,true).fadeIn(250).addClass("is-active");

            // ✅ 보여준 뒤 update
            requestAnimationFrame(() => sw[target]?.update());
          });
        });

        $("#cont_03 #free_title ul li").on("click", function () {
          const idx = $(this).index();

          // 탭 active
          $("#cont_03 #free_title ul li").removeClass("is-active");
          $(this).addClass("is-active");

          
          $("#cont_03 .card_list").removeClass("is-active").hide();
          $("#cont_03 .card_list").eq(idx).show().addClass("is-active");
        });
        let concertSwiper = null;
       
  const sw = {}; // 스와이퍼 저장소

  function makeSwiper(panelId, swiperClass){
    const panel = document.getElementById(panelId);
    if(!panel) return;

    const el = panel.querySelector(swiperClass);
    if(!el) return;

    sw[panelId] = new Swiper(el, {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
      loop: true,

      navigation: {
        nextEl: panel.querySelector(".swiper-button-next"),
        prevEl: panel.querySelector(".swiper-button-prev"),
      },

      // ✅ 동그라미 pagination
      pagination: {
        el: panel.querySelector(".swiper-pagination"),
        clickable: true,
        dynamicBullets: true,
      },

      observer: true,
      observeParents: true,
    });
  }

  // 안전 update
  function safeUpdate(panelId){
    const inst = sw[panelId];
    if(inst && typeof inst.update === "function") inst.update();
  }

  window.addEventListener("load", () => {
    makeSwiper("concert",  ".swiper-concert");
    makeSwiper("display",  ".swiper-display");
    makeSwiper("festival", ".swiper-festival");
    makeSwiper("edu",      ".swiper-edu");

    // 로드 직후 1번 업데이트
    setTimeout(() => Object.keys(sw).forEach(safeUpdate), 0);
  });

  const panels = ["concert","display","festival","edu"];

  $(".title li").click(function(){
    const idx = $(this).index();
    const target = panels[idx];

    // 탭 active
    $(".title li").removeClass("is-active");
    $(this).addClass("is-active");

    // 패널 전환
    $(".best-panel:visible").stop(true,true).fadeOut(200, function(){
      $(".best-panel").removeClass("is-active");

      $("#"+target).stop(true,true).fadeIn(250).addClass("is-active");

      // ✅ 보여준 뒤 Swiper update (pagination 위치/슬라이드 계산 안정화)
      requestAnimationFrame(() => safeUpdate(target));
    });
  })
  $(function () {
    
    $(".cont_list_wrap").removeClass("is-active").hide();
    $(".cont_list_wrap").eq(0).show().addClass("is-active");


    $("#free_title .ct-list_02 > li").on("click", function () {
      const idx = $(this).index();


      $("#free_title .ct-list_02 > li").removeClass("is-active");
      $(this).addClass("is-active");

      
      $(".cont_list_wrap").removeClass("is-active").hide();
      $(".cont_list_wrap").eq(idx).fadeIn(150).addClass("is-active");
    });
  });

  // free-page

  if (window.innerWidth <= 768) {

  const cards = document.querySelectorAll(".card-wrap");

  function checkCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("is-show");
      }
    });
  }

  window.addEventListener("scroll", checkCards);
  window.addEventListener("load", checkCards);

}

