function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(element) {
    // 'g' corresponds to 71
    if (element.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(element) {
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

// call functions here

});
