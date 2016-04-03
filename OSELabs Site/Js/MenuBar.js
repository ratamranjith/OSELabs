// JavaScript Document
(function($) {
$.fn.menumaker = function(options) {  
 var navMenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   navMenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     navMenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     navMenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else navMenu.addClass('dropdown');
   if (settings.sticky === true) navMenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 700;
     if ($( window ).width() > mediasize) {
       navMenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       navMenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#navMenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);

$(document).ready(function() {
    $('input#input_text, textarea#textarea1');
  });