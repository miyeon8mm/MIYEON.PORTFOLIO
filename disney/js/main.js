$(function(){
  
    new fullpage('#fullpage', {
        navigation: true,
        responsiveWidth: 700,
        anchors: ['home', 'about-us', 'contact'],
        parallax: true,
        onLeave: function(origin, destination, direction){
            console.log("Leaving section" + origin.index);
        },
    });

    setTimeout(function(){
        $("#main_video").fadeOut(500)
      },5000);
     
     
    
      $(".menu").click(function(){
        $(".menu").css("opacity","0");
         $("nav").css("transform","translateX(-376PX)");
         $("#fp-nav").css("display","none")
      }); $(".close").click(function(){
        $(".menu").css("opacity","1");
        $("nav").css("transform","translateX(376px)");
        $("#fp-nav").css("display","block")
      });

      const slider = document.querySelector('.slider');
            
      function activate(e) {
          const items = document.querySelectorAll('.item');
          e.target.matches('.next') && slider.append(items[0])
          e.target.matches('.prev') && slider.prepend(items[items.length-1]);
      }

      document.addEventListener('click',activate,false);

      $("#marvel_video li").eq(0).mouseover(function(){
        $(".logo").eq(0).css("display","none");
        
      }); $("#marvel_video li").eq(0).mouseout(function(){
        $(".logo").eq(0).css("display","block");
      });
      $("#marvel_video li").eq(1).mouseover(function(){
        $(".logo").eq(1).css("display","none");
       
      }); $("#marvel_video li").eq(1).mouseout(function(){
        $(".logo").eq(1).css("display","block");
      });
      $("#marvel_video li").eq(2).mouseover(function(){
        $(".logo").eq(2).css("display","none");
      
      }); $("#marvel_video li").eq(2).mouseout(function(){
        $(".logo").eq(2).css("display","block");
      });
      $("#marvel_video li").eq(3).mouseover(function(){
        $(".logo").eq(3).css("display","none");
       
      }); $("#marvel_video li").eq(3).mouseout(function(){
        $(".logo").eq(3).css("display","block");
      });

      
      $(".fantasy").click(function(){
        $("#tomorrow-wrap").css("display","none");
        $("#western-wrap").css("display","none");
        $("#fantasy-wrap").css("display","block");
      });
      $(".tomorrow").click(function(){
        $("#tomorrow-wrap").css("display","block");
        $("#fantasy-wrap").css("display","none");
        $("#western-wrap").css("display","none");
      });
      $(".western").click(function(){
        $("#tomorrow-wrap").css("display","none");
        $("#fantasy-wrap").css("display","none");
        $("#western-wrap").css("display","block");
      });
     

      $(".tower").click(function(){
        $("#spring-wrap").css("display","none");
        $("#mermaid-wrap").css("display","none");
        $("#tower-wrap").css("display","block");
      });
      $(".peterpan").click(function(){
        $("#tower-wrap").css("display","none");
        $("#mermaid-wrap").css("display","none");
        $("#spring-wrap").css("display","block");
      });
      $(".mermaid").click(function(){
        $("#tower-wrap").css("display","none");
        $("#spring-wrap").css("display","none");
        $("#mermaid-wrap").css("display","block");
      });


});