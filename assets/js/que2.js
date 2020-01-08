// even or odd
$(function() {
    $("#btn").click(function() {
        var number = $("#num").val();

        if (number % 2 == 0) {
            output = " The Number is Even"
        } else {
            output = " The Number is Odd"
        }


        $("#result").html(output);
    });

    // prime number
    $("#btn1").click(function() {
        var number = $("#num").val();
        // output = "";
        if (number == 1 || number == 2) {
            $("#result").html("It is  a prime number");
            return;
        }

        for (i = 2; i <= number - 1; i++) {
            if (number % i == 0) {
                output = " It is not a prime number";
                break;
            } else {
                output = "It is a prime number";
            }
        }
        $("#result").html(output);
    });


});