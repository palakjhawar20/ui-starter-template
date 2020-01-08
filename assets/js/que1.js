$(function() {
    $("#click").click(function() {
        var numm = $("#num").val();
        if (numm != 0) {
            for ($i = 1; $i <= 10; $i++) {
                // var tbl = numm * $i;
                var ttbl = $("#result").append("<tr><td>" + numm * $i + "</td></tr></br>");
            }

        }

    });
});