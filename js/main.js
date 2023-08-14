
$(".openNav").click(function(){
    let width = ("#Menu").owterWidth
    $("#Menu").animate({ width:'200px'},50)
   $("#content").animate({marginLeft :'220px'},50)
})

$(".closebtn").click(function(){
    $("#Menu").animate({ width:'0px'},50)
   $("#content").animate({marginLeft :'0px'},50)
})

  $(document).ready(function() {
    $(".slider-item").click(function() {
      var sliderContent = $(this).find(".slider-content");
      $(".slider-content").not(sliderContent).slideUp(500);
      sliderContent.slideToggle(500);
    });
  });
  
  window.onload = function() {
    countDownToTimeWithDifferentTime("30 October 2023 9:56:00");
  }
  
  function countDownToTimeWithDifferentTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = futureDate.getTime() / 1000;
  
    let now = new Date();
    now = now.getTime() / 1000;
  
    timeDifference = futureDate - now;
  
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60);
    let secs = Math.floor(timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60);
  
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $(".seconds").html(`${secs} s`);
  
    setInterval(function() {
      countDownToTimeWithDifferentTime(countTo);
    }, 1000);
  }


  $(document).ready(function() {
    var timeout;
  
    $('#Menu a').click(function(event) {
      event.preventDefault();
  
      var target = $(this).attr('href');
      var offsetTop = $(target).offset().top;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(function() {
        $('html, body').animate({
          scrollTop: offsetTop
        }, 500);
      }, 30);
    });
  });
  var max = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = max-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});



