// YOUR SCRIPTS GO HERE

// Store images
var img0 = '../img/art_Deco.jpg';
var img1 = '../img/banksy.jpg';
var img2 = '../img/boccioni_Charge.jpg';
var img3 = '../img/mediums.jpg';
var img4 = '../img/mosaique.jpg';
var img5 = '../img/stary_Night.jpg';

// Get random number
var max = 6;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display randomized images
$('#random').attr( 'src', eval('img' + numRand) );
