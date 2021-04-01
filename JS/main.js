$(document).ready(function(){


  // direction of the body (rtl) or (ltr)
  var bodyDirection = $('body').css('direction');

  // this for insilize the init of wow.js plugn
  new WOW().init();  

  // ############## Start index page Animations ##############

  if(bodyDirection == 'rtl'){
    $('main .mainTools .toolSection').addClass('fadeInUp');
    $('.mainBranches .totalMainBranches .branchSection').addClass('fadeInUp');
    $('.gasOffers .gasOffersArticle').addClass('fadeInUp');
    $('.gasOffers .totalGasOffers .gasOffersImg').addClass('fadeInDown');
    $('.ourMaps .ourMaps_Section .ourMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInRight');
    $('.ourPartners .ourPartnersLinks a').addClass('fadeInUp');
    
  } else {  
    $('main .mainTools .toolSection').addClass('fadeInUp');
    $('.mainBranches .totalMainBranches .branchSection').addClass('fadeInUp');
    $('.gasOffers .gasOffersArticle').addClass('fadeInDown');
    $('.gasOffers .totalGasOffers .gasOffersImg').addClass('fadeInUp');
    $('.ourMaps .ourMaps_Section .ourMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInLeft');
    $('.ourPartners .ourPartnersLinks a').addClass('fadeInUp');

  }
  // ############## End index page Animations ##############

    var navBar = $('.navbar'),
        goUp = $('.go_up');

    $(window).scroll(function(){
      // navbar change
      if($(this).scrollTop() > 80){
        navBar.css('padding','0px 15px');
        $('.navbar .navbar-brand img').css({
          "width": "125px",
          "height": "45px"
        });
      } else {
        navBar.css('padding','15px 15px');

        $('.navbar .navbar-brand img').css({
          "width": "135px",
          "height": "55px"
        });
      }

      // this for icon to go up when scroll
      if($(this).scrollTop() > 100){
        if(goUp.is(":hidden")){
          goUp.fadeIn();
        }
      } else {
        goUp.fadeOut();
      }
      
    });

    // this for the animation of the icon go up
    goUp.click(function(event){
      event.preventDefault();

      $('html , body').animate({
          scrollTop: 0
      },1000);
    });


    // $('.sliderAboutCompany .aboutCompanySlider .slick-dots:after').on('click',function(){
    //   console.log('.slick-next');
    // } );

    // $('.sliderAboutCompany .aboutCompanySlider .slick-dots:before').on('click',function(){
    //   console.log('.slick-prev');
    // } );

    $('ul.slick-dots').on('click',function(){
      alert('Ahmed');
    });
     
    $('.slick-dots').on('click',function(){
      alert('Ahmed');
    });

    // var sliderSectionCount = $('.sliderAboutCompany .aboutCompanySlider .sliderSection').siblings().length;

    // $('.sliderAboutCompany .paginator-center').css('width', 30 * sliderSectionCount);

    console.log($('.sliderAboutCompany .paginator-center').width());

    
    if( bodyDirection == 'rtl'){
      // main slider properites Arabic
      $('.aboutCompanySlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        rtl: true,
        prevArrow: $('.aboutCompanySliderPrevSlider'),
        nextArrow: $('.aboutCompanySliderNextSlider'),
      });
    } else {
      // main slider properites English
      $('.aboutCompanySlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        rtl: false,
        prevArrow: $('.aboutCompanySliderPrevSlider'),
        nextArrow: $('.aboutCompanySliderNextSlider')
      });
    }
    
    // ourServicesSlider slider
    if( bodyDirection == 'rtl'){
    $('.ourServices .ourServicesSlider').slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true,
      prevArrow: $('.ourServicesSliderPrevSlider'),
      nextArrow: $('.ourServicesSliderNextSlider'),
        responsive: [
          {
            breakpoint: 1190,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }
        ]
      });
    } else {
      $('.ourServices .ourServicesSlider').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: false,
        prevArrow: $('.ourServicesSliderPrevSlider'),
        nextArrow: $('.ourServicesSliderNextSlider'),
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]

      });
    }



    // transferOffers slider
    if( bodyDirection == 'rtl'){
      $('.transferOffers .transferOffersSlider').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        prevArrow: $('.transferOffersSliderPrevSlider'),
        nextArrow: $('.transferOffersSliderNextSlider'),
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.transferOffers .transferOffersSlider').slick({
          dots: false,
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 2000,
          rtl: false,
          prevArrow: $('.transferOffersSliderPrevSlider'),
          nextArrow: $('.transferOffersSliderNextSlider'),
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
      }


    // $('.ourServices .ourServicesSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //   $(slick.$slides[currentSlide]).removeClass('active-slide');
    //   $(slick.$slides[nextSlide]).addClass('active-slide');
    // });


      // this is the section 1 of ourMaps_Section
    var ourMaps_Section_1 = document.querySelector('#ourMaps_Section_1'), 
      // this is the section 2 of ourMaps_Section
      ourMaps_Section_2 = document.querySelector('#ourMaps_Section_2'),
       
      // this is the OurMaps_1_tab_btn
      OurMaps_1_tab_btn = document.querySelector('#OurMaps_1_tab_btn'),  
      // this is the OurMaps_2_tab_btn
      OurMaps_2_tab_btn = document.querySelector('#OurMaps_2_tab_btn');


    // this when we click on the OurMaps_1_tab_btn
    $(OurMaps_1_tab_btn).on('click' , function() {    
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(ourMaps_Section_1).css('display' , 'flex');
      $(ourMaps_Section_2).css('display' , 'none');
    });

    // this when we click on the OurMaps_2_tab_btn
    $(OurMaps_2_tab_btn).on('click' , function() {    
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(ourMaps_Section_1).css('display' , 'none');
      $(ourMaps_Section_2).css('display' , 'flex');
    });



    // latestNews slider
    if( bodyDirection == 'rtl'){
      $('.latestNews .latestNewsSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        prevArrow: $('.latestNewsSliderPrevSlider'),
        nextArrow: $('.latestNewsSliderNextSlider'),
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      } else {
        $('.latestNews .latestNewsSlider').slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 2000,
          rtl: false,
          prevArrow: $('.latestNewsSliderPrevSlider'),
          nextArrow: $('.latestNewsSliderNextSlider'),
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    
});