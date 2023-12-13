const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

const content1 = document.querySelector('.page-top-content-1');
const content2 = document.querySelector('.page-top-content-2');
const content3 = document.querySelector('.page-top-content-3');

const image1 = document.getElementById('page-top-image-1');
const image2 = document.getElementById('page-top-image-2');
const image3 = document.getElementById('page-top-image-3');

arrowLeft.addEventListener('click', () => {
    if (content1.classList.contains('active')) {
        content1.classList.remove('active');
        content1.classList.add('hidden');
        image1.classList.add('hidden');
        image3.classList.remove('hidden');
        content3.classList.remove('hidden');
        content3.classList.add('active');
    } else if (content2.classList.contains('active')) {
        content2.classList.remove('active');
        content2.classList.add('hidden');
        image2.classList.add('hidden');
        image1.classList.remove('hidden');
        content1.classList.remove('hidden');
        content1.classList.add('active');
    } else if (content3.classList.contains('active')) {
        content3.classList.remove('active');
        content3.classList.add('hidden');
        image3.classList.add('hidden');
        image2.classList.remove('hidden');
        content2.classList.remove('hidden');
        content2.classList.add('active');
    }
});

arrowRight.addEventListener('click', () => {
    if (content1.classList.contains('active')) {
        content1.classList.remove('active');
        content1.classList.add('hidden');
        image1.classList.add('hidden');
        image2.classList.remove('hidden');
        content2.classList.remove('hidden');
        content2.classList.add('active');
    } else if (content2.classList.contains('active')) {
        content2.classList.remove('active');
        content2.classList.add('hidden');
        image2.classList.add('hidden');
        image3.classList.remove('hidden');
        content3.classList.remove('hidden');
        content3.classList.add('active');
    } else if (content3.classList.contains('active')) {
        content3.classList.remove('active');
        content3.classList.add('hidden');
        image3.classList.add('hidden');
        image1.classList.remove('hidden');
        content1.classList.remove('hidden');
        content1.classList.add('active');
    }
});