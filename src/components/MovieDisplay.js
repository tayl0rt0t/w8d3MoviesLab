

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  MovieDisplay ({movie}) {
    //The component must return some JSX
    const loaded = () =>{
    return (
        <div className="text-white">
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        <h3>{movie.Plot}</h3>
        <h4>Realeased: {movie.Released}</h4>
        <h4>Box Office: {movie.BoxOffice}</h4>
        </div>
    )
    };
    const loading = () => {
        return<h1 className="text-white">Movie to Display</h1>
    }
    return movie ? loaded():loading()
  };
  
  // We must export the component to use it in other files