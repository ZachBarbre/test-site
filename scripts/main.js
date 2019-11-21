let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cthulhu.jpg') {
        myImage.setAttribute ('src', 'images/dagon.jpg');
    }
    else if(mySrc === 'images/dagon.jpg') {
        myImage.setAttribute ('src', 'images/migo.jpg');
    }
    else if (mySrc === 'images/migo.jpg') {
        myImage.setAttribute ('src', 'images/yogsothoth.jpg');
    }
    else {
        myImage.setAttribute ('src', 'images/cthulhu.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Lease enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The Old Ones want you, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The Old Ones want you, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}