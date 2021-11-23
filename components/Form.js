import { useState, useEffect } from 'react'
import PropTypes from "prop-types";

export default function Form(props) {
   useEffect(() => {
	   document.addEventListener('keydown', function(event) {
		   if (event.keyCode == 191){
			   event.preventDefault();
			   document.getElementById('input').focus()
		   }
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
        const url = "/api/movies_search?query=" + search;
        fetch(url)
            .then(response => response.json())
            .then(response => props.func(response.results));

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

            </form>
        </>
    )
}

Form.propTypes = {
    func: PropTypes.func.isRequired
}
