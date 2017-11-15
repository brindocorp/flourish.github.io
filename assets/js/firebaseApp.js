// Set the configuration for your app

var config = {
    apiKey: "AIzaSyAikvhBTEMsJObC3SvyIqT3zZmOqu-UZqA",
    authDomain: "flourish-tree.firebaseapp.com",
    databaseURL: "https://flourish-tree.firebaseio.com",
    projectId: "flourish-tree",
    storageBucket: "flourish-tree.appspot.com",
    messagingSenderId: "641445109843"
};

firebase.initializeApp(config);

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