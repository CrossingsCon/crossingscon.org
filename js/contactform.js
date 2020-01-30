$('#send-message').click(function(){
  var name = $('#name');
  var email = $('#email');
  var msg = $('#message');

  if(!name.val().trim()){
    showNotice('warning', 'Please enter your name');
    return;
  }

  if(!validateEmail(email.val())) {
    showNotice('warning', 'Please enter a valid email address');
    return;
  }

  if(!msg.val().trim()){
    showNotice('warning', 'Please enter a message');
    return;
  }
  subject = 'Contact request from ' + name.val();
  $.ajax({
    url: 'https://formspree.io/mjvyodle',
    method: 'POST',
    data: {name: name.val(), message: msg.val(), _replyto: email.val(), email: email.val(), _subject: subject},
    dataType: 'json',
    success: function(data) {
      showNotice('success', 'Thanks for the message! We\'ll get back to you as soon as we can');
      msg.val("");
    },
    error: function(err) {
      showNotice('danger', 'Something went wrong! Try again or just send us an email at info@crossingscon.org');
    }
  });
});

function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function showNotice(status, message) {
  elem = $('<div class="fade container my-sm-3 alert alert-' + status + '" role="alert">' + message + '</div>');
  $('#alert-container').append(elem);
  elem.fadeTo(400, 1000).delay(3000).fadeTo(1000, 0).slideUp(300, function(){
    $(this).remove();
  });
}
