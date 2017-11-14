// let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let name = document.querySelector('input#name');
//     let email = document.querySelector('input#email');
//     let password = document.querySelector('input#password');
//     var error = false;
//     var errorMsg = [];
//     if(name.value.length <= 0) {
//         error = true;
//         errorMsg[0] = "Please Enter your fullname";
//     }
    
//     if(email.value.length <= 0) {
//         error = true;
//         errorMsg[1] = "Please enter a valid email";
//     }

//     if(password.value.length <= 0) {
//         error = true;
//         errorMsg[2] = "Please enter password";
//     }

//     if(password.value != "Pastor") {
//         error = true;
//         errorMsg[3] = "Enter a Valid Password";
//     }
//     console.log(password.value);

//     if(error == true) {
//         alert("Error");
//         console.log(errorMsg);
//     } else {
//         -
//     }
// });

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