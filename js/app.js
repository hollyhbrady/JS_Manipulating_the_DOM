document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.querySelector('#new-item');
    newItem.addEventListener9('submit', handleNewItemSubmit);

})

const handleNewItemSubmit = function (event) {
    event.preventDefault();

    const nativeBirdEntry = createNativeBirdEntry(event.target);
    const nativeBird = document.querySelector('#entries');
    nativeBird.appendChild(nativeBirdEntry);
}

const createNativeBirdEntry = function (form) {
    
}