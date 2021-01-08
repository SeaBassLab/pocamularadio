// Media Player

const audio = document.querySelector('audio')
const boton = document.getElementById('play_pause_button')
const input = document.getElementById('volumen')
const onOff = document.getElementById('on_off')
const toggleLigth = document.getElementById('toggle_ligth')

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
        onOff.innerHTML = "ON"
        toggleLigth.classList.remove('off')
        toggleLigth.classList.add('on')
    } else {
        this.pause()
        onOff.innerHTML = "OFF"
        toggleLigth.classList.remove('on')
        toggleLigth.classList.add('off')
    }
  }
  
boton.onclick = () => player.togglePlay()
