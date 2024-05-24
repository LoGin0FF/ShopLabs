document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = localStorage.getItem('phoneNumber');
    const password = localStorage.getItem('password');

    document.getElementById('phoneNumber').textContent = phoneNumber;
    document.getElementById('password').textContent = password;

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('phoneNumber');
        localStorage.removeItem('password');
        window.location.href = 'Reg.html'; // Перенаправляем на страницу входа или регистрации
    });
});
