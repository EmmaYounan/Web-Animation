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