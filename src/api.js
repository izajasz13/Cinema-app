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
            title: arrayCurrMovies[i].title,
            description: arrayCurrMovies[i].overview,
            release_date: arrayCurrMovies[i].release_date,
            genre: genre,
            vote: arrayCurrMovies[i].vote_average,
            img: arrayCurrMovies[i].poster_path
        }
        movies.push(movie);
    }

    // const getUpMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e2cc5c81b40a3219ee15462c33afab71&language=en-US&page=1');
    // const jsonUpMovies = await getUpMovies.json();
    // const arrayUpMovies = jsonUpMovies.results;
    // for(let i = 1; i < 4; ++i){
    //     const genre = [];
    //     arrayUpMovies[i].genre_ids.forEach(ele => genre.push(genres[ele]));     
    //     const movie = {
    //         title: arrayUpMovies[i].title,
    //         description: arrayUpMovies[i].overview,
    //         release_date: arrayUpMovies[i].release_date,
    //         genre: genre,
    //         vote: arrayUpMovies[i].vote_average,
    //         img: arrayUpMovies[i].poster_path
    //     }
    //     movies.push(movie);
    // }

    return movies;
}

export default getMovies;

