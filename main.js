var input = document.getElementById('email');
            input.oninvalid = function(event) {
    event.target.setCustomValidity('Please Enter your email id');
}
var input = document.getElementById('message');
            input.oninvalid = function(event) {
    event.target.setCustomValidity('Please text here');
}