import React from 'react'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'
import './styles/navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  handleClick = e => {
    const onOff = document.getElementById('on_off')
    const toggleLigth = document.getElementById('toggle_ligth')
    const audio = document.querySelector('audio')
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
    player.togglePlay()
  }
  
    render() {
        return <div className="navegator">
                  <div className="navegator_head">
                    <div className="button_container">
                      <button onClick={this.handleClick} className="button" id="play_pause_button"></button>
                    </div>
                    <div className="text_container">
                      <div className="toggle_ligth off" id="toggle_ligth"></div>
                      <div className="on_off" id="on_off">OFF</div>
                      <h3>Pocamula Radio</h3>
                    </div>
                  </div>
                  <div className="navegator_links"><Link to="/home/sincro"> <br /> Sincronismo diario</Link></div>
                    <div className="navegator_links"><Link to="/home/NMG">"El testamento de una Nueva Medicina" <br /> <em>Dr Ryke Geerd Hamer</em></Link></div>
                    <div className="navegator_links"><Link to="/home/recetas">“Que tu alimento sea tu medicina y tu medicina sea tu alimento” <em>Hipócrates</em></Link></div>
                    <div className="navegator_links"><Link to="/home/karaoke"> <br /> "KARAOKE"</Link></div>
                    <div className="donate_button"><a href="https://www.paypal.com/donate?hosted_button_id=RVXJCNY9B63JG" target="_blank" rel="noreferrer">Donate</a></div>
                    <div className="navegator_links_sm">
                      <div className="social_media"><a href="https://twitter.com/PocamulaR" target="_blank" rel="noreferrer"><img src={twitter} alt="logo twitter"></img></a></div>
                      <div className="social_media"><a href="/" target="_blank" rel="noreferrer"><img src={facebook} alt="logo facebook"></img></a></div>
                      <div className="social_media"><a href="/" target="_blank" rel="noreferrer"><img src={youtube} alt="logo youtube"></img></a></div>
                      <div className="social_media"><a href="https://instagram.com/pocamularadio?r=nametag" target="_blank" rel="noreferrer"><img src={instagram} alt="logo instagram"></img></a></div>
                    </div>
                    <audio id="audio"> <source src="http://stream.zeno.fm/ewt0dkvcna0uv" type="audio/ogg" /></audio>
                </div>
    }
}

export default Navbar
