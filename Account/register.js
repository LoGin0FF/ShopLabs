document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const phoneNumber = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Проверяем, не существует ли уже пользователя с таким номером телефона
    if (localStorage.getItem(phoneNumber)) {
        alert('Пользователь с таким номером телефона уже зарегистрирован.');
        return;
    }

    // Регистрируем нового пользователя
    localStorage.setItem(phoneNumber, password);
    alert('Регистрация прошла успешно! Теперь вы можете войти.');
    window.location.href = 'Entrance.html'; // Переходим на страницу входа
});
