AFRAME.registerComponent('play-pause', {
    init: function () {
        var myVideo = document.querySelector('#vid');
        var playicon_1 = document.getElementById("play_1");
        var playicon_2 = document.getElementById("play_2");
        var prev_img_1 = document.getElementById("prev_1");
        var prev_img_2 = document.getElementById("prev_2");
        // var fullscreen_ico = document.getElementById('fullscreen_');
        // fullscreen_icon.setAttribute('visible', false);
        this.el.addEventListener('click', function(){
            prev_img_1.setAttribute('visible', false);
            prev_img_2.setAttribute('visible', false);
            if(myVideo.paused) {
                myVideo.play();
                playicon_1.setAttribute('visible', false);
                playicon_2.setAttribute('visible', false);
                
                // fullscreen_ico.setAttribute('visible', true);
            } else {
                 myVideo.pause();
                playicon_1.setAttribute('visible', true);
                playicon_2.setAttribute('visible', true);
                
                // fullscreen_ico.setAttribute('visible', false);
            }
        });
    }
  })
