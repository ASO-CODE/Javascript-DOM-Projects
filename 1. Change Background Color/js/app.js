const colors = ['blue', 'yellow', 'green', '#f15025', 'rgba(125,125,125,0.5)'];

const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * colors.length);
    const body = document.body;
    body.style.backgroundColor = colors[random]
    console.log(random);
})














