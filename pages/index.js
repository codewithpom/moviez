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
      </Head>
      <Form func={setMovies} /> {/* Form here */}
      <br />
      <Table movies={movies} /> {/* Table here */}

    </div>
  )
}
