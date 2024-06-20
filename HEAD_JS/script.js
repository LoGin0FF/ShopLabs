//перелистывание

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.movable');

    images.forEach(image => {
        const product = image.closest('.product');

        product.addEventListener('mousemove', (event) => {
            const rect = product.getBoundingClientRect();
            const y = event.clientY - rect.top;

            const moveY = (y / rect.height - 1) * -10;

            image.style.transform = `translateY(${moveY}px)`;
        });

        product.addEventListener('mouseleave', () => {
            image.style.transform = 'translateY(0)';
        });
    });
});

//скрпиты для перехода на страницы

document.addEventListener('DOMContentLoaded', () => {
    const transitionOne = document.getElementById('man');

    transitionOne.addEventListener('click', () => {
        window.location.href = 'ManClothes.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const transitionOne = document.getElementById('woman');

    transitionOne.addEventListener('click', () => {
        window.location.href = 'WomanClothes.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const transitionOne = document.getElementById('kids');

    transitionOne.addEventListener('click', () => {
        window.location.href = 'KidsClothes.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const transitionOne = document.getElementById('logo');

    transitionOne.addEventListener('click', () => {
        window.location.href = '/HEAD_HTML/index.html';
    });
});

loginBtn.addEventListener('click', () => {
    window.location.href = '../Account/Reg.html';
});

//скроллинг

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    const updateScrollButtons = () => {
        const visibleProducts = Array.from(document.querySelectorAll('.product')).filter(product => product.style.display !== 'none');
        if (visibleProducts.length < 6) {
            scrollLeft.classList.add('hidden');
            scrollRight.classList.add('hidden');
        } else {
            scrollLeft.classList.remove('hidden');
            scrollRight.classList.remove('hidden');
        }
    };
    scrollLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    });

    scrollRight.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth,
            behavior: 'smooth'
        });
    });

//поиск

document.getElementById('searchInput').addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const products = document.getElementById('product-container').getElementsByClassName('product');

        Array.from(products).forEach(function(product) {
            const productName = product.getElementsByTagName('h2')[0].textContent.toLowerCase();
            if (productName.includes(filter)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });

        updateScrollButtons();
    });

    updateScrollButtons(); 
});

// Получаем все кнопки корзины
const cartButtons = document.querySelectorAll('.cart-button');

// Обработчик нажатия на кнопку корзины
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        alert(`Товар успешно добавлен в корзину!`);
    });
});
