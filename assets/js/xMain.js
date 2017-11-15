if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful!');
    }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

var intro = document.querySelector('#intro');
var typewriter = new Typewriter(intro, {
    loop: true
});
typewriter.typeString('Welcome to Raphsody of Reality Flourishing Tree!')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2000)
    .typeString('Enjoy the beauty of the flourishing tree. ')
    .pauseFor(3000)
    .typeString('Tap on the button below to begin')
    .start();

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