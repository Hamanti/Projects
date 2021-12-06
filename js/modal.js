$(document).ready(function() {
  $('#phoneinput').mask('+7 (999) 999-99-99');
  /* AJAX */
  $('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        
        $('#modal').addClass('modal_active');
        $('#modaltext').html(data);
        event.target.reset(); 
      }
    }); 
  });

 

  /* Модальное окно */
  $('#button__call').click(function() {
    $('#modal').addClass('modal_active')
    $('#modaltext').html('Модальное окно');
  });

  $('#button__close').click(function() {
    $('#modal').removeClass('modal_active')
  });

  $('#uparrow').click(function() {
		jQuery("html,body").animate({scrollTop:0},"slow");
  });


});