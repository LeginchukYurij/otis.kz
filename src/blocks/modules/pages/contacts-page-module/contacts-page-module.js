import { load } from '@2gis/mapgl';


if(document.querySelector('.contact-page__map')) {
  function resizeMapContainer() {
    const targetWidth = window.innerWidth / 2;

    const mapContainer = document.querySelector('.contact-page__map');

    if(mapContainer) {
      mapContainer.style.width = targetWidth + 'px';
    }
  }

  resizeMapContainer();

  window.addEventListener('resize', () => {
    resizeMapContainer();
  });
}


if(document.querySelector('#map')) {
  async function start() {
    const mapglAPI = await load();

    // container — id of the div element in your html
    const map = new mapglAPI.Map('map', {
      center: [55.31878, 25.23584],
      zoom: 13,
      key: '5390b679-c914-47e0-88a8-5ca19b3c2764',
    });

    const marker = new mapglAPI.Marker(map, {
      coordinates: [55.31878, 25.23584],
      icon: '../img/svg/marker.svg'
    });
  }

  start();
}