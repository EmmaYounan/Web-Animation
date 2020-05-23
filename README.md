# Web-Animation
- Emma Younan | VID1
- Chosen artist - Pierre Mendell 
- Chosen artwork - "The twelfth night", Shakespeare, Bayerische Staatsoper

# 👾 Recreating artwork in the browser
During the Visual Interface Design minor we followed a web animation course. The assignment for this course was to choose an artwork and recreate that artwork for the web. Using CSS animations and much more to make a none interactive piece of artwork to an interactive one. Making sure that you present the artwork in the way that it supposed to look while adding your own touch to the design. To make the most of the two worlds, I started by doing research about the artwork and what the designers intention was of the artwork. Unfortunately, there was not much to find about this particular work. that's why I mainly studied the work of the chosen designer, his style and some biography. Added to that I researched the artwork content, why it was made, and for what. 

##  ☁️ The artwork - Background information
![Pierre-Mendell1997_As_you_like_it_Bavarian_State_Opera](https://user-images.githubusercontent.com/45408480/82729855-52513700-9cfb-11ea-83ca-b8f8471c1eea.jpg)

This work (poster) was made by Pierre Mendell in 1998, presenting the "The twelfth night" by Shakespeare for the Bayerische Staatsoper. Pierre Mendell is an American-German designer, and one of the world's leading graphic designers. For almost 30 years he played a role in creating the visual identity of the neue sammlung – the international design museum munich. 

Simplicity in forms is one of the many characteristics that Mendell's work had. Clean style, basic, essential, minimal, and prefers rational and smart solutions. Mendell himself says, that is the reason why he prefers to avoid the use of photography is that it represents the reality that can change, while fixing a concept make it persists along time.

Another characteristic is complexity in ideas. Despite his work being connoted by immediacy and simplicity, you can find a lot of the complexity in his themes and concepts.

Mendell's work also presents very strong and immediate colors. Usually, you can find three, or almost four colors per poster. Color can be full of simulates texture or brush. 

The directness of Mendell's work can achieve the goal of transcending every cultural or idiomatic bond. 
" The key to a powerful communication begins with the use of symbols that transcend reality and can be comprised by everyone".

### Why this piece of art 
Pierre Mendell is one of my favorite graphic designers. I really like the modern, simple yet sophisticated touch that he has. That is why I chose one of his artworks to recreate. And the reason that I chose this specified poster is that the poster has an interesting chocking element of having clouds with eyes. Moreover, I like the feeling that the poster is giving pure with some humor. 

### Twelfth Night - By William Shakespeare
- A love triangle

Twelfth Night, or What You Will is a romantic comedy by William Shakespeare, believed to have been written around 1601–1602 as a Twelfth Night's entertainment for the close of the Christmas season. The play centres on the twins Viola (Viola is one of Shakespeare's cross-dressing heroines) and Sebastian, who are separated in a shipwreck. Viola (who is disguised as Cesario) falls in love with Duke Orsino, who in turn is in love with Countess Olivia. Upon meeting Viola, Countess Olivia falls in love with her thinking she is a man.

### Thoughts on the artwork
I think that Mendell wanted to represent the two twins by the two clouds. They are the same but also the opposite of each other. But he can also be representing the lovers that are looking at the opposite side of each other. And have no idea of the love that is in each heart. 



## 👩🏽‍💻 The recreation
- From still to movement and interactivity


### 🎯 Concept - Desgin decisions
This poster by Mendell is one of the poster series that he designed for the Bayerische Staatsoper. It follows the simple yet expressive design of Mendell. Using simple, textured elements, solid background color, and some simple white typography for the poster's information. Medell design had texture, that is why I decided to play with the texture of the clouds. A 3D effect to give the poster a realistic, fun touch. Where the user can use the mousepad to zoom in to the clouds and zoom out of them. Also, the clouds follow the movement of the user's mouse that gives more interactivity to those simple elements. 

Clouds that have eyes are not that crazy so let's make them crazier by animating them. That gives the poster a much bigger touch of nonsense and attacks the user's attention to the main elements in the poster (the clouds). 

