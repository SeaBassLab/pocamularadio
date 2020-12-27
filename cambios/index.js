// Media Player

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

// Top Movie
const movieList = document.getElementById('movies');
const apiKey = 'b89fc45c2067cbd33560270639722eae';

      async function getMovie(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      }

      async function getPopularMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
      }

      async function getTopMoviesIds(n = 3) {
       
        const popularMovies = await getPopularMovies();
        const ids = popularMovies.slice(0, n).map(movie => movie.id);
        return ids;
      }

      function renderMovies(movies) {
        movieList.innerHTML = '';

        movies.forEach(movie => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
            <h5>${movie.title}</h5>
            <p>Publicado el <em>${movie.release_date}</em></p>
            `;

          movieList.appendChild(listItem);
        });
      }

      async function getTopMoviesInSequence() {
        const ids = await getTopMoviesIds();
        const movies = [];

        for (const id of ids) {
          const movie = await getMovie(id);
          movies.push(movie);
        }

        return movies;
      }

      document.getElementById('sequence').onclick = async function() {
        const movies = await getTopMoviesInSequence();
        movieList.classList.remove('hide')
        renderMovies(movies);
        movieList.addEventListener('click', () => movieList.classList.add('hide'))
      };
