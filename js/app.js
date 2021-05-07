document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.querySelector('#new-item');
    newItem.addEventListener('submit', handleNewItemSubmit);

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
    nativeBirdEntry.classList.add('entry-item');

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    nativeBirdEntry.appendChild(name);

    const status = document.createElement('h4');
    status.textContent = form.status.value;
    nativeBirdEntry.appendChild(status);

    const rating = document.createElement('p');
    rating.textContent = form.rating.value;
    nativeBirdEntry.appendChild(rating);

    return nativeBirdEntry;
}