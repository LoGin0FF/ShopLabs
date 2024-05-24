document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.getElementById('showPassword');

    showPasswordButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    // Объект с тестовыми данными пользователей
    const users = {
        '79512735793': 'password123'
        // Другие пользователи могут быть добавлены сюда
    };

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const phoneNumber = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // Проверка введенных данных с тестовыми данными
        if (users[phoneNumber] === password) {
            localStorage.setItem('phoneNumber', phoneNumber);
            localStorage.setItem('password', password);

            window.location.href = 'Acc.html';
        } else {
            alert('Неправильный номер телефона или пароль. Попробуйте снова.');
        }
    });
});
