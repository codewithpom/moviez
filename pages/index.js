import Head from 'next/head'
import { useState, useEffect } from "react"
import Form from '../components/Form'
import Table from '../components/Table';

export default function Home() {
  const [movies, setMovies] = useState([]);


  return (
    <div className="container pb-5">
      <Head>
        <title>Search for any movie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="content-language" content="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="movie, search, random" />
        <meta name="author" content="Padmashree Jha" />
        <meta name="publisher" content="Padmashree Jha" />
        <meta name="description" content="Search any movie on the internet" />
        <meta name="copyright" content="Padmashree Jha" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Search for any movie" />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:image"} content={"https://image.tmdb.org/t/p/original//78lPtwv72eTNqFW9COBYI0dWDJa.jpg"} />

      </Head>
      <Form func={setMovies} /> {/* Form here */}
      <br />
      <Table movies={movies} /> {/* Table here */}

    </div>
  )
}
