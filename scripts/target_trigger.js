document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.querySelector('a-scene');
    var myVideo = document.querySelector('#vid');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
      arSystem = sceneEl.systems["mindar-image-system"];
    });
    var target_1 = document.querySelector('#b_side_1');
    var target_2 = document.querySelector('#b_side_2');
    
    
    target_1.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    target_1.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });
    target_2.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    target_2.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });
      });