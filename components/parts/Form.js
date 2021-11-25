import { useState, useEffect } from 'react'
import PropTypes from "prop-types";

export default function Form(props) {
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.keyCode != 191) return null;
            event.preventDefault();
            document.getElementById('input').focus()

        });
    }, [])

    const [search, setSearch] = useState("");
    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // fetch data from API
        console.log(search);
        if (search.length < 1) { setEmpty(true); return null };
        setLoading(true);
        setEmpty(false);
        const url = "/api/movies_search?query=" + search;
        fetch(url)
            .then(response => response.json())
            .then(response => { setLoading(false); props.func(response.results) });

    }

    return (
        <>

            <h1 className={"text-center"}>Enter Movie Name</h1>
            <br />
            <form
                className={"form-inline my-2 my-lg-0"}
                onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2"
                    type={"search"}
                    placeholder={"Search"}
                    aria-label={"Search"}
                    value={search}
                    onChange={handleChange}
                    id={"input"}
                />

                <br />
                <div className={"text-center"}>
                    <button
                        className={"btn btn-outline-success my-2 my-sm-0"}
                        type={"submit"}
                    >Search</button>
                </div>
                <br />


                {empty ?
                    <div class="alert alert-danger" role="alert">
                        <div className="text-center">
                            Search query cannot be empty
                        </div>
                    </div>
                    : null}


                {loading ?
                    <div className="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    : null}




            </form>
        </>
    )
}

Form.propTypes = {
    func: PropTypes.func.isRequired
}
