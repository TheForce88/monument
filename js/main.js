$(document).ready(function() {
  $('.contact').on('submit', function (evt) {
    evt.preventDefault();

    // Code for validating the Forms
    $('form input, form textarea').each(function() {
      var $currentField = $(this);
      var fieldType = $(this).attr('type');

      if ($currentField.val() === '' ){
        $currentField.addClass('error');
        $currentField.siblings('.error-message').fadeIn();
        return;
      }

      if (fieldType === 'email') {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmailAddress = re.test($currentField.val());
        if (!isValidEmailAddress) {
          $currentField.addClass('error');
          $currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
          return;
        }
      }
      $currentField.removeClass('error');
      $currentField.siblings('.error-message').hide();
    });
  });

  $('nav a').on('click', function(e) {
    // console.log('you clicked on a nav bar item');
    e.preventDefault();
    var thisTarget = $(this).attr('href');
    var targetOffset = $(thisTarget).offset().top;
    $('html, body').animate({
      scrollTop: targetOffset
    }, 600);
  });

});
