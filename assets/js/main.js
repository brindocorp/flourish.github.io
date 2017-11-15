window.addEventListener('load', () => {
    let video = document.getElementById('video');
    let captureBtn = document.getElementById('capture');
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    
    video.width = window.innerWidth;
    video.height = window.innerHeight;

    canvas.width = video.width;
    canvas.height = video.height;

    let cameraArea = document.getElementById('cameraArea');
    let capturedArea = document.getElementById('capturedArea');

    let mediaConfig =  { video: true };
    let errBack = function(e) {
        console.log("Error occured " + e);
    }

    // Put video listeners into place
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    } else if(navigator.getUserMedia) { // Standard
        navigator.getUserMedia(mediaConfig, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(mediaConfig, function(stream){
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia(mediaConfig, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }

    captureBtn.addEventListener('click', function(e) {
        e.preventDefault();
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        cameraArea.style.display = 'none';
        capturedArea.style.display = 'block';
    });

    let lists = document.querySelectorAll('ul li');
    for(var pos=0; pos<lists.length; pos++) {
        lists[pos].addEventListener('click', (e) => {
            var id = e.target.getAttribute('id');
            if(id == 'retake') {
                window.location.assign('camera.html');
            } else {
                console.log("Filter for "+id+" will take place");
            }
        });
    }

    let usePhoto = document.querySelector('#continue');
    usePhoto.addEventListener('click', function(e){
        e.preventDefault();
        let continueModal = document.querySelector('#continueModal');
        if(continueModal.style.display == 'block') {
            continueModal.style.display = 'none';
            console.log("Hidden");
        } else {
            continueModal.style.display = 'block';
            console.log("Shown");
        }
    });

    function savePhoto(canvas, id) {
        canvas.toBlob(blob => {
            var storage = firebase.app().storage().ref();
            var name = id + "/" + (new Date()).getTime() + ".png";
            var f = storage.child("drawings/" + name);
            var task = f.put(blob);
            task.on('state_changed', function (snapshot) {
            }, function (error) {
                console.error("Unable to save image.");
                console.error(error);
            }, function () {
                var url = task.snapshot.downloadURL;
                console.log("Saved to " + url);
            });
        });
    };
    
    let form = document.querySelector('#pushData');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let country = document.querySelector('#country').value;
        let countryFlagUrl = (country+".gif").toLowerCase();
        let photoUrl = canvas.toDataURL("image/png");
        alert(countryFlagUrl);
        savePhoto(canvas, 'images');
    });
});