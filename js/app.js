document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.querySelector('#new-item');
    newItem.addEventListener('submit', handleNewItemSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemSubmit = function (event) {
    event.preventDefault();

    const nativeBirdEntry = createNativeBirdEntry(event.target);
    const nativeBird = document.querySelector('#entry');
    nativeBird.appendChild(nativeBirdEntry);

    event.target.reset();
}

const createNativeBirdEntry = function (form) {
    const nativeBirdEntry = document.createElement('li');
    nativeBirdEntry.classList.add('native-bird-entry');

    const name = document.createElement('h3');
    name.textContent = `Name: ${form.name.value}`;
    nativeBirdEntry.appendChild(name);

    const status = document.createElement('h4');
    status.textContent = `Status: ${form.status.value}`;
    nativeBirdEntry.appendChild(status);

    const rating = document.createElement('h4');
    rating.textContent = `Rating: ${form.rating.value}/5`;
    nativeBirdEntry.appendChild(rating);

    const radio = document.createElement('h4');
        let radioResult = function () {
            if (form.radio === true) {
                return "Yes";
            } else {
                return "No";
            };
        };
    let result = radioResult()
    radio.textContent = `Previous Winner? ${radioResult()}`;
    nativeBirdEntry.appendChild(radio);

    return nativeBirdEntry;
}

const handleDeleteAllClick = function (event) {
    const nativeBird = document.querySelector('#entry');
    nativeBird.innerHTML = '';
}