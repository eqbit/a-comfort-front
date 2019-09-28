let topProductPopup = $('#top-product-popup');

let iconsTop = $('.top-product__delivery-icon');
let popupsTop = $('.top-product__delivery-popup');

let iconSp = $('.special-offer__slider-item--sale-icon');
let popupSp = $('.special-offer__quest-popup')

for(let i = 0; i < iconsTop.length; i++) {
    $(iconsTop[i]).on('click', function () {
        $(popupsTop[i]).fadeIn();
    })
    
    $(document).mouseup(function (e) {
        let div = $(popupsTop[i]);
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.fadeOut();
        }
    });
}


for(let i = 0; i < iconSp.length; i++) {
    $(iconSp[i]).on('click', function () {
        $(popupSp[i]).fadeIn();
    })
    
    $(document).mouseup(function (e) {
        let div = $(popupSp[i]);
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.fadeOut();
        }
    });
}

// $('body').on('click', iconSp[1], function(){
//     console.log('svg')
// })
