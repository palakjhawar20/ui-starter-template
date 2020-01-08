$(function() {
    var user = [{
        email: "mayank",
        pass: "demo"
    }, {
        email: "palak",
        pass: "demo"
    }, {
        email: "pooja",
        pass: "pooja"
    }, {
        email: "pagal",
        pass: "palak"
    }];

    $("button").click(function() {
        var isUserFound = false;
        user.forEach(element => {
            if ($("#email").val() == element.email && $("#pass").val() == element.pass) {
                isUserFound = true;
                return;
            }
        });
        $("#msg").text(isUserFound ? "Success" : "Error");
    });
});