Another decision was to add background music. Twelfth Night is a play by William Shakespeare that has some amazing musicals. That is why I decided to add overtures by composer Sir Alexander Campbell Mackenzie, in 1888. 

A clear blue sky with two clouds represents the daytime in the original poster. That is why I decided to have a contrasting night themed poster to represent the nighttime in Shakespeare's play. The user can switch between the different themes. The night poster will have another background music by the same composer. The different music will help the user to switch between a funny bright theme to the romantic night theme.

Mendell's work was full of simple symbols that everyone can understand. That is why I decided to add extra interactive elements to the poster. Like the rainbow between the clouds that represents connection and love that is clearly represented in the play, the animated red hearts rain as a simple symbol of love, and the animated stars that adds more to the night theme.


### ♟ Added design elements
- Rainbow
- Hearts
- Stars
- Music
- Night theme

### 🕹 Interactivity
**Interactive clouds**
- Buttons (click)

By clicking on the clouds or on the rainbow/ heart button the ranibow or the hearts animation will start based on which theme is used. Used to code ```.addEventListener('click', functionName);```

- Keydown event

Users can also click on the R button on thier keyboard to start the rainbow animation. And click on the H button on thier keyboard to start the hearts animation. Used to code ```.addEventListener("keydown", function (e))```

- Mousewheel / Mousemove event / Touchmove event

To create the clouds I started with creating a viewport a ```<div>``` element in the HTML that contains another ```<div>``` element as the world for the different elements of the world (like clouds, eyes, rainbow, and hearts). Within that container I have another ```<div>``` element as the cloud base for the cloud.png image.

In JavaScript I defined the variables world and viewport. WorldXAngle and worldYAngle are floats that hold the world rotations. Using ```.style.webkitPerspective=();``` to give the viewport a perspective of 400.

Using the ```function onMouseMove ( e )``` to transform mouse position into angles from -180 to 180 degrees, both vertically and horizontally. This happens by calling the function using this event for desktop ```.addEventListener( 'mousemove', onMouseMove );```
And using this event for mobile ```.addEventListener( 'touchmove', onMouseMove );```
```js
function onMouseMove ( e ) {  
    // console.log(e)  
    var x = e.clientX || e.touches[ 0 ].clientX;    
    var y = e.clientY || e.touches[ 0 ].clientY;

    worldYAngle = -( .5 - ( x / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( y / window.innerHeight ) ) * 180;
    updateView();
    event.preventDefault();

}
```

***

**Interactive themes**
- Button (click)

To switch between the Day theme and the Night theme, users can click on the Day/ Night button. Used to code ```.addEventListener('click', functionName);```

***

**Interactive music** 
- Button (click)

The background music starts when loading the web page. But because of the privacy policy the load event doesnt work some times. Used code ```.addEventListener("load", functionName);```

The user stil have the option to turn the music off or on by clicking on the music Play/ Pause button. Used to code  ```.addEventListener('click', functionName);```


### 🤖 Animations
**Animated clouds**

***

**Animated eyes**

First, I used Illustrator to create an eye and exported it as an SVG code. In code I started with putting that ```<svg>``` element in my HTML to create the eye shape. Then I animated the circle (eyeball) that is within the ```<svg>``` element. I used to animate the SVG, SVG animation element in HTML.

```html
<circle id="_x3C_eyeBall1_x3E_" class="st0" cx="405.7" cy="279.3" r="25.7">
        <animate id="s1" attributeName="cx" from="405.7" to="465" begin='0;s2.end' dur="2s" />
        <animate id="s2" attributeName="cx" from="465" to="405.7" begin='s1.end;' dur="2s"/> -->
</circle>

```

***

**Animated rainbow**

To create the rainbow shape I used a ```<div>``` element as a container that has within multiple ```<div>``` elements te represent the different colors of the rainbow.

Each ```<div>``` element is a circle that has a different border color. Each circle also has a ```clip: react()``` to show only the half of the circle and give it an arc shape.
```css
.arc {
    animation: spin ease-in-out 2s normal both;
    border-radius: 50%;
    left: 50%;
    position: absolute;
    top: 50%;
}
.arc-red {
    border: 40px solid #e31d28;
    clip: rect(0 490px 245px 0);
    height: 490px;
    margin-left: -245px;
    margin-top: -245px;
    width: 490px;
    animation-delay: 1.8s;
    opacity: 0;
}
```

