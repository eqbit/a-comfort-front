$(function () {
    let closeSearchBtn = $('#popup-search--close-btn');
    let popupSearch = $('.popup-search');
    let searchBtns = $('[data-search-toggle]')

    searchBtns.on('click', function () {
        popupSearch.fadeIn();
    })

    closeSearchBtn.on('click', function () {
        popupSearch.fadeOut();
    })

    $('.popup-search__wrap').on('click', function (event) {
        if(!event.target === $('.popup-search__field')[0] || $('.popup-search__field').has(event.target).length === 0) {
            popupSearch.fadeOut();
        }
    })


    //
    let regionBtns = $('[data-region-toggle]');
    let popupRegion = $('.popup-region');

    regionBtns.on('click', function () {
        popupRegion.fadeIn();
    })

    $('.popup-region__wrap').on('click', function (event) {
        if(!event.target === $('.popup-region__list')[0] || $('.popup-region__list').has(event.target).length === 0) {
            popupRegion.fadeOut();
        }
    })
})
