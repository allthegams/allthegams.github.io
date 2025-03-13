fetch('../assets/gams.json')
  .then(response => response.json())
  .then(itemsData => {
    const gridContainer = document.getElementById('grid-container');
    const searchBar = document.getElementById('gamSearch');

    const updateGrid = (query = '') => {
      gridContainer.innerHTML = '';
      const filteredItems = itemsData.filter(item => 
        item.subtext.toLowerCase().includes(query.toLowerCase())
      );
      filteredItems.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.backgroundImage = `url(${item.imgSrc})`;

        const subtext = document.createElement('p');
        subtext.classList.add('subtext');
        subtext.textContent = item.subtext;

        gridItem.addEventListener('click', () => {
          openGam(item.source);
        });

        gridItem.appendChild(subtext);
        gridContainer.appendChild(gridItem);
      });
    };

    updateGrid();

    searchBar.addEventListener('input', (e) => {
      const query = e.target.value;
      updateGrid(query);
    });
  })
  .catch(error => {
    console.error('Error loading games', error);
  });


  function openGam(gamSrc) {
    const newWindow = window.open('iframe.html', '_blank');
    newWindow.gamSrc = gamSrc;
  }