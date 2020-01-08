$(function() {
    $("button").click(function(event) {
        event.preventDefault();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var guest = $("#guest").val();
        var free = $(".free:checked").val();
        var room = $("#room").val();



        var result = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "guest": guest,
            "free": free,
            "room": room

        }

        console.log(result);

        if (fname == "" || lname == "" || email == "" || guest == "" || free == "" || room == "") {
            alert("All fields are required");
            return;
        }
        alert(" your form has been submitted");
    });
});