The ```<div>``` parent element has also a ```clip: react()``` to show only the top half of the rainbow. This will give the effect that the rainbow is moving from one side to the other during the animation. 
```css
.rainbow {
    clip: rect(0 490px 245px 0);
    height: 490px;
    left: -30%;
    position: absolute;
    top: -10%;
    transform: translateX(-50%) translateY(-25%);
    width: 490px;
    transform: rotate(-90deg);
}
```

The animation moves the arcs and makes them rotate ```transform: rotateZ();```. And each arc has a different delay ```animation-delay: ();```

***

**Animated hearts**

Using ```:before``` and ```:after``` pseudo-classes on a ```<div>``` element to create a heart shape.
```css
  .hearts {
    background-color: red;
    display: inline-block;
    height: 25px;
    margin: 0 10px;
    position: relative;
    top: 0;
    transform: rotate(-45deg);
    width: 25px;
    opacity: 0;
  }
  
.hearts:before,
.hearts:after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 25px;
    position: absolute;
    width: 25px;
  }
  
.hearts:before {
    top: -15px;
    left: 0;
  }
  
.hearts:after {
    left: 15px;
    top: 0;
  }
  
```

By creating multiple ```<div>``` elements and giving them a position. I was able to animate them and create a raining hearts effect using Keyframes animation in css, throug changing the top position and the opacity.
```css
/* hearts animation */
@keyframes heartOne {
    0% {
        top: 110px;
        opacity: 1;
    }
    100% {
        top: 500px;
        opacity: 0;
    }
}
```
***

**Animated stars** 

To create the stars, I used a JavaScript function to create an element in my HTML. And using ```Math.random()```  to give the a random position to the created stars. I chose to do that because of the number of stars that must be created to give the night sky effect.
```js
function drawStars(){
  var tmpStar = document.createElement('figure')
  tmpStar.className = "star";
  tmpStar.style.top = 100*Math.random()+'%';
  tmpStar.style.left = 100*Math.random()+'%';
  document.getElementById('sky').appendChild(tmpStar);
}
```

The amount of drawn stars is given by this function. 
```js
function createStars(i) {
    var i = i;
    while(i){
      drawStars();
      i-=1;
    }
}
```

To animate the stars I used Keyframes to give the stars a fading effect using different opasities.
```css
@keyframes fade {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
```

***

**Animated buttons**

Interaction buttons (rainbow button, heart button, and music button) are animated with keyframes in CSS by using ```scale:();```. The Day/ Night button is animated happens when a class added is added in JavaScript on the button when the click events happen. The animation is changing the position of the background image and changing the background image from a sun a moon when the click event happens, while also using ```transition:();```. All buttons have a ```:hover``` and ```:focus``` pseudo-classes. To make sure that the user knows when an element is interactive.



### 📱💻 Responsive design
- Mobile
- Tablet
- Desktop

## 📍 Conclusion
This project helped me refresh my memory of CSS and learn some new things about CSS Keyframes animation and much more about how to use the other CSS properties like (Clip, Filter, Transform, and Transform-style). Moreover, it was really interesting to recreate still artwork and make it interactive for the web. And think about the different interactions and how to change the layout based on different screen sizes. While thinking about the animation of each interactive element.


## 👁 References
[Poster](http://www.posterpage.ch/div/news06/n060618.htm)

[Twelfth_Night](https://en.wikipedia.org/wiki/Twelfth_Night)

[Twelfth_Night music](https://www.hyperion-records.co.uk/tw.asp?w=W6022)

[Animation - 3D clouds](https://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d/)

[Animation - Stars](https://codepen.io/cliffgurney/pen/GNpzdx)

[Animation - Rainbow](https://codepen.io/mmodrowski/pen/VjPbpo)

[Css transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)

[Easings](https://easings.net)

[CSS filter](https://css-tricks.com/almanac/properties/f/filter/)

[SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)

[keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)

[Mousewheel event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event)

[Mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)

[Touchmove event](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)

[ClientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX)

[Matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)














## 👩🏽 Authors
- Emma Younan


