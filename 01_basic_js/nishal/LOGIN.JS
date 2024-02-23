function toggleForm(form) {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');

    if (form === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    }
}