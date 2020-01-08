$(function() {
    $("button").click(function(event) {
        event.preventDefault();
        var fname = $("#fname").val();
        var mname = $("#mname").val();
        var lname = $("#lname").val();
        var street = $("#street").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var pin = $("#pin").val();
        var email = $("#email").val();
        var area = $("#area").val();
        var phone = $("#phone").val();
        var company = $("#company").val();
        var courses = $("#courses").val();



        var result = {
            "fname": fname,
            "mname": mname,
            "lname": lname,
            "street": street,
            "city": city,
            "state": state,
            "pin": pin,
            "email": email,
            "area": area,
            "phone": phone,
            "company": company,
            "courses": courses

        }

        console.log(result);

        if (fname == "" || mname == "" || lname == "" || street == "" || city == "" || state == "" || pin == "" || email == "" || area == "" || phone == "" || company == "" || courses == "") {
            alert("All fields are required");
            return;
        }
        alert(" your form has been submitted");
    });
});