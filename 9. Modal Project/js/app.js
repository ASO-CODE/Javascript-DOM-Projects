// lightbox

(function () {
  // all images
  let imageList = [];
  let counter = 0;

  const images = document.querySelectorAll('.store-img');
  const container = document.querySelector('.lightbox-container');
  const item = document.querySelector('.lightbox-item');
  const closeIcon = document.querySelector('.lightbox-close');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  // add all images to the array
  images.forEach(function (img) {
    imageList.push(img.src);
  });

  // open modal
  images.forEach(function (img) {
    img.addEventListener('click', function (event) {
      container.classList.add('show');
      let src = event.target.src;
      counter = imageList.indexOf(src);
      item.style.backgroundImage = `url(${src})`;
    });
  });

  // close modal
  closeIcon.addEventListener('click', function () {
    container.classList.remove('show');
  });

  // left btn
  btnLeft.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    console.log(counter);
  })

  // right btn
  btnRight.addEventListener('click', function () {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    console.log(counter);
  })
})();