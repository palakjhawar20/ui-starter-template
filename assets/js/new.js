$(function() {
    $("#show").hide();
    $("#hide").click(function() {
        $("p,#hide").hide();
        $("#show").show();
        $("#plus").hide();
        $("#minus").hide();
        $("p").fadeOut(slow);

    });

    $("#show").click(function() {

        $("p").show();
        $("#show").hide();
        $("#hide").show();
        $("#plus").show();
        $("#minus").show();
        $("p").fadeIn();



    });

    var a = 12;
    $("p").css("fontSize", a);
    $("#plus").click(function()

        {
            if (a <= 50) {
                a = a + 1;


                $("p").css({ 'fontSize': a, 'color': 'black' });
            } else {

                $("p").css({ 'color': 'red' });
            }

        });

    $("#minus").click(function() {
        if (a >= 7) {
            a = a - 1;

            $("p").css({ 'fontSize': a, 'color': 'black' });

        } else {

            $("p").css('color', 'red');
        }

    });

    function clock() {
        setTimeout(function() {
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            $("#clock").html(time);
            clock();
        }, 1000);
    }

    clock();


});