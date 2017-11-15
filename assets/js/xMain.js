if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful!');
    }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

let takePicture = document.querySelector('#takePicture');
let countryModal = document.querySelector('#countryModal');
takePicture.addEventListener('click', (e) => {
    e.preventDefault();
    // if(countryModal.style.display == 'block') {
    //     countryModal.style.display = 'none';
    // } else {
    //     countryModal.style.display = 'block';
    // }
    window.location.assign('camera.html');
});