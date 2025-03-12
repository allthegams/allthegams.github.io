messageElement = document.getElementById("message");

fetch('../assets/messages.json')
    .then(response => response.json())
    .then(itemsData => {
      
    let message = itemsData[Math.floor(Math.random()*itemsData.length)];

    messageElement.textContent = message
})
    .catch(error => {
    console.error('Error loading messages', error);
});
