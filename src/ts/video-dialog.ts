const dialog = document.getElementById("video-dialog") as HTMLElement
const video = document.getElementById("preview-video") as HTMLVideoElement
const closeButton = document.getElementById("close-btn") as HTMLElement
const playButton = document.getElementById("play-btn") as HTMLElement

closeButton.onclick = () => {
  video.muted = true
  video
    .play()
    .then(() => {
      dialog.style.display = "none"
    })
    .catch(error => {
      console.error("Play failed:", error)
    })
}

window.onclick = (event: MouseEvent) => {
  if (event.target === dialog) {
    dialog.style.display = "none"
  }
}

playButton.onclick = () => {
  video.muted = false
  video
    .play()
    .then(() => {
      dialog.style.display = "none"
    })
    .catch(error => {
      console.error("Play failed:", error)
    })
}
