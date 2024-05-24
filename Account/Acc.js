document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = localStorage.getItem('phoneNumber');
    const password = localStorage.getItem('password');

    document.getElementById('phoneNumber').textContent = phoneNumber;

    const passwordSpan = document.getElementById('password');
    passwordSpan.textContent = password; // Используем textContent для span

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('phoneNumber');
        localStorage.removeItem('password');
        window.location.href = 'Reg.html';
    });
});
