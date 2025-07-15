export const getMoviesBySearch = (movies, values) =>{
    console.log({values});
    console.log({movies});
    const filteredMovies = values?.length > 0? movies?.filter(movie => movie.name.toLowerCase().includes(values.toLowerCase())):movies
    return filteredMovies;
}