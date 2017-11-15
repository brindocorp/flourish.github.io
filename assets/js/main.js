window.addEventListener('load', () => {
    let video = document.getElementById('video');
    let captureBtn = document.getElementById('capture');
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    
    video.width = window.innerWidth;
    video.height = window.innerHeight;

    var vid = document.querySelector('video#video.video');

    canvas.width = video.width;
    canvas.height = video.height;

    let cameraArea = document.getElementById('cameraArea');
    let capturedArea = document.getElementById('capturedArea');

    let mediaConfig =  { video: true };
    let errBack = function(e) {
        console.log("Error occured " + e);
    }

    function modalDisplay(e) {
        e.preventDefault();
        let continueModal = document.querySelector('#continueModal');
        if (continueModal.style.display == 'block') {
            continueModal.style.display = 'none';
        } else {
            continueModal.style.display = 'block';
        }
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

    let usePhoto = document.querySelector('#continue');
    usePhoto.addEventListener('click', modalDisplay);

    function savePhoto(canvas, id, country) {
        canvas.toBlob(blob => {
            var storage = firebase.app().storage().ref();
            var name = id + "/" + (new Date()).getTime() + ".png";
            var f = storage.child("photos/" + name);
            var task = f.put(blob);
            task.on('state_changed', function (snapshot) {
            }, function (error) {
                console.error("Unable to save image.");
                console.error(error);
            }, function () {
                var url = task.snapshot.downloadURL;
                console.log("Saved to " + url);
                // var userRef = storage.push();
                // console.log('my new shiny id is ' + userRef.key());
                // var userRef = usersRef.push({
                //     photo: name, 
                //     photo_url: url,
                //     country: country,
                // });
                // if(userRef) {
                //     console.log("Done");
                // } else {
                //     console.log("Not Done");
                // }
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
        savePhoto(canvas, 'images', country);
    });

    var closeBtn = document.querySelector('#closeModal');
    closeBtn.addEventListener('click', modalDisplay);
});