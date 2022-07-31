// Immediately invoked funtion
(function () {
    
    let customers = [];
    let index = 0;

    function Customer(name,img,text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    function createCustomer(name,img,text) {
        let fullImg = `img/customer-${img}.jpeg`;
        const customer = new Customer(name, fullImg, text);   
        customers.push(customer);
    }

    createCustomer(`John`, 1, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`);
    createCustomer(`Bob`, 2, `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop`);
    createCustomer(`Gideon`, 3, `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,`);
    createCustomer(`Pedro`, 2, `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years`);
   
    document.querySelectorAll('.btn').forEach(function (item){
        item.addEventListener('click', function (event) {
            event.preventDefault();

            if (event.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }

            if (event.target.parentElement.classList.contains('nextBtn')) {
                if (index === (customers.length - 1)) {
                    index = -1;
                }
                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }
        })
    })
})();