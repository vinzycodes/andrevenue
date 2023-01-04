jQuery(document).ready(function ($) {

 /*==================================
  =            Animations            =
  ==================================*/

  var wow = new WOW(
      {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       100,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
      }
  );
  wow.init();

  /*=====  End of Animations  ======*/


  /*===========================================
  =            Form File on change            =
  ===========================================*/

  initFileInputs();

  function initFileInputs() {
  
    $('.file-field input').on('change', function() {
      var fileInput = this;
      var $fileNameSpan = $(fileInput).parents('.formBlock-field').find('.file-field-name');

      if (fileInput.files.length) {
        $fileNameSpan.removeClass('nofile');
        var fileName = fileInput.files[0].name;
        $fileNameSpan.text(fileName);
      } else {
        $fileNameSpan.addClass('nofile');
        $fileNameSpan.text('Keine Datei ausgewählt');
      }
    });
  }
  
  
  /*=====  End of Form File on change  ======*/

  /*======================================
  =            Anchors scroll            =
  ======================================*/

  initSmoothScrollToAnchor();
  
  function initSmoothScrollToAnchor() {

    $('a[href*="#"]:not([href="#"])').click(function() {
      var target = $(this.hash);
        $('html,body').stop().animate({
          scrollTop: target.offset().top - 120
        }, 'linear');   
    });    
    if (location.hash){
      var id = $(location.hash);
    }
    $(window).load(function() {
      if (location.hash){
        $('html,body').animate({scrollTop: id.offset().top -120}, 'linear')
      };
     });

  }
  
  /*=====  End of Anchors scroll  ======*/
  
  
});









