export function stopVideos() {
  var videos = document.querySelectorAll("iframe, video");
  Array.prototype.forEach.call(videos, function (video) {
    if (video.tagName.toLowerCase() === "video") {
      video.pause();
    } else {
      var src = video.src;
      video.src = src;
    }
  });
}
