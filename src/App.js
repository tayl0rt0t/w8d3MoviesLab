import {useState, useEffect} from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import './App.css';


// const apiKey = process.env.MOVIE_API_KEY;
// console.log(process.env.apiKey)
const apiKey = '815daa40';

function App() {
  const [movie,setMovie] = useState(null)

  const getMovie = async(searchTerm) => {
     try{
     const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
     const data = await res.json();
     setMovie(data);
     }
     catch(e){
      console.error(e);
     }
  }
  useEffect(() => {
    getMovie("Titanic");
  }, []);

  return (
    <div className="bg-slate-950 flex justify-center, justify-items-center, flex-col, items-center">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
