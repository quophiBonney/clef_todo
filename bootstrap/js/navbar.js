$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
  });

  $('#hiringOffer').click(function(){
    $('#exampleModal').modal('show');
   
  })

  $(document).ready(function(){
    $("#closeModal").click(function(){
      location.reload();
    });
  });

  $('#sendOffer').click(function() {
    // Show the modal after 5 seconds
    setTimeout(function() {
      $('#messageSent').modal('show');
    }, 5000);
  });