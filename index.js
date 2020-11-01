const audio = document.querySelector('audio')
const boton = document.querySelector('button')
const input = document.getElementById('volumen')

const player = new MediaPlayer({ el: audio })

function MediaPlayer(config) {
    this.media = config.el
  }
  
  MediaPlayer.prototype.play = function() {
    this.media.play()
  }
  MediaPlayer.prototype.pause = function() {
    this.media.pause()
  }
  MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
  }
  
boton.onclick = () => player.togglePlay()

input.addEventListener("mousemove", (ev) => audio.volume = ev.target.value)