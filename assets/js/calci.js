$(function() {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function() {
        var v = $(this).val();
        $('#result').val($('#result').val() + v);
    });


});


$(document).ready(function() {
    $("#add").click(function() {
        Add();
    });
    $("#substract").lick(function() {
        Substract();
    })
    $("#multiply").onclick(function() {
        Multiply();
    })
    $("#divide").onclick(function() {
        Divide();
    })
});