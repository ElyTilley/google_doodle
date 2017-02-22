// YOUR SCRIPTS GO HERE

// Store 3 Images
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get Random Number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display Random Images
$('#random').attr('src', eval('img'+ numRand));
