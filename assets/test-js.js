$(document).ready(function(){
    $('ul.shopify-tabs > li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $(this).parent().find('li').removeClass('current');
      $('.shopify-tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    });
  })