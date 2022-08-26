
    $('#tab-1').click(function(){
        $(this).addClass('active');
        $('#tab-2').removeClass('active')
        $('#tab-3').removeClass('active')
      });
      $('#tab-2').click(function(){
        $(this).addClass('active');
        $('#tab-1').removeClass('active')
        $('#tab-3').removeClass('active')
      });
      $('#tab-3').click(function(){
        $(this).addClass('active');
        $('#tab-1').removeClass('active')
        $('#tab-2').removeClass('active')
      });
      
    $('#tab-1').click(function(){
      $('.tab1').slideDown(850);
      $('.tab2').fadeOut(850);
      $('.tab3').fadeOut(850);

    })

    $('#tab-2').click(function(){
      $('.tab1').fadeOut(850);
      $('.tab2').slideDown(850);
      $('.tab3').fadeOut(850);

    })

    $('#tab-3').click(function(){
      $('.tab1').fadeOut(850);
      $('.tab2').fadeOut(850);
      $('.tab3').slideDown(850);

    })


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:40,
      nav:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })

