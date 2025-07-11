const menuBar = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon1');
const sidebar = document.querySelector('.mobileMenu');

menuBar.addEventListener('click', () => {
    sidebar.style.right = '0px';
});

closeIcon.addEventListener('click', () => {
    sidebar.style.right = "-300px";
});

const likeImages = document.querySelectorAll('.likeIcon');

likeImages.forEach(likeImage => {
    likeImage.addEventListener('click', () => {
        if (likeImage.src.includes('bx-heart.png')) {
            likeImage.src = "img/Heart.png";
        } else {
            likeImage.src = "img/bx-heart.png";
        }
    });
});

const messages = document.querySelectorAll('.message');
const totalMessages = messages.length;
let currentIndex = 0;

function showNextMessage() {
    messages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalMessages;
    messages[currentIndex].classList.add('active');
}

setInterval(showNextMessage, 3000);