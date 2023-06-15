function getRandomImage() {
    const imageCount = 21; // Total number of images (0-10)
    const randomIndex = Math.floor(Math.random() * imageCount);
    const randomImage = `b-images/${randomIndex}.png`;

    console.log(randomIndex);

    document.body.style.backgroundImage = `url(${randomImage})`;
}