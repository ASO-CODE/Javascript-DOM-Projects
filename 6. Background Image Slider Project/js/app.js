// Immediately invoked function expression
(function () {

    const pictures = [
        'contBcg-0',
        'contBcg-1',
        'contBcg-2',
        'contBcg-3',
        'contBcg-4'
    ];

    let counter = 0;

    const btn = document.querySelectorAll('.btn');

    btn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            let value = event.target;

            if (value.classList.contains('btn-left')) {
                counter--;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                document.querySelector(
                    '.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
            }
            if (value.classList.contains('btn-right')) {
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                document.querySelector(
                    '.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
            }
        });
    });
})();