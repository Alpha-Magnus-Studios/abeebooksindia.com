/*
 * (c) Alpha Magnus Studios
 */
$(function() {
    
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $('#success').html("<div style='text-align:center'><strong>Sending message...<br><br></strong></div>");
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            if (name == '' || email == '' || message == '')
            {
                $('#success').html("<div style='text-align:center;color:red'><strong>Please fill in all the fields!<br><br></strong></div>");
                return;
            }
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbw1cjATgfgYCQQUOmhEnz1TLavbJdoda4T2d_n0x3g3yPl9jds/exec",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div style='text-align:center;color:green'><strong>Your message has been sent.<br><br></strong></div>");
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div style='text-align:center;color:red'><strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!<br><br></strong></div>");
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
