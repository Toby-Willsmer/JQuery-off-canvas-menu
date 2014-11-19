(function() {
  var actionClass  = ['open', 'pushed'],
      closeLinks   = ['.off-canvas-link', '.menu-close'],
      LksJoin      = closeLinks.join(", "),
      elemClass    = $('.off-canvas-push, .main-nav'),
      mediaSwitch  = $(actionClass[2]).css('display') == 'none'; // checks media query for consistant cross browser

  $(window).width(function(){
    if(!mediaSwitch) { // adds the hamburger to the page on mobile and 'close' to the menu list
      $('header .off-canvas-push').prepend('<a class="off-canvas-link menu-icon" aria-hidden="true">&#x2261;</a>');
      $('.main-menu').prepend('<li class="off-canvas-link menu-close"></li>');
      $(closeLinks[0]).click(function(event) {
        if($(this).hasClass(actionClass[0])) {
          close(event.currentTarget);
        } else {
          open(event.currentTarget);
        }
      });
    };
  });

  // close if menu is open on resize
  $(window).on('resize', function() {
    if(!mediaSwitch) {
      close();
    }
  });

  function open() {
    $(LksJoin).addClass(actionClass[0]);
    $(elemClass).addClass(actionClass[1]);
  }

  function close() {
    $(LksJoin).removeClass(actionClass[0]);
    $(elemClass).removeClass(actionClass[1]);
  }

})();