// var inputSelector = $('input');
//
// inputSelector.on('keyup', function(){
//   inputSelector.addClass('error');
// });

$('.submit').on('click', function(){
  var inputSelector = $('input');

  inputSelector.on('keyup', function(){
    inputSelector.addClass('error');
  });
});
