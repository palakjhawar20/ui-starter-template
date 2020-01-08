$(function() {
    //Area
    $("#mul").click(function() {
        var a = $("#width").val();
        var b = $("#height").val();
        $("#result").val((a) * (b));
    });

    //Circumference 
    $("#cir").click(function() {
        var a = $("#width").val();
        var b = $("#height").val();
        $("#result").val(2 * (a) + 2 * (b));
    });

    // square area
    $("#sqr").click(function() {
        var a = $("#side").val();

        $("#out").val((a) * (a));
    });


    // square circumference
    $("#c").click(function() {
        var a = $("#side").val();

        $("#out").val(4 * (a));
    });


    // CIRCLE AREA
    $("#circle").click(function() {
        var a = $("#radius").val();

        $("#res").val(22 / 7 * a * a);
    });

    // CIRCLE CIRCUMFERENCE

    $("#cc").click(function() {
        var a = $("#radius").val();

        $("#res").val(22 / 7 * 2 * a);
    });

    // TRIANGLE AREA

    $("#tri").click(function() {
        var a = $("#h").val();
        var b = $("#b").val();

        $("#re").val((a * b) / 2);
    });

    // TRIANGLE CIRCUMFERENCE
    $("#ct").click(function() {
        var a = $("#h").val();
        var b = $("#b").val();
        var c = $("#s").val();
        var d = $("#s2").val();
        $("#re").val(1 * (b) + 1 * (c) + 1 * (d));
    });

});