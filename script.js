/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

const maximizeOrMinimizePic = function(element){
  element.className === "equipment-pics" ? element.className = "pics-maximized" : element.className = "equipment-pics";
};