const API_KEY = process.env.API_KEY;


export default function SearchMovie(req, res) {
    const { query } = req.query;
    const { page } = req.query || 1;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;


    fetch(URL)
        .then(response => response.json())
        .then(response => res.json(response));

    console.log("Fetched")

}

