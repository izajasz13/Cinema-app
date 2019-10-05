async function getMovies(){
    const genres = {};
    const getGenre = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e2cc5c81b40a3219ee15462c33afab71&language=en-US');
    const jsonGenre = await getGenre.json();
    jsonGenre.genres.forEach(ele => genres[ele.id] = ele.name);

    const movies = []
    const getCurrMovies = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e2cc5c81b40a3219ee15462c33afab71&language=en-US&page=1');
    const jsonCurrMovies = await getCurrMovies.json();
    const arrayCurrMovies = jsonCurrMovies.results;
    for(let i = 0; i < 12; ++i){
        const genre = [];
        arrayCurrMovies[i].genre_ids.forEach(ele => genre.push(genres[ele]));     
        const movie = {
            id: arrayCurrMovies[i].id,
            title: arrayCurrMovies[i].title,
            description: arrayCurrMovies[i].overview,
            release_date: arrayCurrMovies[i].release_date,
            genre: genre,
            vote: arrayCurrMovies[i].vote_average,
            img: arrayCurrMovies[i].poster_path
        }
        movies.push(movie);
    }

    return movies;
}

export default getMovies;

