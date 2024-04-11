document.addEventListener("DOMContentLoaded", function() {
    const randomImageElement = document.getElementById("randomImage");
    const getRandomImageButton = document.getElementById("getRandomImage");

    // Список с именами файлов изображений
    const imageNames = [
        "image1.jpeg",
        "image2.jpeg",
        "image3.jpeg",
        "image4.jpeg",
        "image5.jpeg"
    ];

    // Функция для получения случайного имени файла изображения
    function getRandomImageName() {
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }

    // Функция для формирования URL-адреса случайного изображения
    function getRandomImageURL() {
        const imageName = getRandomImageName();
        return `images/${imageName}`;
    }

    // Функция для получения случайной картинки
    function getRandomImage() {
        const randomImageURL = getRandomImageURL();
        randomImageElement.src = randomImageURL;
    }

    // Получение случайной картинки при нажатии на кнопку
    getRandomImageButton.addEventListener("click", getRandomImage);

    // Первичное получение случайной картинки при загрузке страницы
    getRandomImage();
});
