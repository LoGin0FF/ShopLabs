document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const phoneNumber = document.getElementById('phone').value;
        const password = passwordInput.value; // Получаем значение пароля из поля ввода

        // Получаем пароль из localStorage по номеру телефона
        const storedPassword = localStorage.getItem(phoneNumber);

        // Проверка введенных данных с данными из localStorage
        if (storedPassword && storedPassword === password) {
            localStorage.setItem('phoneNumber', phoneNumber);
            localStorage.setItem('password', password);

            window.location.href = 'Acc.html'; // Переходим на страницу личного кабинета
        } else {
            alert('Неправильный номер телефона или пароль. Попробуйте снова.');
        }
    });
});
