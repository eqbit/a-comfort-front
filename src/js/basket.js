$(function () {
  if ($(".basket-area").length) {
    
    let $buttonPlus = $('[data-item-plus]'),
      $buttonMinus = $('[data-item-minus]'),
      $buttonRemove = $('[data-item-remove]');
  
    const getTotal = () => {
      let total = 0;
    
      $('[data-initial]').map((idx, item) => {
        total += $(item).data('quantity') * $(item).data('initial')
      });
    
      return total
    };
    
    const getTotalItems = () => {
      let total = 0;
  
      $('[data-initial]').map((idx, item) => {
        total += $(item).data('quantity')
      });
  
      return total
    };
    
    const getTheWord = n => {
      let text_forms = ['товар', 'товара', 'товаров'];
      
      n = Math.abs(n) % 100;
      let n1 = n % 10;
      if (n > 10 && n < 20) { return text_forms[2]; }
      if (n1 > 1 && n1 < 5) { return text_forms[1]; }
      if (n1 == 1) { return text_forms[0]; }
      return text_forms[2];
    };
  
    const renewDigits = () => {
      let total = getTotal();
      
      let $visualTotal = $('[data-visual-total]');
      $visualTotal.text(total.toLocaleString('ru-RU') + ' ₽');
      
      
      let $totalItems = $('[data-total-items]'),
        itemsQuantity = getTotalItems();
      
      $totalItems.text(itemsQuantity + ' ' + getTheWord(itemsQuantity));
    };
  
    $buttonPlus.on('click', function() {
      let $item = $(this).closest('[data-initial]'),
        quantity = $item.data('quantity') + 1,
        singleItemPrice = $item.data('initial');
      
      $item.data('quantity', quantity);
      
      $item.find('[data-total-goods]').text(quantity);
      $item.find('[data-price]').text((quantity * singleItemPrice).toLocaleString('ru-RU') + ' ₽');
      
      renewDigits();
    });
  
    $buttonMinus.on('click', function() {
      let $item = $(this).closest('[data-initial]'),
        quantity = $item.data('quantity') - 1,
        singleItemPrice = $item.data('initial');
    
      if(quantity > 0) {
        $item.data('quantity', quantity);
  
        $item.find('[data-total-goods]').text(quantity);
        $item.find('[data-price]').text((quantity * singleItemPrice).toLocaleString('ru-RU') + ' ₽');
  
        renewDigits();
      }
    });
  
    $buttonRemove.on('click', function () {
      let $item = $(this).closest('[data-initial]');
      $item.remove();
  
      renewDigits();
    })
    
    
  }
});