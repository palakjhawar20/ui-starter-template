$(function() {
    $("button").click(function() {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var country = $("#country").val();
        var gender = $("#gender").val();

        var result = {
            "fname": fname,
            "lname": lname,
            "phone": phone,
            "email": email,
            "address": address,
            "city": city,
            "state": state,
            "country": country,
            "gender": gender
        }

        console.log(result);

        if (fname == "" || lname == "" || phone == "" ||
            email == "" || address == "" || city == "" || state == "") {
            alert("All fields are required");
            return;
        }
        alert(" your form has been submitted");

        // if (!validateEmail(email)) {
        //     alert("Email is invalid");
        //     return;
        // }
        //         alert("Your form has been submitted ");
        //     });
        // });

        // function validateEmail(email) {
        //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(String(email).toLowerCase());
        // };

    });

});