document.addEventListener("DOMContentLoaded", function() {
    const randomImageElement = document.getElementById("randomImage");
    const getRandomImageButton = document.getElementById("getRandomImage");
    const overlay = document.getElementById("overlay");

    const imageNames = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    function getRandomImageName() {
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }

    function getRandomImageURL() {
        const imageName = getRandomImageName();
        return `images/${imageName}`;
    }

    function getRandomImage() {
        // Показываем серый фон
        overlay.style.display = "block";

        // Запускаем таймер на 3 секунды
        setTimeout(function() {
            const randomImageURL = getRandomImageURL();
            randomImageElement.src = randomImageURL;

            // Скрываем серый фон после смены изображения
            overlay.style.display = "none";
        }, 3000);
    }

    getRandomImageButton.addEventListener("click", function() {
        getRandomImage();
    });
});
