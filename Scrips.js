//video seccion bienvenida
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video-pl2");

  // Ajustar el volumen del video
  video.volume = 0.3;

  // Cambiar el estado de silencio al hacer clic en el contenedor del video
  document
    .querySelector(".video-container")
    .addEventListener("click", function () {
      video.muted = !video.muted;
    });
});
