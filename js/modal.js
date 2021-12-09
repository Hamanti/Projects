$(document).ready(function () {
  /* MASKED */
  $('#phoneinput').mask('+7 (999) 999-99-99');
  $('#phoneinput2').mask('+7 (999) 999-99-99');

  /* VALIDATE COST*/
  $('#repair-form').validate({
    rules: {
      username: "required",
      userphone: "required",
    },
    messages: {
      username: "Пожалуйста, укажите имя!",
      userphone: "Пожалуйста, укажите телефон!",
    }
    
  });
  /* AJAX CALL*/
  $('#offer-form').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: '../php/recall.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function (data) {

        $('#modal').addClass('modal_active');
        $('#modaltext').html(data);
        event.target.reset();
      }
    });
  });

  /* AJAX COST*/

    $('#repair-form').on('submit', function (event) {
      event.preventDefault();
      $.ajax({
        url: '../php/sumcost.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function (data) {
  
          $('#modal').addClass('modal_active');
          $('#modaltext').html(data);
          event.target.reset();
        }
      });
    });
  



  /* Модальное окно */
  $('#button__call').click(function () {
    $('#modal').addClass('modal_active')
    $('#modaltext').html('Модальное окно');
  });

  $('#button__close').click(function () {
    $('#modal').removeClass('modal_active')
  });

  $('#uparrow').click(function () {
    jQuery("html,body").animate({ scrollTop: 0 }, "slow");
  });


});