$(document).ready(function() {
    $('.slideshow img:gt(0)').hide();       // hide all initially, setInterval will rotate images

    setInterval(function(){
      $('.slideshow :first-child')  //.fadeOut()   //.delay(1000)  .hide()    //
        .next('img').fadeIn("slow")   //.delay(1000)
        .end().appendTo('.slideshow');
      }, 3500);
    
    $('#btnSubmit').click(function() {
        var name = $('#txtFirstName').val() + " " + $('#txtLastName').val();
        var email = $('#txtEmail').val() 
        // formspree 
        $.post({
            url: "https://formspree.io/smccloskey1@stu.parkland.edu",
            data: { name : name, _replyTo : email },
            dataType: "json",
            success: function(response) {
                alert('Contact Email Sent!');
            },
            error: function() {
                alert('Error sending Contact Email?');
            }
        });        // method="POST"
    });

    $('#btnReset').click(function() {
        $('input[type="text"]').clear();
        $('#chkSub').checked = false;
    });
});

//          $('.slideshow img:first').fadeOut("slow").delay(3000);  //.hide();
//          $('.slideshow :first-child').fadeOut("slow")  // .end().appendTo('.slideshow');  //.appendTo('.slideshow');  //.hide();  //.delay(2000); 
//          $('.slideshow :first-child').end().appendTo('.slideshow');
//          $('.slideshow :first-child').fadeIn("slow");  //.delay(2000);
//          $('.slideshow :first-child').end().appendTo('.slideshow');
