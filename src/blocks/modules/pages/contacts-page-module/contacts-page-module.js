import { load } from '@2gis/mapgl';


if (document.querySelector('.contact-page__map')) {
  function resizeMapContainer() {
    const targetWidth = window.innerWidth / 2;

    const mapContainer = document.querySelector('.contact-page__map');

    if (mapContainer) {
      mapContainer.style.width = targetWidth + 'px';
    }
  }

  if (window.matchMedia('max-width: 980px')) {
    resizeMapContainer();
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia('max-width: 980px')) {
      resizeMapContainer();
    }
  });
}


const collapseButtons = document.querySelectorAll('.managers-contacts-head');


if (collapseButtons.length) {
  collapseButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const container = this.closest('.managers-contacts');
      const list = container.querySelector('.ul-container');


      if (list.classList.contains('container--active')) {
        container.classList.remove('active');
        list.classList.remove('container--active');
        list.style.maxHeight = 0;
      } else {
        container.classList.add('active');
        list.classList.add('container--active');
        list.style.maxHeight = list.scrollHeight + 'px';
      }
    });
  });
}



if (document.querySelector('#map')) {
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