$(function() {
    $("#add1").click(function() {
        var username = $("#user1").val();
        var password = $("#pass1").val();
        var phone = $("#phn").val();
        var app = $("#app").val();
        var abc = "<tr><td><input type='checkbox' name='record'></td><td>" + username + "</td><td>" + password + "</td><td>" + phone + "</td><td>" + app + "</td></tr>";
        $("table tbody").append(abc);
        $("#user1").val("");
        $("#pass1").val("");
        $("#phn").val("");
        $("#app").val("");
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