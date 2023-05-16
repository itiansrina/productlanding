$(document).ready(function() {
  
    $('.navbar-collapse ul li a').click(function(){
     /* always close responsive nav after click */
    $('.navbar-toggle:visible').click();
      }); 
    
   $('a[href*="#"]:not([href="#"])').click((e) => {
      const target = $(e.target.hash);
  
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
  
        return false;
      }
    });
  });