// Set the configuration for your app
// TODO: Replace with your project's config object
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCUI9xYmqkXjmQi35aX1TMBuYO6yQfnD3Q",
    authDomain: "test-17546.firebaseapp.com",
    databaseURL: "https://test-17546.firebaseio.com",
    storageBucket: "test-17546.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// Creating a reference
var storageRef = storage.ref();
// Creating Image Reference
var imageRef = storageRef.child('images');