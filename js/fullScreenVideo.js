document.addEventListener("DOMContentLoaded", function () {
     var video = document.querySelector("#video-container video");
     var button = document.getElementById("toggleFullScreen");

     button.addEventListener("click", function () {
          if (video.requestFullscreen) {
               video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
               video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
               video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
               video.msRequestFullscreen();
          }
     });
});