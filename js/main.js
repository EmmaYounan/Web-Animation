/*
  Defining our variables
  world and viewport are DOM elements,
  worldXAngle and worldYAngle are floats that hold the world rotations,
  d is an int that defines the distance of the world from the camera
*/

var layers = [],
    objects = [],

    world = document.querySelectorAll( '.world' ),
    viewport = document.getElementById( 'viewport' ),

    d = 0,
    p = 400,
    worldXAngle = 0,
    worldYAngle = 0;
var worlds = Array.from(world)

viewport.style.webkitPerspective = p;
viewport.style.MozPerspective = p;
viewport.style.oPerspective = p;

window.addEventListener( 'mousewheel', onContainerMouseWheel );
window.addEventListener( 'DOMMouseScroll', onContainerMouseWheel );
window.addEventListener( 'mousemove', onMouseMove );
window.addEventListener( 'touchmove', onMouseMove );

/*
Event listener to transform mouse position into angles
from -180 to 180 degress, both vertically and horizontally
*/

function onMouseMove ( e ) {  
    // console.log(e)  
    var x = e.clientX || e.touches[ 0 ].clientX;    
    var y = e.clientY || e.touches[ 0 ].clientY;

    worldYAngle = -( .5 - ( x / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( y / window.innerHeight ) ) * 180;
    updateView();
    event.preventDefault();

}

/*
event listener to modify the distance of the camera. 
Move the mouse and notice how the red div changes orientation.
*/

function onContainerMouseWheel( event ) {

    event = event ? event : window.event;
    d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
    updateView();
    // event.preventDefault();

}

/*
Changes the transform property of world to be
translated in the Z axis by d pixels,
rotated in the X axis by worldXAngle degrees and
rotated in the Y axis by worldYAngle degrees.
*/

function updateView() {
    var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
 worlds.forEach( world =>{
    world.style.webkitTransform = t;
    world.style.MozTransform = t;
    world.style.oTransform = t;
 })
}

var clouds = document.querySelectorAll(".cloudBase img");
cloudsArray = Array.from(clouds);

function update (){

    cloudsArray.forEach( layer =>{
        var style = window.getComputedStyle(layer);
        var matrix = new WebKitCSSMatrix(style.webkitTransform)
        // let clouds move and rotate
        // console.log(matrix)
        // var speed = .1 * Math.random();
        // matrix.m41 += speed
        var t = 'translateX( ' + matrix.m41 + 'px ) translateY( ' + matrix.m42+ 'px ) translateZ( ' + matrix.m43 + 'px ) rotateY( ' + ( - worldYAngle ) + 'deg ) rotateX( ' + ( - worldXAngle ) + 'deg ) rotateZ( ' + matrix.m41 + 'deg )';
        layer.style.webkitTransform = t;
        layer.style.MozTransform = t;
        layer.style.oTransform = t;
    })

    requestAnimationFrame( update );

}

update();

var button = document.querySelector('.button');
var background = document.querySelector('#viewport');
var eye1 = document.querySelector('.eye-one');
var eye2 = document.querySelector('.eye-two');
var eye3 = document.querySelector('.eye-three');
var eye4 = document.querySelector('.eye-four');
var heartRain = document.querySelectorAll('.hearts')
var eyeBall = document.querySelectorAll('.st0')
var cloudsPng = document.querySelectorAll('.cloud');
var header = document.querySelector('.header');
var btnRainBow = document.querySelector(".rainbow-btn");
var btnHeart = document.querySelector(".heart-btn");
var playButton = document.querySelector('.music-btn');
var musicOne = document.querySelector('.audio-one');
var worlds = document.querySelectorAll(".world")

for (let i = 0; i < worlds.length; i++) {
    worlds[i].addEventListener('click', function(){
        if (background.classList.contains("pink")){
                heartRain[0].classList.toggle('heart1');
                heartRain[1].classList.toggle('heart2');
                heartRain[2].classList.toggle('heart3');
                heartRain[3].classList.toggle('heart4');
                heartRain[4].classList.toggle('heart5');
                heartRain[5].classList.toggle('heart6');
                heartRain[6].classList.toggle('heart1');
                heartRain[7].classList.toggle('heart2');
                heartRain[8].classList.toggle('heart3');
                heartRain[9].classList.toggle('heart4');
                heartRain[10].classList.toggle('heart5');
                heartRain[11].classList.toggle('heart6');
                console.log("hearts")
            
        }else if (!background.classList.contains("pink")){
            
                var arcs = document.querySelectorAll(".color")
                for (let i = 0; i < arcs.length; i++) {
                    arcs[i].classList.toggle("arc")
                }
                console.log("rainbow")
            
        }
    })
}

playButton.addEventListener("click", function(){
  if(musicOne.paused){
    musicOne.play();
    playButton.classList.add("pause");
    playButton.classList.remove("play");
  } else {
    musicOne.pause();
    playButton.classList.add("play");
    playButton.classList.remove("pause");
  }
});

window.addEventListener("load", function(){
    musicOne.play();
    if(musicOne.paused){
        playButton.classList.add("play");
        playButton.classList.remove("pause");
      } else {
        playButton.classList.add("pause");
        playButton.classList.remove("play");
      }
})

btnRainBow.addEventListener('click', function(){
    var arcs = document.querySelectorAll(".color")
    for (let i = 0; i < arcs.length; i++) {
        arcs[i].classList.toggle("arc")
    }
})

btnHeart.addEventListener('click', function(){
    heartRain[0].classList.toggle('heart1');
    heartRain[1].classList.toggle('heart2');
    heartRain[2].classList.toggle('heart3');
    heartRain[3].classList.toggle('heart4');
    heartRain[4].classList.toggle('heart5');
    heartRain[5].classList.toggle('heart6');
    heartRain[6].classList.toggle('heart1');
    heartRain[7].classList.toggle('heart2');
    heartRain[8].classList.toggle('heart3');
    heartRain[9].classList.toggle('heart4');
    heartRain[10].classList.toggle('heart5');
    heartRain[11].classList.toggle('heart6');
})
window.addEventListener("keydown", function (e) {
    if (background.classList.contains("pink")){
        if (e.code == "KeyH") {
            heartRain[0].classList.toggle('heart1');
            heartRain[1].classList.toggle('heart2');
            heartRain[2].classList.toggle('heart3');
            heartRain[3].classList.toggle('heart4');
            heartRain[4].classList.toggle('heart5');
            heartRain[5].classList.toggle('heart6');
            heartRain[6].classList.toggle('heart1');
            heartRain[7].classList.toggle('heart2');
            heartRain[8].classList.toggle('heart3');
            heartRain[9].classList.toggle('heart4');
            heartRain[10].classList.toggle('heart5');
            heartRain[11].classList.toggle('heart6');
        }
    }else if (!background.classList.contains("pink")){
        if (e.code == "KeyR") {
            var arcs = document.querySelectorAll(".color")
            for (let i = 0; i < arcs.length; i++) {
                arcs[i].classList.toggle("arc")
            }
        }
    }
})

button.addEventListener('click', function(){
    button.classList.toggle('night')
    
    eyeBall[0].classList.toggle('eyeBallColor');
    eyeBall[1].classList.toggle('eyeBallColor');
    eyeBall[2].classList.toggle('eyeBallColor');
    eyeBall[3].classList.toggle('eyeBallColor');

    header.classList.toggle('red');


    for (let i = 0; i < cloudsPng.length; i++) {
        cloudsPng[i].classList.toggle('cloudPink')    
    }

    background.classList.toggle('pink')
    eye1.classList.toggle('pinkEye')
    eye2.classList.toggle('pinkEye')
    eye3.classList.toggle('pinkEye')
    eye4.classList.toggle('pinkEye')
    createStars(200);
    animateStars();
    if(background.classList.contains("pink")){
        var arcs = document.querySelectorAll(".color")
        for (let i = 0; i < arcs.length; i++) {
            arcs[i].classList.remove("arc")
        }
        createStars(200);
        animateStars();
        btnRainBow.classList.toggle("desappear")
        btnHeart.classList.toggle("desappear")
        musicOne.src = "66764-01-05-VBR.mp3"
        musicOne.play();
        if(musicOne.paused){
            playButton.classList.add("play");
            playButton.classList.remove("pause");
          } else {
            playButton.classList.add("pause");
            playButton.classList.remove("play");
          }
    }else if (!background.classList.contains("pink")){
        musicOne.src = "66764-01-02-VBR.mp3"
        musicOne.play();
        if(musicOne.paused){
            playButton.classList.add("play");
            playButton.classList.remove("pause");
          } else {
            playButton.classList.add("pause");
            playButton.classList.remove("play");
          }
        var stars = document.querySelectorAll(".star");
        for (let i = 0; i < stars.length; i++) {
            stars[i].remove()
        }
        btnRainBow.classList.toggle("desappear")
        btnHeart.classList.toggle("desappear")
        heartRain[0].classList.remove('heart1');
        heartRain[1].classList.remove('heart2');
        heartRain[2].classList.remove('heart3');
        heartRain[3].classList.remove('heart4');
        heartRain[4].classList.remove('heart5');
        heartRain[5].classList.remove('heart6');
        heartRain[6].classList.remove('heart1');
        heartRain[7].classList.remove('heart2');
        heartRain[8].classList.remove('heart3');
        heartRain[9].classList.remove('heart4');
        heartRain[10].classList.remove('heart5');
        heartRain[11].classList.remove('heart6');
    }
})


// Amount of stars
function createStars(i) {
    var i = i;
    while(i){
      drawStars();
      i-=1;
    }
}

// Create Stars
function drawStars(){
  var tmpStar = document.createElement('figure')
  tmpStar.className = "star";
  tmpStar.style.top = 100*Math.random()+'%';
  tmpStar.style.left = 100*Math.random()+'%';
  document.getElementById('sky').appendChild(tmpStar);
}

// Animate Stars
function animateStars() {
    var stars = document.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.animationName = "fade";
        stars[i].style.animationDuration = "2s";
        stars[i].style.animationIterationCount = "infinite";
        stars[i].style.animationDelay = `${Math.floor(Math.random() * 2000) + 100}ms`;
    }
}




    
