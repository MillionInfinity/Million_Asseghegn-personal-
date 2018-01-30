function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function () {
    var result = 1;
    printNumber(result);
};

var images = ['../img/wd1.jpg', '../img/wd4.jpg', '../img/wd5.jpg', '../img/wd6.jpg'];
var index = 0;

function buildImage() {
    var img = document.createElement('img')
    img.src = images[index];
    document.getElementById('content').appendChild(img);
}

function changeImage() {
    var img = document.getElementById('content').getElementsByTagName('img')[0]
    index++;
    index = index % images.length; // This is for if this is the last image then goto first image
    img.src = images[index];