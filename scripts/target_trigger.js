document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.querySelector('a-scene');
    var myVideo = document.querySelector('#vid');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
      arSystem = sceneEl.systems["mindar-image-system"];
    });
    const exampleTarget = document.querySelector('#b_side');
    
    
    exampleTarget.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    exampleTarget.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });
      });