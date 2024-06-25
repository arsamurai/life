// interface ObservedElement extends Element {
//   hasPlayed?: boolean
// }

// const audio = new Audio("/fade.mp3")

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       const target = entry.target as ObservedElement
//       if (
//         entry.isIntersecting &&
//         target.classList.contains("animals") &&
//         !target.hasPlayed
//       ) {
//         let playCount = 0

//         const playAudio = () => {
//           audio.pause()
//           audio.currentTime = 0
//           audio
//             .play()
//             .then(() => {
//               playCount++
//               if (playCount < 7) {
//                 setTimeout(playAudio, 310)
//               }
//             })
//             .catch(error => {
//               console.error("Error attempting to play audio:", error)
//             })
//         }

//         playAudio()
//         target.hasPlayed = true
//       }
//     })
//   },
// )

// document.querySelectorAll(".animals").forEach(box => {
//   observer.observe(box as ObservedElement)
// })
