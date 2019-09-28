if (document.querySelectorAll(".basket-area").length) {

    let itemsPrice = $('.basket-area__goods-item--quantity-price');
    let btnsUp = $('.quantity-changer__btn_up');
    let btnsDown = $('.quantity-changer__btn_down');
    let goods = $('.basket-area__total-side--info-gds span');

    const state = {
        total: 0,
        goods: 0,
        initialPrice: getInitialPrice(),
    }

    function getGoods() {
        state.goods = itemsPrice.length;
        switch(state.goods) {
            case 1:
                goods.text(state.goods + ' товар')
                break;
            case 0:
                goods.text(state.goods + ' товаров')
                break;
            default:
                goods.text(state.goods + ' товара')
        }
        
    }

    function getInitialPrice() {
        let arrPrice = [];
        for (let item of itemsPrice) {
            let initial = parseInt(item.innerText.replace(/\s+/g, ''));
            arrPrice.push(initial);
        }

        return arrPrice;
    }

    btnsUp.on('click', function () {
        let $this = $(this);
        let initial = $this.closest(".basket-area__goods-item").attr('data-initial');
        let data = parseInt($this.siblings('.quantity-changer__total').text()) + 1;
        $this.siblings('.quantity-changer__total').text(data);
        let parent = $this.closest('.basket-area__goods-item--quantity')
        let price = $(parent).children('.basket-area__goods-item--quantity-price')

        let temp = price.text(initial * data);
        let fin = parseInt(temp.text(),10)
        price.text(fin.toLocaleString() + " ₽")
        getSum(price.text());
    })

    btnsDown.on('click', function () {
        let $this = $(this);
        let initial = $this.closest(".basket-area__goods-item").attr('data-initial');
        let data = parseInt($this.siblings('.quantity-changer__total').text()) - 1;
        if (data >= 1) {
            $this.siblings('.quantity-changer__total').text(data);
            let parent = $this.closest('.basket-area__goods-item--quantity')
            let price = $(parent).children('.basket-area__goods-item--quantity-price')
            let temp = parseInt(price.text().replace(/\s+/g,''), 10);
            price.text((temp - initial).toLocaleString() + " ₽");
            getSum();
        }
    })

    function getSum() {
        itemsPrice = $('.basket-area__goods-item--quantity-price');
        state.total = 0;
        getGoods();
        
        if (itemsPrice.length) {
            for (let price of itemsPrice) {
                let itemContent = parseInt(price.textContent.replace(/\s+/g, ''));
                state.total += itemContent;
                document.querySelector('.basket-area__total-side--info-price span').textContent = state.total.toLocaleString() + " ₽";
            }
        }
        else {
            document.querySelector('.basket-area__total-side--info-price span').textContent = 0 + " ₽";
        }
    }

    let $removeItem = $('[data-remove-item]');

    $removeItem.on('click', function () {
        let $this = $(this);

        $this.closest('.basket-area__goods-item').remove();
        getSum();

    })

    getSum() 
}
