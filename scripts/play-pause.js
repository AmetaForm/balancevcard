AFRAME.registerComponent('play-pause', {
    init: function () {
        var myVideo = document.querySelector('#vid');
        var playicon_1 = document.getElementById("play_1");
        var playicon_2 = document.getElementById("play_2");
        var playicon_4 = document.getElementById("play_4");
        var playicon_5 = document.getElementById("play_5");
        var playicon_6 = document.getElementById("play_6");
        var playicon_7 = document.getElementById("play_7");
        var prev_img_1 = document.getElementById("prev_1");
        var prev_img_2 = document.getElementById("prev_2");
        var prev_img_4 = document.getElementById("prev_4");
        var prev_img_5 = document.getElementById("prev_5");
        var prev_img_6 = document.getElementById("prev_6");
        var prev_img_7 = document.getElementById("prev_7");
        
        // var fullscreen_ico = document.getElementById('fullscreen_');
        // fullscreen_icon.setAttribute('visible', false);
        this.el.addEventListener('click', function(){
            prev_img_1.setAttribute('visible', false);
            prev_img_2.setAttribute('visible', false);
            prev_img_4.setAttribute('visible', false);
            prev_img_5.setAttribute('visible', false);
            prev_img_6.setAttribute('visible', false);
            prev_img_7.setAttribute('visible', false);
            if(myVideo.paused) {
                myVideo.play();
                playicon_1.setAttribute('visible', false);
                playicon_2.setAttribute('visible', false);
                playicon_4.setAttribute('visible', false);
                playicon_5.setAttribute('visible', false);
                playicon_6.setAttribute('visible', false);
                playicon_7.setAttribute('visible', false);
                
                // fullscreen_ico.setAttribute('visible', true);
            } else {
                myVideo.pause();
                playicon_1.setAttribute('visible', true);
                playicon_2.setAttribute('visible', true);
                playicon_4.setAttribute('visible', true);
                playicon_5.setAttribute('visible', true);
                playicon_6.setAttribute('visible', true);
                playicon_7.setAttribute('visible', true);
                
                // fullscreen_ico.setAttribute('visible', false);
            }
        });
    }
  })
