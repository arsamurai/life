interface ObservedElement extends Element {
  hasPlayed?: boolean
}

const fadeAudio = new Audio("/fade.mp3")
const tombstoneAudio = new Audio("/tombstone.mp3")

const addAudio = (event: Aos.AosEvent, id: string, audio: HTMLAudioElement) => {
  const detail = (event as CustomEvent).detail
  if (detail?.id === id) {
    const delay = detail.getAttribute("data-aos-delay")
    const delayMs = delay ? parseFloat(delay) : 0

    const playAudio = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, delayMs))
        audio.currentTime = 0
        await audio.play()
      } catch (error) {
        console.error("Error attempting to play audio:", error)
      }
    }

    playAudio()
  }
}

document.addEventListener("aos:in", async event => {
  addAudio(event, "tombstone", tombstoneAudio)
  addAudio(event, "animal", fadeAudio)
})
