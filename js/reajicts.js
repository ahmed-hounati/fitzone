document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector(".register");
  form.addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var cin = document.getElementById('cin').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    var fullNameRegex = /^[A-Za-z\s']{3,}$/;
    var cinRegex = /^[a-zA-Z]{2}\d{6}$/;
    var telRegex = /^[+212]\d{9}$/;
    var emailRegex = /^\S+@\S+.\S+$/;

    if (!fullNameRegex.test(name)) {
      alert("Please enter a valid full name (minimum 3 characters).");
      event.preventDefault();
      return;
    }

    if (!cinRegex.test(cin)) {
      alert("Please enter a valid CIN (8 digits).");
      event.preventDefault();
      return;
    }

    if (!telRegex.test(tel)) {
      alert("Please enter a valid phone number (starts with +212 and followed by 9 digits).");
      event.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }
  });
});