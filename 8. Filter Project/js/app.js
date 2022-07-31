// Immediately invoked function expression
// filter btns
(function () {
    // select all btns
    const filterBtn = document.querySelectorAll('.filter-btn');
    // console.log(filterBtn);

    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            const value = event.target.dataset.filter;
            console.log(value);
            const items = document.querySelectorAll('.store-item');
            // console.log(items);

            items.forEach(function (item) {
                if (value === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(value)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            })
        })
    })
})();

// search input
(function () {
    // target search box
    const search = document.getElementById('search-item');

    search.addEventListener('keyup', function () {
        let value = search.value.toLowerCase().trim();

        const items = document.querySelectorAll('.store-item');

        items.forEach(function (item) {
            let type = item.dataset.item;
            let length = value.length;
            let match = type.slice(0, length);

            if (value === match) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })
})();












