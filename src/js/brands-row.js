$(function(){
    let $toggle = $('[data-brands-row-togle]'),
        $items = $('[data-brands-row-item]');

    $toggle.on('click', function(){
        $items.toggleClass('visible');
        $toggle.toggleClass('active');

        if($toggle.is('.active')) {
            $toggle.text('Скрыть')
        } else {
            $toggle.text('Все...')
        }
    })
})