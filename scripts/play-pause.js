AFRAME.registerComponent('play-pause', {
    init: function () {
        var myVideo = document.querySelector('#vid');
        var playicon = document.getElementById('play_');
        var fullscreen_ico = document.getElementById('fullscreen_');
        fullscreen_ico.setAttribute('visible', false);
        this.el.addEventListener('click', function(){
            if(myVideo.paused) {
                myVideo.play();
                playicon.setAttribute('visible', false);
                fullscreen_ico.setAttribute('visible', true);
            } else {
                 myVideo.pause();
                playicon.setAttribute('visible', true);
                fullscreen_ico.setAttribute('visible', false);
            }
        });
    }
  })
