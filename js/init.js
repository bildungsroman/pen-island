(function($){
  $(function(){
    $('.pushpin').pushpin();
    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.pushpin-demo-nav').each(function() {
  let $this = $(this);
  let $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});

/* jQuery Method Calls
  You can still use the old jQuery plugin method calls.
  But you won't be able to access instance properties.
*/

$('.target').pushpin('methodName');
$('.target').pushpin('methodName', paramName);

