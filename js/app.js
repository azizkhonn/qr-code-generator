let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    let inputValue = qrText.value.trim()
    if (inputValue !== "") {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;
    } else {
        alert("Please enter some text or URL");
    }
    imgBox.classList.add("show-img")
}
