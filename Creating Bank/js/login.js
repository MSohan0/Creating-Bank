document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail)
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'g@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
    console.log(userPassword);
})