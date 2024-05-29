import React from 'react';
import './movie.css';

function MovieCard({ title, releaseYear, genre }) {
  return (
    <div className='m-cards'>
    <div className="movie-card">
        <img src='https://imgs.search.brave.com/F_rgrcry-biB4_oOEbmYQ2d9hcE5R21oyb77t_gJ8BI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAzL2RvbnQt/bG9vay11cC1tb3Zp/ZS1wb3N0ZXIuanBn'/>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-release-year">
        Release Year: <span className="movie-release-year-value">{releaseYear}</span>
      </p>
      <p className="movie-genre">
        Genre: <span className="movie-genre-value">{genre}</span>
      </p>
    </div>
    <div className="movie-card">
        <img src='https://imgs.search.brave.com/F_rgrcry-biB4_oOEbmYQ2d9hcE5R21oyb77t_gJ8BI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAzL2RvbnQt/bG9vay11cC1tb3Zp/ZS1wb3N0ZXIuanBn'/>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-release-year">
        Release Year: <span className="movie-release-year-value">{releaseYear}</span>
      </p>
      <p className="movie-genre">
        Genre: <span className="movie-genre-value">{genre}</span>
      </p>
    </div>
    </div>
  );
}

export default MovieCard;