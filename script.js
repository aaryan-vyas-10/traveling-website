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