import Head from 'next/head'
import { useState,useEffect } from "react"
import Form from '../components/Form'
import Table from '../components/Table';

export default function Home() {
  const [movies, setMovies] = useState([]);


  return (
    <div className="container pb-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form func={setMovies} /> {/* Form here */}
      <br />
      <Table movies={movies} /> {/* Table here */}

    </div>
  )
}
