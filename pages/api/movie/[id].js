const API_KEY = process.env.API_KEY;


function get_movie_details(movie_id, res) {
    // This function takes the movie_id and get details about the movie from themoviedb.org
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => console.error(err));

}

export default function details(req, res) {

    const { id } = req.query;
    get_movie_details(id, res);


}





