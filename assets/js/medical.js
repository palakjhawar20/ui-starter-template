$(function() {
    $("button").click(function(event) {
        event.preventDefault();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var phone = $("#phone").val();
        var area = $("#area").val();
        var disease = $("#disease").val();
        var hdisease = $(".hdisease").val();
        var med = $(".med:checked").val();
        var alle = $(".alle:checked").val();
        var gender = $(".gender:checked").val();
        var tob = $("#tob").val();
        var drug = $("#drug").val();
        var alcohol = $(".alcohol:checked").val();



        var result = {
            "fname": fname,
            "lname": lname,
            "area": area,
            "phone": phone,
            "disease": disease,
            "hdisease": hdisease,
            "med": med,
            "alle": alle,
            "gender": gender,
            "tob": tob,
            "drug": drug,
            "alcohol": alcohol

        }

        console.log(result);

        if (fname == "" || lname == "" || area == "" || phone == "" || disease == "" || hdisease == "" || med == "" || alle == "" || gender == "" || tob == "" || drug == "" || alcohol == "") {
            alert("All fields are required");
            return;
        }
        alert(" your form has been submitted");
    });
});