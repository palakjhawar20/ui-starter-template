//$(function() {
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function(e) {
//             $('#previewImage').attr('src', e.target.result);
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $("#uploadImage").change(function() {
//     readURL(this);
// });


$("button").click(function(event) {
    event.preventDefault();
    //$("#donationForm").validate();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var area = $("#area").val();
    var amount = $("#amount").val();


    var result = {
        "fname": fname,
        "lname": lname,
        "email": email,
        "area": area,
        "phone": phone,
        "amount": amount
    }

    console.log(result);

    if (fname == "" || lname == "" || email == "" ||
        area == "" || phone == "" || amount == "") {
        alert("All fields are required");
        return;
    }
    alert(" your form has been submitted");
});