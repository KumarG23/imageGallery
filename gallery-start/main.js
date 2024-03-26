const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the array of image filenames */
const imageAlts = {
    'pic.jpg1' : 'Human Eye',
    'pic.jpg2' : 'Rock Wave',
    'pic.jpg3' : 'Flowers',
    'pic.jpg4' : 'Egyptian Art',
    'pic.jpg5' : 'Butterfly'
}
/* Declaring the alternative text for each image file */
/* Looping through images */
for (let imageName of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${imageName}`);
newImage.setAttribute('alt', imageAlts[imageName]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})