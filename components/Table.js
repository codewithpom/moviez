import PropTypes from 'prop-types';
import Image from "next/image"


const url = "https://img.icons8.com/external-dreamstale-lineal-dreamstale/512/000000/external-user-profile-interaction-dreamstale-lineal-dreamstale.png"


export default function Table(props) {
    function error(event) {
        event.target.src = url;
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                {props.movies.map(movie => (
                    <div
                        className={"col-md-4"}
                        key={movie.id}>
                        <div
                            className={"card mb-4 shadow-sm"}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                onError={error}
                                className={"card-img-top"}
                            />

                            <div className={"card-body"}>
                                <p className={"card-text"}>{movie.title}</p>
                                <div className={"d-flex justify-content-between align-items-center"}>
                                    <div className={"btn-group"}>
                                        <button
                                            type={"button"}
                                            className={"btn btn-sm btn-outline-secondary"}
                                        >
                                            View
                                        </button>

                                    </div>
                                    <small className={"text-muted"}>9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}


Table.propTypes = {
    movies: PropTypes.array.isRequired
}
