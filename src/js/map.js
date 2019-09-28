let $map = $('#map');

if ($map.length) {
  ymaps.ready(init);
  let tabs = $('.contact-tabs__item');
  let dataCentrCoord = {
    moscow: [55.70, 37.25],
    kazan: [55.796289, 49.108795]
  };
  
  function init() {
    let myMap = new ymaps.Map('map', {
        center: dataCentrCoord['moscow'],
        zoom: 10
      }, {
        searchControlProvider: 'yandex#search'
      }),
      myGeoObject = new ymaps.GeoObject(),
      myPieChart = new ymaps.Placemark();
    
    myMap.geoObjects
      .add(myGeoObject)
      .add(myPieChart)
      .add(new ymaps.Placemark([55.799243, 37.274593], {
        balloonContent: ''
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      }))
      .add(new ymaps.Placemark([55.547397, 37.064956], {
        balloonContent: ''
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      }))
      .add(new ymaps.Placemark([55.54698, 37.07782], {
        balloonContent: ''
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      }))
      .add(new ymaps.Placemark([55.796289, 49.108795], {
        balloonContent: ''
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      }));
    
    function clickGoto() {
      
      let pos = this.getAttribute('data-city');
      
      myMap.panTo(dataCentrCoord[pos], {
        flying: 1
      });
      
      return false;
    }
    
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', clickGoto);
    }
    
  }
}
