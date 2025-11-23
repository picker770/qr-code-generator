const qrInput = document.getElementById("qr-input");
const qrImg = document.getElementById("qr-img");
const qrBtn = document.getElementById("qr-button");

qrBtn.addEventListener('click', () => {
      const inputValue = qrInput.value;


      if (!inputValue) {
        alert("Please enter a valid URL");
        return;
      } else {
         qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
         qrImg.alt=`QR Code for ${inputValue}`;
      }
});
