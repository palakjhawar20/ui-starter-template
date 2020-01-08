// function openQRCamera(node) {
//     var reader = new FileReader();
//     reader.onload = function() {
//         node.value = "";
//         qrcode.callback = function(res) {
//             if (res instanceof Error) {
//                 alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
//             } else {
//                 node.parentNode.previousElementSibling.value = res;
//             }
//         };
//         qrcode.decode(reader.result);
//     };
//     reader.readAsDataURL(node.files[0]);
// }

// function showQRIntro() {
//     return confirm("Use your camera to take a picture of a QR code.");
// }


// Resources


var qrcode = new QRCode("test", {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});