//tim
const snowCanvas = document.querySelector('.snow-canvas');
const numSnowflakes = 100;
    for (let i = 0; i < numSnowflakes; i++) {
      const snow = document.createElement('div');
      snow.classList.add('snow');
      snow.textContent = '🎈';
      snow.style.color = '#fff';
      snow.style.left = getRandomIntInclusive(0, 95) + '%';
      snow.style.fontSize = getRandomIntInclusive(10, 30) + 'px';
      snow.style.opacity = getRandomIntInclusive(8, 10) * .1;
      snow.style.filter = `blur(${getRandomIntInclusive(0, 3)}px)`;
      snow.style.animationDuration = `${getRandomIntInclusive(3, 10)}s, ${getRandomIntInclusive(1, 3)}s`;
      snowCanvas.append(snow);
    }
//ảnh
const mainPhoto  = document.querySelector('.img-main');
// tự động nhảy ảnh
let i = 0;
let imageNames = ["qnhi1.jpg", "qnhi2.jpg", "qnhi3.jpg", "qnhi4.jpg", "qnhi5.jpg"]; // Thay đổi danh sách tên hình ảnh tại đây
let slideshowTimeout;

/*function slideshow() {
    if (i === imageNames.length) {
        i = 0;
    }
    link_name = "public/images/" + imageNames[i];
    mainPhoto.setAttribute('src', link_name); 
    i++;
    slideshowTimeout = setTimeout(slideshow, 1000);
}*/
//slideshow();

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
//click button
const btnClick = document.querySelector('.btn-click');
const avt_box = document.querySelector('.avt-box');
const note = document.querySelector('.note');
btnClick.addEventListener('click', function () {
  avt_box.style.left = '60%';
  btnClick.style.left = '70%';
  note.style.display = "block";
  btnClick.style.display = "none";
});
