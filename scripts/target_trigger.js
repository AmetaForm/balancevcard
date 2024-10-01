document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.querySelector('a-scene');
    var myVideo = document.querySelector('#vid');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
      arSystem = sceneEl.systems["mindar-image-system"];
    });
    var target_1 = document.querySelector('#b_side_1');
    var target_2 = document.querySelector('#b_side_2');
    var target_4 = document.querySelector('#b_side_4');
    var target_5 = document.querySelector('#b_side_5');
    var target_6 = document.querySelector('#b_side_6');
    var target_7 = document.querySelector('#b_side_7');
    
    
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

    target_4.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    target_4.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });
    
    target_5.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    target_5.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });

    target_6.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    target_6.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });

    target_7.addEventListener("targetFound", event => {
      console.log("target found");
      myVideo.muted = false;
    });
  
    target_7.addEventListener("targetLost", event => {
      console.log("target lost");
      myVideo.muted = true;
    });
      });