$(function() {
    var user = [{
        user: "palak",
        pass: "123"
    }, {
        user: "pooja",
        pass: "pp"
    }, {
        user: "mayank",
        pass: "ma123"
    }, {
        user: "nishu",
        pass: "panda"
    }];

    $("button").click(function() {
        var isUserFound = false;
        user.forEach(element => {
            if ($("#user").val() == element.user && $("#pass").val() == element.pass) {
                isUserFound = true;
                return;
            }
        });
        // $("#msg").text(isUserFound ? "Success" : "Error");
    });


    $("#add1").click(function() {
        var username = $("#user1").val();
        var password = $("#pass1").val();
        var abc = "<tr><td><input type='checkbox' name='record'></td><td>" + username + "</td><td>" + password + "</td></tr>";
        $("table tbody").append(abc);
        $("#user1").val("");
        $("#pass1").val("");
    });

    // Find and remove selected table rows
    $("#delete").click(function() {
        $("table tbody").find('input[name="record"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });


});