$(document).ready(function () {
  function rep() {
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
  }
  function call() {
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
  }
  /* MASKED */
  $('#phoneinput').mask('+7 (999) 999-99-99');
  $('#phoneinput2').mask('+7 (999) 999-99-99');

  /* VALIDATE COST*/
  $('#offer-form').validate({
    rules: {
      username: "required",
      userphone: "required",
    },
    messages: {
      username: "",
      userphone: "",
    },
    submitHandler: function(form) {
      call();
    } 
      
  });

  /* VALIDATE RECALL*/
  $('#repair-form').validate({
    rules: {
      username: "required",
      userphone: "required",
    },
    messages: {
      username: "Пожалуйста, укажите имя!",
      userphone: "Пожалуйста, укажите телефон!",
    },
    submitHandler: function(form) {
      rep();
    } 
      
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