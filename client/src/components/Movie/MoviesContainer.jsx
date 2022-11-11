import MovieCard from "./MovieCard";

const MoviesContainer = (props) => {
  return (
    <div className="grid grid-cols-12-fit justify-items-center sm:justify-items-center gap-y-6">
      {props.movieList.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.original_title}
            release={new Date(movie.release_date)}
            rating={movie.vote_average}
            poster={movie.poster_path}
          />
        );
      })}
    </div>
  );
};
export default MoviesContainer;
