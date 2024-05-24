document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('product-container');
    const elementsArray = Array.from(container.getElementsByClassName('product'));

    // Функция для перемешивания массива
    function shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            const j = Math.floor(Math.random() * i);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Перемешиваем элементы и добавляем их обратно в контейнер
    const shuffledElements = shuffle(elementsArray);
    shuffledElements.forEach(element => container.appendChild(element));

    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const scrollContainer = document.querySelector('.scroll-container');

    scrollLeftBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
});
