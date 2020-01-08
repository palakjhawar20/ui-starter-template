$(function() {
    $("button").click(function(event) {
        event.preventDefault();
        var sid = $("#sid").val();
        var email = $("#email").val();
        var course = $("#course").val();
        var iname = $("#iname").val();



        var result = {
            "sid": sid,
            "email": email,
            "course": course,
            "iname": iname

        }

        console.log(result);

        if (sid == "" || email == "" || course == "" || iname == "") {
            alert("All fields are required");
            return;
        }
        alert(" your form has been submitted");
    });
});